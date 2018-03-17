var DETAIL_IMAGE_SELECTOR = "[data-image-role=target]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=title]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=trigger]";
var currentThumb = 0;

function setDetails(imageUrl, titleText) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  "use strict";
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  "use strict";
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(function(thumb, index) {
    thumb.addEventListener("click", function(event) {
      event.preventDefault();
      if (index == 5) { //previous clicked
        currentThumb--;
        if (currentThumb < 0) {
          currentThumb = 4;
        }
      }
      else if (index == 6) { //next clicked
        currentThumb=(currentThumb+1)%5;
      }
      else { // clicked on the thumb
        currentThumb = index;
      }
      thumb = thumbnails[currentThumb];
      setDetailsFromThumb(thumb);
    });
  });
}

initializeEvents();
