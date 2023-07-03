let locationDiv = document.querySelector('.location-div');
console.log(locationDiv);
var sections = locationDiv.children;

window.addEventListener('scroll', function () {
  var visibleSection = getVisibleSection();
  if (visibleSection) {
    var sectionId = visibleSection.id;

    var currentURL = window.location.href;
    var hashIndex = currentURL.indexOf('#');
    var urlWithoutSectionId = currentURL.substring(0, hashIndex !== -1 ? hashIndex : currentURL.length);
    var url = urlWithoutSectionId + '#' + sectionId;
    
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
