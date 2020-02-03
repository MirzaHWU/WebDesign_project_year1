const checkbox = document.querySelector('.main-contact-form-container .my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".main-contact-form-container .my-form button");

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});