# browser-pubsub
PubSub in the browser, across Tabs & Windows. Just 0.5kb

## Usage

```javascript
// Create a new PubSub channel.
let Channel = new PubSub('my_channel');

// Easily subscribe, data provided via callback.
Channel.subscribe((data) => {
  console.log(data);
});

// Publish a new message to channel.
Channel.publish({message: 'Hello world!'});
```
