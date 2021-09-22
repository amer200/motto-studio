$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 490) {
      $('#mainNav').addClass("dark");
    } else {
      $('#mainNav').removeClass("dark");
    }
  });
});
var pTitle = $('header h1'),
  header = $('header'),
  headerImg = ["img/1.jpg"],
  content1 = $('#content-1'),
  contentP = $('.content p');

function project1() {
  var imgsrc = ["img/2.jpg", "img/1.jpg", "img/3.jpg"],
    count = 0;
  pTitle.text("project1");
  header.css('background-image', 'url(' + headerImg[0] + ')');
  contentP.text('content for project1 content for project1 content for project1');
  imgsrc.forEach(function(img) {
    var div = `<div class="col-lg-6"><img src= "${imgsrc[count]}"></div>`;
    content1.after(div);
    count++;
  });
}
function project2() {
  var imgsrc = ["img/2.jpg", "img/1.jpg", "img/3.jpg"],
    count = 0;
  pTitle.text("project2");
  header.css('background-image', 'url(' + headerImg[0] + ')');
  contentP.text('content for project1 content for project1 content for project1');
  imgsrc.forEach(function(img) {
    var div = `<div class="col-lg-6"><img src= "${imgsrc[count]}"></div>`;
    content1.after(div);
    count++;
  });
}
function project3() {
  var imgsrc = ["img/2.jpg", "img/1.jpg", "img/3.jpg"],
    count = 0;
  pTitle.text("project3");
  header.css('background-image', 'url(' + headerImg[0] + ')');
  contentP.text('content for project1 content for project1 content for project1');
  imgsrc.forEach(function(img) {
    var div = `<div class="col-lg-6"><img src= "${imgsrc[count]}"></div>`;
    content1.after(div);
    count++;
  });
}
function project4() {
  var imgsrc = ["img/2.jpg", "img/1.jpg", "img/3.jpg"],
    count = 0;
  pTitle.text("project4");
  header.css('background-image', 'url(' + headerImg[0] + ')');
  contentP.text('content for project1 content for project1 content for project1');
  imgsrc.forEach(function(img) {
    var div = `<div class="col-lg-6"><img src= "${imgsrc[count]}"></div>`;
    content1.after(div);
    count++;
  });
}
function project5() {
  var imgsrc = ["img/2.jpg", "img/1.jpg", "img/3.jpg"],
    count = 0;
  pTitle.text("project5");
  header.css('background-image', 'url(' + headerImg[0] + ')');
  contentP.text('content for project1 content for project1 content for project1');
  imgsrc.forEach(function(img) {
    var div = `<div class="col-lg-6"><img src= "${imgsrc[count]}"></div>`;
    content1.after(div);
    count++;
  });
}
function project6() {
  var imgsrc = ["img/2.jpg", "img/1.jpg", "img/3.jpg"],
    count = 0;
  pTitle.text("project6");
  header.css('background-image', 'url(' + headerImg[0] + ')');
  contentP.text('content for project1 content for project1 content for project1');
  imgsrc.forEach(function(img) {
    var div = `<div class="col-lg-6"><img src= "${imgsrc[count]}"></div>`;
    content1.after(div);
    count++;
  });
}
function project7() {
  var imgsrc = ["img/2.jpg", "img/1.jpg", "img/3.jpg"],
    count = 0;
  pTitle.text("project7");
  header.css('background-image', 'url(' + headerImg[0] + ')');
  contentP.text('content for project1 content for project1 content for project1');
  imgsrc.forEach(function(img) {
    var div = `<div class="col-lg-6"><img src= "${imgsrc[count]}"></div>`;
    content1.after(div);
    count++;
  });
}
function project8() {
  var imgsrc = ["img/2.jpg", "img/1.jpg", "img/3.jpg"],
    count = 0;
  pTitle.text("project8");
  header.css('background-image', 'url(' + headerImg[0] + ')');
  contentP.text('content for project1 content for project1 content for project1');
  imgsrc.forEach(function(img) {
    var div = `<div class="col-lg-6"><img src= "${imgsrc[count]}"></div>`;
    content1.after(div);
    count++;
  });
}
function project9() {
  var imgsrc = ["img/2.jpg", "img/1.jpg", "img/3.jpg"],
    count = 0;
  pTitle.text("project9");
  header.css('background-image', 'url(' + headerImg[0] + ')');
  contentP.text('content for project1 content for project1 content for project1');
  imgsrc.forEach(function(img) {
    var div = `<div class="col-lg-6"><img src= "${imgsrc[count]}"></div>`;
    content1.after(div);
    count++;
  });
}
switch (window.location.search) {
  case '?1':
    project1()
    break;
  case '?2':
    project2()
    break;
  case '?3':
    project3()
    break;
  case '?4':
    project4()
    break;
  case '?5':
    project5()
    break;
  case '?6':
    project6()
    break;
  case '?7':
    project7()
    break;
  case '?8':
    project8()
    break;
  case '?9':
    project9()
    break;
}
