function init_plots(){
  require(["/assets/libs/d3.v3.min", "/assets/plots/timebar"],
          function(d3, Timebar){
    console.debug("Plot dependencies are now loaded.")
    timebar1 = new Timebar({
      selector: "#plot_latest",
      width: 610,
      height: 80,
      bar: {width: 10}});
    timebar1.loadAndRender("/package/latest/timeline30.json");

    timebar1 = new Timebar({
      selector: "#plot_novel",
      width: 610,
      height: 80,
      bar: {width: 10}
    });
    timebar1.loadAndRender("/package/novel/timeline30.json");
  });
}

function init_newsfeed(selector){
  var feeds_urls = $(selector).data('feeds').split(',');
  var feeds_keys = _.range(1, feeds_urls.length + 1);
  var feeds_map = _.object(feeds_keys, feeds_urls);

  jQuery(selector).feeds({
    max: 10,
    feeds: feeds_map,
    loadingTemplate: function(){
      var msg = '<strong>Loading</strong> Currently importing latest news.';
      return msg;
    },
    entryTemplate: function(entry){
      var item_template = _.template(jQuery(selector + "-item-template").html());
      return item_template({entry: entry});
    }
  });

  return true;
}

jQuery(document).ready(function(){

  _.templateSettings = {
    interpolate: /\{\{\=(.+?)\}\}/g,
    evaluate: /\{\{(.+?)\}\}/g
  };

  if(jQuery("#language-newsfeed").length){
    console.debug("Initializing language newsfeed.");
    init_newsfeed("#language-newsfeed");
  }

  if(jQuery("#plot_latest").length){
    init_plots();
  }

});
