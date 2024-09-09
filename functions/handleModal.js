import data from "../data.js";

const handleReadme = (info) => {
  const $template = document.getElementById("readme-template").content,
    $descriptElement = document.getElementById("description-project");
  let clone,
    $title = $template.querySelector("h5"),
    $text = $template.querySelector("p");

  $title.textContent = data[info].title;
  $text.textContent = data[info].descript;
  clone = document.importNode($template, !0);
  $descriptElement.innerHTML = "";
  $descriptElement.appendChild(clone);
};
const handleModal = ($element) => {
  const $modalBg = document.getElementById("modal"),
    $root = document.documentElement;

  if ($element.matches("#open-subpage") || $element.matches("#see-readme"))
    setTimeout(() => {
      const $conectorElement = document.querySelector(
        `${$element.dataset.elconect}`
      );
      $element.dataset.info &&
        "" !== $element.dataset.info &&
        handleReadme($element.dataset.info),
        $conectorElement.classList.add("show"),
        $modalBg.classList.add("show"),
        $root.classList.add("scrollNone");
    }, 700);
  else {
    const $allVisibleElements = document.querySelectorAll(".show");
    for (const $element of $allVisibleElements)
      $element.classList.remove("show");
    $root.classList.remove("scrollNone");
  }
};

export default handleModal;
