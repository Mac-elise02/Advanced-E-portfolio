// template id: template_6swr0gh
// service id: service_ft6o1oo
// user id: QvPpa_xVh8gJgI4u3

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  emailjs
    .sendForm(
      "service_ft6o1oo",
      "template_6swr0gh",
      event.target,
      "QvPpa_xVh8gJgI4u3"
    )
    .then(() => {
      loading.classList.remove("modal__overlay visible");
      success.classList += "modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directitly at mac.elise2020@gmail.com"
      );
    });
}

let isModalOpen = false; 
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false; 
    return document.body.classList.remove("modal--open"); 
  }
  isModalOpen = true; 
  document.body.classList += " modal--open"; 
}