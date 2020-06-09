$(document).ready(function () {
  $("#pagepiling").pagepiling({
    menu: null,
    direction: "horizontal",
    verticalCentered: false,
    sectionsColor: [],
    anchors: [],
    scrollingSpeed: 700,
    easing: "swing",
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: false,
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: ".section",
    animateAnchor: false,

    //events
    onLeave: function (index, nextIndex, direction) {},
    afterLoad: function (anchorLink, index) {},
    afterRender: function () {}
  });
});
function $$(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
}

$$(".circular").forEach(function (el) {
  var NS = "http://www.w3.org/2000/svg";

  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 100 100");

  var circle = document.createElementNS(NS, "path");
  circle.setAttribute("d", "M0,50 a50,50 0 1,1 0,1z");
  circle.setAttribute("id", "circle");

  var text = document.createElementNS(NS, "text");
  var textPath = document.createElementNS(NS, "textPath");
  textPath.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    "#circle"
  );
  textPath.textContent = el.textContent;
  text.appendChild(textPath);

  svg.appendChild(circle);
  svg.appendChild(text);

  el.textContent = "";
  el.appendChild(svg);
});
