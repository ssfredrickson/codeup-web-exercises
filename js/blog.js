"use strict";

$(function () {
  $.get("data/blog.json").done(function (data) {
    $.each(data, function () {
      $("#posts").append(
        `<div class="card m-5" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-title">${this.title}</h3>
    
    <h6 class="card-subtitle mb-2 text-body-secondary">${this.date}</h6>
    <p class="card-text">${this.content}</p>
    <p>Catagories: ${this.categories}</p>
  
  </div>
</div>`
      );
    });
  });
});
