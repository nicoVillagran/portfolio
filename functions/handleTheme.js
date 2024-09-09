const changeTheme = ($btn, btnData) => {
  // event = elemento (element or event.target) | t = dataset.mode
  let storedTheme, mode;
  btnData ? mode = btnData : storedTheme = localStorage.getItem("mode");

  "light" == mode || "dark" == storedTheme
    ? (($btn.dataset.mode = "dark"),
      btnData && localStorage.setItem("mode", "dark"),
      document.documentElement.classList.add("dark"))
    : ("dark" != mode && "light" != storedTheme) ||
      (($btn.dataset.mode = "light"),
      btnData && localStorage.setItem("mode", "light"),
      document.documentElement.classList.remove("dark")),
    !btnData && "dark" == storedTheme && $btn.classList.add("actived");
};

export default changeTheme;
