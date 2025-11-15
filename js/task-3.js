const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", (Event) => {
  const trimmedValue = Event.currentTarget.value.trim();
  outputEl.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});
