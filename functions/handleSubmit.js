async function handleSubmit(event) {
  event.preventDefault();

  const $target = event.target,
    formData = new FormData($target);

  $target.classList.remove("loadingMsg");
  $target.dataset.msg = "Sending...";

  const res = await fetch("https://formspree.io/f/mknyjoan", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (res.ok) {
    $target.classList.remove("loadingMsg");
    $target.dataset.msg = "Thank you for contact me, I will write you as soon as possible.";
    $target.classList.add("goodMsg"),
    
    $target.reset(),
    
    setTimeout(() => {
      $target.dataset.msg = "";
      $target.classList.remove("goodMsg");
    }, 4e3);
  } else {
    res.json.then((json) => {
      console.log(json)
      
      let errorMsg = Object.hasOwn(json, "errors") 
          ? json.errors.map((e) => e.message).join(", ")
          : "Oops! There was a problem submitting your form"
      
      $target.dataset.msg = errorMsg
      $target.classList.add("badMsg");
    });
  }
}

export default handleSubmit