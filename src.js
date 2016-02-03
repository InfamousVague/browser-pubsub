module.exports = class PubSub {

  constructor(channel) {
    this.channel = channel;
    this.listener = () => {};
  }

  get() {
    return JSON.parse(localStorage.getItem(this.channel))[0];
  }

  publish(data) {
  	localStorage.setItem(this.channel, JSON.stringify([data, Date.now()]));
    this.listener(this.get());
  }

  subscribe(listener) {
    this.listener = listener;
    window.addEventListener('storage', (e) => {
    	if(e.key === this.channel) this.listener(this.get());
    }, false);
  }

}
