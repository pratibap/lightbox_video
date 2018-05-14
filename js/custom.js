$(".company_logo").click(function() {
	lightbox_open(this);
});

$(".lightbox_close").click(function() {
	lightbox_close();
});

$("#fade").click(function() {
	lightbox_close();
});

function lightbox_open(e) {
  var company_video = $("#company_video")[0];
  $("#company_video source").attr("src", $(e).data("video"));
  company_video.load();
  window.scrollTo(0, 0);
  $("#lightbox").toggle();
  $("#fade").toggle();
  company_video.play();
}

function lightbox_close() {
  var company_video = $("company_video")[0];
  $("#lightbox").toggle();
  $("#fade").toggle();
  company_video.pause();
}

$(document).onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}