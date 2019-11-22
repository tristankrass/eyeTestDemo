$(".btn-startTest").on("click", function() {
  nextSection(".section-1", ".section-2");
});

function nextSection(sectionFrom, sectionTo) {
  $(sectionFrom).addClass("hidden");
  $(sectionFrom).removeClass("visible");
  $(sectionTo).addClass("visible");
}
