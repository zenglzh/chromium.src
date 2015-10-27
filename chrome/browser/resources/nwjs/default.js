console.log("NWJS/DEFAULT.JS");
var manifest = chrome.runtime.getManifest();
var options = {'id': '.main'};
if (manifest.window) {
  options.innerBounds = {};
  if (manifest.window.frame === false)
    options.frame = 'none';
  if (manifest.window.resizable === false)
    options.resizable = false;
  if (manifest.window.height)
    options.innerBounds.height = manifest.window.height;
  if (manifest.window.width)
    options.innerBounds.width = manifest.window.width;
  if (manifest.window.min_width)
    options.innerBounds.minWidth = manifest.window.min_width;
  if (manifest.window.max_width)
    options.innerBounds.maxWidth = manifest.window.max_width;
  if (manifest.window.min_height)
    options.innerBounds.minHeight = manifest.window.min_height;
  if (manifest.window.max_height)
    options.innerBounds.maxHeight = manifest.window.max_height;
  if (manifest.window.fullscreen === true)
    options.state = 'fullscreen';
  if (manifest.window.show === false)
    options.hidden = true;
  if (manifest.window['always-on-top'] === true)
    options.alwaysOnTop = true;
  if (manifest.window['visible-on-all-workspaces'] === true)
    options.visibleOnAllWorkspaces = true;
}
chrome.app.window.create(manifest.main, options);