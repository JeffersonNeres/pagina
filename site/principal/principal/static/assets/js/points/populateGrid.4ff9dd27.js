"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var PopulateGrid=function(){function r(e,t){_classCallCheck(this,r),this.username=e,this.userpoints=t}return _createClass(r,[{key:"populate",value:function(){var r=this;this.userpoints.chartScores.forEach(function(e){var t=$('.pointsGrid-cell[data-username="'.concat(r.username,'"][data-date="').concat(e.formatedDate,'"]'));t.attr("aria-hidden",!e.hasScore),t.removeClass("pointsGrid-cell--no-score"),t.addClass("pointsGrid-cell--".concat(e.scoreColor)),t.find(".pointsGrid-cell-details").html(e.element)})}}]),r}();