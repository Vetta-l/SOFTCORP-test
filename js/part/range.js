"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.addEventListener("DOMContentLoaded", function () {
  var range1 = new rSlider({
    element: "#range1",
    tick: 1
  });
});

var rSlider = /*#__PURE__*/function () {
  function rSlider(args) {
    var _this = this;

    _classCallCheck(this, rSlider);

    this.el = document.querySelector(args.element);
    this.min = +this.el.min || 0;
    this.max = +this.el.max || 100;
    this.step = +this.el.step || 1;
    this.tick = args.tick || this.step; // this.addTicks();

    this.dataRange = document.createElement("div");
    this.dataRange.className = "range-data";
    this.el.parentElement.insertBefore(this.dataRange, this.el);
    this.updatePos();
    this.el.addEventListener("input", function () {
      _this.updatePos();
    });
  } // addTicks() {
  //     let wrap = document.createElement("div");
  //     wrap.className = "range";
  //     this.el.parentElement.insertBefore(wrap,this.el);
  //     wrap.appendChild(this.el);
  //     let ticks = document.createElement("div");
  //     ticks.className = "range-ticks";
  //     wrap.appendChild(ticks);
  //     for (let t = this.min; t <= this.max; t += this.tick) {
  //         let tick = document.createElement("span");
  //         tick.className = "range-tick";
  //         ticks.appendChild(tick);
  //         let tickText = document.createElement("span");
  //         tickText.className = "range-tick-text";
  //         tick.appendChild(tickText);
  //         tickText.textContent = t;
  //     }
  // }


  _createClass(rSlider, [{
    key: "getRangePercent",
    value: function getRangePercent() {
      var max = this.el.max,
          min = this.el.min,
          relativeValue = this.el.value - min,
          ticks = max - min,
          percent = relativeValue / ticks;
      return percent;
    }
  }, {
    key: "updatePos",
    value: function updatePos() {
      var percent = this.getRangePercent(),
          left = percent * 100,
          emAdjust = percent * 3;
      this.dataRange.style.left = "calc(".concat(left, "% - ").concat(emAdjust, "em)");
      this.dataRange.innerHTML = this.el.value + "<span>%</span>";
    }
  }]);

  return rSlider;
}();