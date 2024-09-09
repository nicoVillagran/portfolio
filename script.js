import handleModal from "./functions/handleModal.js";
import changeTheme from "./functions/handleTheme.js"
import { moveSlider } from "./functions/slider.js";
import handleSubmit from "./functions/handleSubmit.js";
import responsiveMedia from "./functions/responsiveMedia.js";

// setTime
import timeSlider from "./timeSlider.js";

const d = document,
  $btnMode = d.getElementById("btnMode"),
  $menu = d.getElementById("menu"),
  $form = d.getElementById("contactForm");
let mediaSlider = window.matchMedia("(max-width: 567px)");

// Code...
d.addEventListener("DOMContentLoaded", () => {
  changeTheme($btnMode);
  responsiveMedia(mediaSlider);
});
d.addEventListener("click", (event) => {
  let $target = event.target,
    theme = $target.dataset.mode;

  if ($target.matches("#btnMode")) {
    changeTheme($target, theme);
    $target.classList.toggle("actived");
  } else if ($target.matches(".menuBtn *") || $target.matches(".menuBtn")) {
    $menu.classList.toggle("actived");
  } else if ($target.matches(".index")) {
    // clearInterval(timeSlider);
    timeSlider.deleteTime()

    let $indexs = $target.parentElement.children,
      dataIndex = $target.dataset.index,
      $sliderFirstItem =
        $target.parentElement.previousElementSibling.firstElementChild;

    for (const $i of $indexs)
      $i.classList.item(1) && $i.classList.remove("actived");

    $target.classList.add("actived");

    moveSlider($sliderFirstItem, dataIndex, !0);
  } else if (
    $target.matches("#close-subpage") ||
    $target.matches("#open-subpage") ||
    $target.matches("#modal") ||
    $target.matches("#link-contact") ||
    $target.matches("#see-readme") ||
    $target.matches("#close-readme")
  ) {
    handleModal($target);
  } else if (!$target.matches("#menu") && $menu.classList.contains("actived")) {
    $menu.classList.remove("actived");
  }
})
$form.addEventListener("submit", handleSubmit)
mediaSlider.addListener(responsiveMedia);

