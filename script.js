let scrollbtm = document.getElementById("scrollDown");
let header = document.getElementById("header-bg-image");
let headerHight = header.offsetHeight;
function Scroll() {
  window.scrollTo({ top: headerHight, behavior: "smooth" });
}
