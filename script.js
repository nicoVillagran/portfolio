const descriptions = {
    project3: {
        title: "My SPA Website - Built with Vanilla JavaScript and WordPress API",
        descript: "This Single Page Application (SPA) is a website developed entirely with pure JavaScript, without using any JavaScript frameworks. It interacts with the WordPress API to retrieve content from the 'css-tricks' website. The SPA consists of three main sections accessible from the header: 'Home,' 'Search,' and 'Contact.'"
    },
    project2: {
        title: "TacoMex Payments - A Stripe API-Powered Taco Ordering Platform",
        descript: "TacoMex Payments is a dynamic web application that offers a seamless and secure online taco ordering experience, powered by the Stripe API. This personal programming project showcases my skills in web development and integration with payment gateways."
    },
    project1: {
        title: "Programing Logic Exercises",
        descript: "This is a page of basic JavaScript or JS exercises, where you can see the fundamental knowledge and also the syntax part of JS that works on both the server side with Node.js or in web frameworks like React.js. Although the basic syntax is clearly used to manipulate the DOM and add interactivity to the page to display the exercises, the page and exercises are focused on 'programming logic' using JS. These are exercises that I did when I was starting to program in JS."
    }
},
d = document,
$modalBg = d.getElementById("modal"),
$btnMode = d.getElementById("btnMode"),
$menu = d.getElementById("menu"),
$sliderContainer = d.querySelector(".slider__container"),
$slider = d.querySelector(".slider").firstElementChild.firstElementChild,
$sliderCtrl = d.querySelector(".slider__controls"),
$form = d.getElementById("contactForm");
let timeSlider,
inx = 0,
mediaSlider = window.matchMedia("(max-width: 567px)");
function moveSlider(e, t, s) {
    --t > 2 && (inx = 1, t = 0),
    e.style.marginLeft = 0 == t ? t : ` - $ {
        t
    }
    00 % `
}
function autoSlider() {
    inx++,
    moveSlider($slider, inx, !1);
    let e = d.querySelector(".slider__controls"),
    t = e.querySelector(` [data - index = "${inx}"]`);
    e.querySelector(".actived").classList.remove("actived"),
    t.classList.add("actived")
}
function changeTheme(e, t) {
    let s;
    t ? m = t : (s = localStorage.getItem("mode"), m = !1),
    "light" == m || "dark" == s ? (e.dataset.mode = "dark", t && localStorage.setItem("mode", "dark"), d.documentElement.style.setProperty("--bg", "30, 30, 30"), d.documentElement.style.setProperty("--color", "221, 227, 229"), d.documentElement.style.setProperty("--bg2", "34, 35, 38"), d.documentElement.style.setProperty("--fill-grey", "46, 51, 56"), d.documentElement.style.setProperty("--border-color", "255, 255, 255")) : "dark" != m && "light" != s || (e.dataset.mode = "light", t && localStorage.setItem("mode", "light"), d.documentElement.style.setProperty("--bg", "247, 246, 243"), d.documentElement.style.setProperty("--color", "55, 53, 47"), d.documentElement.style.setProperty("--bg2", "255, 255, 255"), d.documentElement.style.setProperty("--fill-grey", "251, 251, 250"), d.documentElement.style.setProperty("--border-color", "55, 53, 47")),
    !t && "dark" == s && e.classList.add("actived")
}
async function handleSubmit(e) {
    e.preventDefault();
    const t = e.target,
    s = new FormData(t);
    t.classList.remove("loadingMsg"),
    t.dataset.msg = "Sending...";
    const a = await fetch("https://formspree.io/f/mknyjoan", {
        method: "POST",
        body: s,
        headers: {
            Accept: "application/json"
        }
    });
    a.ok ? (t.classList.remove("loadingMsg"), t.dataset.msg = "Thank you for contact me, I will write you as soon as possible.", t.classList.add("goodMsg"), t.reset(), setTimeout((() => {
        t.dataset.msg = "",
        t.classList.remove("goodMsg")
    }), 4e3)) : a.json().then((e => {
        let s;
        console.log(e),
        s = Object.hasOwn(e, "errors") ? e.errors.map((e => e.message)).join(", ") : "Oops! There was a problem submitting your form",
        t.dataset.msg = s,
        t.classList.add("badMsg")
    }))
}
function responsiveMedia(e) {
    e.matches ? (clearInterval(timeSlider), $sliderContainer.addEventListener("click", displayItem)) : (timeSlider = setInterval(autoSlider, 5e3), $sliderContainer.removeEventListener("click", displayItem))
}
function displayItem(e) {
    let t = e.target;
    (t.matches(".slides__descript-h4") ? t.parentElement : !!t.matches(".slides__descript-h4 i") && t.parentElement.parentElement).classList.toggle("display")
}
function handleModal(e) {
    if (e.matches("#open-subpage") || e.matches("#see-readme")) setTimeout((() => {
        const t = d.querySelector(`$ {
            e.dataset.elconect
        }`);
        e.dataset.info && "" !== e.dataset.info && handleReadme(e.dataset.info),
        t.classList.add("show"),
        $modalBg.classList.add("show"),
        d.documentElement.classList.add("scrollNone")
    }), 700);
    else {
        const e = d.querySelectorAll(".show");
        for (const t of e) t.classList.remove("show");
        d.documentElement.classList.remove("scrollNone")
    }
}
function handleReadme(e) {
    const t = d.getElementById("readme-template").content,
    s = d.getElementById("description-project");
    let a,
    o = t.querySelector("h5"),
    i = t.querySelector("p");
    o.textContent = descriptions[e].title,
    i.textContent = descriptions[e].descript,
    a = d.importNode(t, !0),
    s.innerHTML = "",
    s.appendChild(a)
}
d.addEventListener("DOMContentLoaded", (() => {
    changeTheme($btnMode),
    responsiveMedia(mediaSlider)
})),
d.addEventListener("click", (e => {
    let t = e.target,
    s = t.dataset.mode;
    if (t.matches("#btnMode")) changeTheme(t, s),
    t.classList.toggle("actived");
    else
    if (t.matches(".menuBtn *") || t.matches(".menuBtn"))$menu.classList.toggle("actived");
    else
    if (t.matches(".index")) {
        clearInterval(timeSlider);
        let e = t.parentElement.children,
        s = t.dataset.index;
        for (const t of e) t.classList.item(1) && t.classList.remove("actived");
        t.classList.add("actived"),
        moveSlider(t.parentElement.previousElementSibling.firstElementChild, s, !0)
    } else t.matches("#close-subpage") || t.matches("#open-subpage") || t.matches("#modal") || t.matches("#link-contact") || t.matches("#see-readme") || t.matches("#close-readme") ? handleModal(t) : !t.matches("#menu") && $menu.classList.contains("actived") && $menu.classList.remove("actived")
})),
$form.addEventListener("submit", handleSubmit),
mediaSlider.addListener(responsiveMedia);