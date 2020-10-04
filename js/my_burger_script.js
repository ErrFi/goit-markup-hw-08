(() => {
  const refs = {
    openMenuBtn: document.querySelector("[btn-open-menu]"),
    closeMenuBtn: document.querySelector("[btn-close-menu]"),
    menu: document.querySelector("[toggle-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.openMenuBtn.addEventListener("click", toggleBtn);
  refs.closeMenuBtn.addEventListener("click", toggleBtn);
  refs.openMenuBtn.addEventListener("click", toggleBtn2);
  refs.closeMenuBtn.addEventListener("click", toggleBtn2);

  function toggleMenu() {
    refs.menu.classList.toggle("menu-hidden");
  }
  function toggleBtn() {
    refs.closeMenuBtn.classList.toggle("btn-hidden");
  }
  function toggleBtn2() {
    refs.openMenuBtn.classList.toggle("btn-shown");
  }
})();
