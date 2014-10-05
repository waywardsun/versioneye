class User::StashReposController < User::ScmReposController

  before_filter :authenticate


  def index
    status_message = ''
    status_success = true
    task_status = ''

    if current_user.stash_token.nil?
      status_message = 'Your VersionEye account is not connected to Stash.'
      status_success = false
      task_status = StashService::A_TASK_DONE
    else
      task_status = StashService.cached_user_repos current_user
      user_repos = current_user.stash_repos
      if user_repos && user_repos.count > 0
        user_repos = user_repos.desc(:created_at)
      end

      if task_status == StashService::A_TASK_DONE and user_repos.count == 0
        status_message = %w{
          We couldn't find any repositories in your Stash account.
          If you think that's an error please contact the VersionEye team.
        }.join(' ')
        status_success = false
      end
    end

    render json: {
      success: status_success,
      task_status: task_status,
      repos: user_repos,
      message: status_message
    }.to_json
  rescue => e
    logger.error e.message
    logger.error e.backtrace.join("\n")
    render text: "An error occured. We are not able to import Stash repositories. Please contact the VersionEye team.", status: 503
  end


  def show
    owner = params[:owner]
    repo  = params[:repo]
    fullname = "#{owner}/#{repo}"
    @repo = current_user.stash_repos.by_fullname( fullname ).first
  end


  def repo_files
    task_status = ''
    owner = params[:owner]
    repo  = params[:repo]
    fullname = "#{owner}/#{repo}"
    repo = current_user.stash_repos.by_fullname( fullname ).first
    task_status = StashService.status_for current_user, repo
    processed_repo = process_repo( repo )

    render json: {
      task_status: task_status,
      repo: processed_repo
    }.to_json
  end


  def clear
    results = StashRepo.by_user( current_user ).delete_all
    flash[:success] = "Cache is cleaned. Ready to re-import."
    redirect_to :back
  end


  private


    def import_repo(project_name, branch, filename)
      err_message = 'Something went wrong. It was not possible to save the project. Please contact the VersionEye team.'

      project = ProjectImportService.import_from_stash current_user, project_name, filename, branch

      raise err_message if project.nil?
      raise project if project.is_a? String

      repo = {
        repo: project_name,
        filename: filename,
        branch: branch,
        project_id: project.id,
        project_url: url_for(controller: 'projects', action: "show", id: project.id)
      }
      repo
    end


=begin
  adds additional metadata for each item in repo collection,
  for example is this project already imported etc
=end
    def process_repo(repo, task_status = nil)
      imported_repos      = current_user.projects.by_source(Project::A_SOURCE_STASH)
      imported_repo_names = imported_repos.map(&:scm_fullname).to_set
      repo[:supported] = true
      repo[:imported_files] = []

      if imported_repo_names.include?(repo[:fullname])
        imported_files = imported_repos.where(scm_fullname: repo[:fullname])
        imported_files.each do |imported_project|
          filename = imported_project.filename
          project_info = create_project_info( repo, imported_project )
          repo[:imported_files] << project_info
        end
      end
      repo[:project_files] = decode_branch_names( repo[:project_files], "stash" )
      repo[:task_status] = task_status
      repo
    end


end