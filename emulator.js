function EJS_start() {
  const iframe = document.createElement("iframe");
  iframe.src = `data/loader.html?core=${EJS_core}&rom=${EJS_gameUrl}`;
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.style.border = "0";
  iframe.allowFullscreen = true;
  document.querySelector(EJS_player).innerHTML = '';
  document.querySelector(EJS_player).appendChild(iframe);
}
