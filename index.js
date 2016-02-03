'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

module.exports = (function () {
  function PubSub(channel) {
    _classCallCheck(this, PubSub);

    this.channel = channel;
    this.listener = function () {};
  }

  _createClass(PubSub, [{
    key: 'get',
    value: function get() {
      var channel = JSON.parse(localStorage.getItem(this.channel));
      if (channel) {
        return channel[0];
      } else {
        return {};
      }
    }
  }, {
    key: 'publish',
    value: function publish(data) {
      localStorage.setItem(this.channel, JSON.stringify([data, Date.now()]));
      this.listener(this.get());
    }
  }, {
    key: 'subscribe',
    value: function subscribe(listener) {
      var _this = this;

      this.listener = listener;
      window.addEventListener('storage', function (e) {
        if (e.key === _this.channel) _this.listener(_this.get());
      }, false);
    }
  }]);

  return PubSub;
})();
