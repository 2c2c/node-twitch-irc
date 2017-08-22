
A twitch.tv chat/dashboard app made with React and Electron. Interfaces with twitch
via tmi.js.

If you want to play with it, clone and:

```
npm i
npm run dev
```

![](http://i.imgur.com/Pa83gGE.gif)

The imagined purpose for the app is for popular streamers who deal with fast moving chat for hours everyday.

* All of the admin/mod commands are available
* Show/hide stream preview
* Term popularity list with filtering

The term popularity list can help a streamer quickly understand the general sentiment of the stream without straining to read tens of lines per second. If one of the terms is "AUDIO" or "OVERLAY", you probably have have a stream issue to fix. If one of the terms is ResidentSleeper, you're probably being boring.

![](http://i.imgur.com/stehLdC.gif)

![](http://i.imgur.com/fON8fUW.gif)

