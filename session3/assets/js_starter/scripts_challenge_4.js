// Get the form element by id
const form = document.getElementById('save-me');

// localStorage prefix
let prefix = 'autosave_';

function inputHandler(event) {
  const field = event.target;
  if (field.id) {
    localStorage.setItem(prefix + field.id, field.value);
  }
}

function clearStorage() {
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    if (key.startsWith(prefix)) {
      localStorage.removeItem(key);
    }
  }
  form.reset();
}

function loadSaved() {
  const elements = form.elements;
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    if (el.id) {
      const savedValue = localStorage.getItem(prefix + el.id);
      if (savedValue !== null) {
        el.value = savedValue;
      }
    }
  }
}

loadSaved();

form.addEventListener('input', inputHandler);
