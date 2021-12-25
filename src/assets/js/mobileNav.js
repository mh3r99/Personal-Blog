const burger = document.querySelector("#sidebarToggle"),
  sidebar = document.querySelector("#sidebar"),
  page = document.querySelector(".page"),
  { body } = document;

burger.addEventListener("click", (e) => {
  if (body.classList.contains("show-sidebar")) {
    closeSidebar();
  } else {
    showSidebar();
  }
});

function showSidebar() {
  let mask = document.createElement("div");
  mask.classList.add("page__mask");
  mask.addEventListener("click", closeSidebar);
  page.appendChild(mask);

  body.classList.add("show-sidebar");
}

function closeSidebar() {
  body.classList.remove("show-sidebar");
  document.querySelector(".page__mask").remove();
}
