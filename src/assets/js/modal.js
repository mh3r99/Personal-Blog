const modalBtn = document.querySelectorAll("[data-modal]");
const modalClose = document.querySelectorAll(".modal__close");
const modal = document.querySelectorAll(".modal");
const { body } = document;

modalBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    let $this = e.currentTarget;
    let modalID = $this.getAttribute("data-modal");
    let modal = document.querySelector(`#${modalID}`);
    let modalContent = modal.querySelector(".modal__content");

    modalContent.addEventListener("click", (e) => e.stopPropagation());

    modal.classList.add("show");
    body.classList.add("no-scroll");

    setTimeout(() => {
      modalContent.style.transform = "none";
      modalContent.style.opacity = "1";
    }, 1);
  });
});

modalClose.forEach((item) => {
  item.addEventListener("click", (e) => {
    let currentModal = e.currentTarget.closest(".modal");
    closeModal(currentModal);
  });
});

modal.forEach((item) => {
  item.addEventListener("click", (e) => {
    closeModal(e.currentTarget);
  });
});

function closeModal(currentModal) {
  let modalContent = currentModal.querySelector(".modal__content");

  modalContent.removeAttribute("style");

  setTimeout(() => {
    currentModal.classList.remove("show");
    body.classList.remove("no-scroll");
  }, 200);
}
