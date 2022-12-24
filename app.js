let os = navigator.userAgent;
let finalOs = "";
if (os.search("Windows") !== -1) {
   finalOs = "Windows";
} else if (os.search("Mac") !== -1) {
   finalOs = "MacOS";
} else if (os.search("X11") !== -1 && !(os.search("Linux") !== -1)) {
   finalOs = "UNIX";
} else if (os.search("Linux") !== -1 && os.search("X11") !== -1) {
   finalOs = "Linux";
}

if (finalOs === "MacOS") {
   document
      .getElementById("fb")
      .setAttribute("href", "fb://profile?id=hirene9x");
   document
      .getElementById("ig")
      .setAttribute("href", "instagram://user?username=hohien_");
}

document
   .getElementById("zalo")
   .setAttribute("href", "https://zalo.me/0354086520");

window.onbeforeunload = function () {
   window.scrollTo(0, 0);
};
