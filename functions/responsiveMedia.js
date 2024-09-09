import { autoSlider, displayItem } from "./slider.js";
import timeSlider from "../timeSlider.js";

const responsiveMedia = (media) => {
    const $sliderContainer = document.querySelector(".slider__container")

    if(media.matches){
      timeSlider.deleteTime()
      $sliderContainer.addEventListener("click", displayItem)
    }else{
      timeSlider.setTime = {
        callback: autoSlider,
        time: 5e3
      }
      $sliderContainer.removeEventListener("click", displayItem)
    }
};

export default responsiveMedia;
