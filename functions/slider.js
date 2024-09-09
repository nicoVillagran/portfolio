const d = document,
  $slider = d.querySelector(".slider").firstElementChild.firstElementChild
let inx = 0;

export const autoSlider = () => {
  inx++, moveSlider($slider, inx, !1);

  let $sliderControls = d.querySelector(".slider__controls"),
    $controlIndex = $sliderControls.querySelector(`[data-index="${inx}"]`);

  $sliderControls.querySelector(".actived").classList.remove("actived"),
  $controlIndex.classList.add("actived");
};
export function moveSlider($sliderItem, dataIndex) {
  --dataIndex > 2 && ((inx = 1), (dataIndex = 0)),
    ($sliderItem.style.marginLeft =
      0 == dataIndex ? dataIndex : `-${dataIndex}00%`);
}
export function displayItem(event) {
  let $target = event.target;
  ($target.matches(".slides__descript-h4")
    ? $target.parentElement
    : !!$target.matches(".slides__descript-h4 i") &&
      $target.parentElement.parentElement
  ).classList.toggle("display");
}