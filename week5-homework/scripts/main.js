const typeAhead = document.querySelector(".typeahead");
const searchInput = document.querySelector('[type="search"]');

searchInput.addEventListener("input", (e) => {
  const search = e.currentTarget.value.trim();
  const searchedList = EPLTEAMS.filter(({ name }) => name.startsWith(search));

  const listTemplate = searchedList.reduce((template, item) => {
    template += `<li>${item.name}</li>`;
    return template;
  }, "");
  console.log(listTemplate);
});

const predictionList = typeAhead.querySelector("ul");

searchInput.addEventListener("input", ({ currentTarget: input }) => {
  predictionList.innerHTML = listTemplate;
  predictionList.removeAttribute("hidden");
});

searchInput.addEventListener("input", ({ currentTarget: input }) => {
  const search = input.value.trim();

  if (!search) {
    predictionList.setAttribute("hidden", "true");
    return;
  }
});

document.addEventListener("click", ({ target }) => {
  if (target.closest(".typeahead")) return;
  predictionList.setAttribute("hidden", "true");
});

predictionList.addEventListener("click", ({ target }) => {
  if (!target.closest("li")) return;
});

predictionList.addEventListener("click", ({ target, currentTarget: list }) => {
  if (!target.closest("li")) return;
  searchInput.value = target.textContent;
  list.setAttribute("hidden", "true");
});

predictionList.addEventListener("click", ({ target, currentTarget: list }) => {
  const listTemplate = searchedList.reduce((template, { name }) => {
    const searchLength = search.length;
    const toBold = name.substring(0, searchLength);
    const restName = name.substring(searchLength);
    template += `<li><strong>${toBold}</strong>${restName}</li>`;
    return template;
  }, "");
});

function boldSearchTerms(string, searchTerm) {
  const searchLength = searchTerm.length;
  const toBold = string.substring(0, searchLength);
  const restString = string.substring(searchLength);
  return [toBold, restString];
}

const listTemplate = searchedList.reduce((template, { name }) => {
  const [toBold, restName] = boldSearchTerms(name, search);
  template += `<li><strong>${toBold}</strong>${restName}</li>`;
  return template;
}, "");
