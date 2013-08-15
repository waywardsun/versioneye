class UserMailer < ActionMailer::Base

  default from: "\"VersionEye\" <notify@versioneye.com>"

  def receipt_email(user)
    @user = user
    @plan = user.plan
    @billing_address = user.billing_address
    mail(
      :to => user.email,
      :subject => "Receipt",
      :tag => "receipt"
      )
  end

  def verification_email(user, verification, email)
    @user = user
    @verificationlink = "#{Settings.server_url_https}/users/activate/#{verification}"
    mail(
      :to => email,
      :subject => "Verification",
      :tag => "verification"
      )
  end

  def verification_email_only(user, verification, email)
    @user = user
    @verificationlink = "#{Settings.server_url_https}/users/activate/#{verification}"
    mail(
      :to => email,
      :subject => "Verification",
      :tag => "verification"
      )
  end

  def verification_email_reminder(user, verification, email)
    @user = user
    @verificationlink = "#{Settings.server_url_https}/users/activate/#{verification}"
    mail(
      :to => email,
      :subject => "Verification Reminder",
      :tag => "verification_reminder"
      )
  end

  def collaboration_invitation(collaborator)
    @caller = collaborator.caller
    @owner = collaborator.owner
    @project = collaborator.project

    mail(
      :to => collaborator[:invitation_email],
      :subject => "Invitation to project collabration",
      :tag => "collaboration"
    )
  end

  def new_collaboration(collaborator)
    @caller = collborator.caller
    @project = collaborator.project
    @callee = collaborator.user
    @collaboration = collaborator

    mail(
      :to => @callee[:email],
      :subject => "#{@caller[:fullname]} added you as collaborator.",
      :tag => "collaboration"
    )
  end

  def reset_password(user)
    @user = user
    @url = "#{Settings.server_url_https}/updatepassword/#{@user.verification}"
    mail(
      :to => @user.email,
      :subject => "Password Reset",
      :tag => "password_reset"
      )
  end

  def new_user_email(user)
    @fullname = user.fullname
    @username = user.username
    @github = user.github_id
    mail(
      :to => "reiz@versioneye.com",
      :subject => "New User",
      :tag => "new_user"
      )
  end
  
  def new_ticket(user, ticket)
    @fullname = user[:fullname]
    @ticket = ticket
    mail(
      :to => user[:email],
      :subject => "VersionEye's lottery confirmation",
      :tag => "new_lottery"
    )
  end
end
