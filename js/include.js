fetch("./header.html")
      .then(response => {
        return response.text()
      })
      .then(data => {
        $('#header-html').html(data);
      });
    fetch("./main.html")
      .then(response => {
        return response.text()
      })
      .then(data => {
        $('#main-html').html(data);
      });

      
    fetch("./slide.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      $('#slide-html').html(data);
    });

    
    fetch("./news.html")
      .then(response => {
        return response.text()
      })
      .then(data => {
        $('#news-html').html(data);
      });

      
    fetch("./projects.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      $('#projects-html').html(data);
    });
    
    fetch("./docs.html")
      .then(response => {
        return response.text()
      })
      .then(data => {
        $('#docs-html').html(data);
      });