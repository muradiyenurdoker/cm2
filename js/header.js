function sidebarFunc() {
  //! home sidebar start
  const menuToggle = document.querySelector('#btn-menu');
  const menu = document.querySelector('#sidebar');
  const closeMenu = document.querySelector('#close-sidebar');

  menuToggle.addEventListener('click', function () {
    menu.style.left = '0';
  });

  closeMenu.addEventListener('click', function () {
    menu.style.left = '-100%';
  });

  // /* click outside start */
  document.addEventListener('click', function (event) {
    if (
      !event.composedPath().includes(menu) &&
      !event.composedPath().includes(menuToggle)
    ) {
      menu.style.left = '-100%';
    }
  });
  /* click outside end */

  //! home sidebar end
}



function headerFunc() {
  sidebarFunc();

}

export default headerFunc();
