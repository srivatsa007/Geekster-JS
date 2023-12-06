const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-char");
const remainingCounterEl = document.getElementById("remaining-char");
const wordCountEl = document.getElementById("word-count");

textareaEl.addEventListener("input", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  const text = textareaEl.value;
  totalCounterEl.innerText = text.length;
  remainingCounterEl.innerText = textareaEl.getAttribute("maxlength") - text.length;

  const words = text.trim().split(/\s+/).filter(word => word !== '');
  wordCountEl.innerText = words.length;
}
