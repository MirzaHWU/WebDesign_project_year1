function $(selector) {

  return document.querySelector(selector);
} 

window.dataStorage = {
  _storage: new WeakMap(),
  put: function (element, key, obj) {
      if (!this._storage.has(element)) {
          this._storage.set(element, new Map());
      }
      this._storage.get(element).set(key, obj);
  },
  get: function (element, key) {
      return this._storage.get(element).get(key);
  },
  has: function (element, key) {
      return this._storage.has(element) && this._storage.get(element).has(key);
  },
  remove: function (element, key) {
      var ret = this._storage.get(element).delete(key);
      if (!this._storage.get(element).size === 0) {
          this._storage.delete(element);
      }
      return ret;
  }
}


console.log($(".body"));

const checkbox = document.querySelector('.main-contact-form-container .my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".main-contact-form-container .my-form button");

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});