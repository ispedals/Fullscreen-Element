"use strict";
const cm = require("sdk/context-menu");
cm.Item({
  label: "Make Fullscreen",
  context: cm.PredicateContext(() => true),
  contentScript: "self.on('click', (node, data) => node.mozRequestFullScreen())"
});