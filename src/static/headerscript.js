function classToggle() {
    const navs = document.querySelectorAll(".Navbar__Items");
  
    navs.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
  }
  
  function classToggleBorder() {
    let tag = document.getElementById("borderr");
    if (new Set(tag.classList).has("show")) {
      tag.classList.remove("show");
      tag.classList.add("hide");
    } else {
      tag.classList.add("show");
      tag.classList.remove("hide");
    }
  }
  function callboth() {
    classToggle();
    classToggleBorder();
  }
  document
    .querySelector(".Navbar__Link-toggle")
    .addEventListener("click", callboth);
  