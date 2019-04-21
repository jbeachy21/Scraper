$.getJSON("/articles", function(data) {
    // For each one
    $("#articles").append("<br><br><br>");
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $("#articles").append("<p data-id=" + data[i]._id + ">" + "article id: " + data[i]._id + "<br />"  + data[i].title + "<br />" + data[i].link + "</p>");
    }
  });

  
