
function fillPrgBar(target) {
  var selector = "#" + target;// #progress0

  var prgVal   = $(selector + " .bar_txt").data("value");// 90
  var prgWidth = $(selector + " .progress").width();
  var barWidth = prgWidth * (prgVal / 100);

  $(selector + " .progress .bar").animate({ width: barWidth }, 1000, "swing");
  $(selector + " .bar_txt").text(prgVal + "%");
}


function emptyPrgBar(target) {
  var selector = "#" + target;// #progress0

  $(selector + " .progress .bar").animate({ width: 0 }, 100, "swing");
  $(selector + " .bar_txt").text("");
}