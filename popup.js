$.ajax({
  url: "https://www.flickr.com/search/?q=kitten",
  success: function(data) {
    $(data).find("img").each(function() {
        var src = "https:" + $(this).attr("src");
        $("body").append("<img src='" + src +  "'>");
    });
  }
});