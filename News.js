//console.log(`we are at project news`);
let container = document.getElementById('main');

catefun('');

function catefun(cateValue) {
  container.innerHTML=`<div id='spinnerdiv'><img class="spinner-grow" id="spinner" src="kbp news.jpg" alt=""/></div>`;
  let str = '';
  // console.log(cateValue);
  xhr = new XMLHttpRequest();
  xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${cateValue}&apiKey=bca359a11fc946c084547e75fababca0`, true);
  xhr.onprogress = function() {
    container.innerHTML = `<div id='spinnerdiv'><img class="spinner-grow" id="spinner" src="kbp news.jpg" alt=""/></div>`;
  }
  xhr.onload = function() {
    if (this.status == 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      // console.log(articles);
      articles.forEach(function(element, index) {
        if (element.urlToImage == null) {
          element.urlToImage = '';
        }
        if (element.description == null) {
          element.description = '';
        }
        str += `<div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4 d-flex">
                    <img  src='${element.urlToImage}' class="img-fluid p-2 my-auto">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${element.title}</h5>
                      <p class="card-text">${element.description}<a href='${element.url}'> view more..</a></p>
                    </div>
                  </div>
                </div>
              </div>`;
        container.innerHTML = str;
        //console.log(element);
      })
    }
    else {
      container.innerHTML = `<h3 class='text-light'>opps! something went wrong</h3>`;
      //console.log('opps');
    }
  }
  xhr.send();
};