let locationDiv = document.querySelector('.location-div');
console.log(locationDiv);
var sections = locationDiv.children;

window.addEventListener('scroll', function () {
  var visibleSection = getVisibleSection();
  if (visibleSection) {
    var sectionId = visibleSection.id;
    
    var url = window.location.href.split('#')[0] + '#' + sectionId;
    window.history.replaceState(null, null, url);
  }
});

function getVisibleSection () {
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      return section;
    }
  }
  return null;
}
