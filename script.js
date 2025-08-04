
const scrollBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showFormMessage(msg, color) {
    formMessage.textContent = msg;
    formMessage.style.color = color;
    formMessage.classList.add("show");

    setTimeout(() => {
      formMessage.classList.remove("show");
    }, 5000);
  }

  if (!name.value || !email.value || !message.value) {
    showFormMessage("Please fill in all fields.", "red");
    return;
  }

  if (!emailRegex.test(email.value)) {
    showFormMessage("Please enter a valid email.", "red");
    return;
  }

  showFormMessage("Message sent successfully!", "green");
  this.reset();
});


const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".details-btn").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.getAttribute("data-product");
    modalTitle.textContent = `${product} - Details`;
    modal.style.display = "block";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
