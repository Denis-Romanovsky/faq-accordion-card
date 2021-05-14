const ul = document.querySelector('.list');

ul.addEventListener('click', toggleAnswer);

function toggleAnswer(e) {
  activeElement = e.target;

  // Go up till it's .dropdown when clicked on its children
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  const dropdown = e.target.closest('.dropdown');

  if (dropdown) {
    dropdown.firstElementChild.classList.toggle('bold'); // <h4>
    dropdown.lastElementChild.firstElementChild.classList.toggle('rotate'); // <img>
    dropdown.nextElementSibling.classList.toggle('hide'); // <p>
  }
}