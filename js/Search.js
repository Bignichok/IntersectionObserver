const { debounce } = _;

class Search {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    this.descriptionList = Array.from(
      document.querySelectorAll(".description")
    );
    this.handleInputOnChange = this.handleInputOnChange.bind(this);

    this.init();
  }

  handleInputOnChange(e) {
    const { target } = e;
    const { value } = target;
    this.descriptionList.forEach((descriptionRef) =>
      this.searchInText(descriptionRef, value)
    );
  }

  wrapSearchedText(text) {
    return `<span class="searched-word">${text}</span>`;
  }

  searchInText(elem, searchedText) {
    const regExp = new RegExp(`${searchedText}`, "gi");
    const { textContent } = elem;

    if (!searchedText) {
      elem.innerHTML = textContent;
      return;
    }

    elem.innerHTML = textContent.replace(
      regExp,
      this.wrapSearchedText(searchedText)
    );
  }

  init() {
    const handleChangeWithDebounce = debounce(this.handleInputOnChange, 500);
    this.$el.addEventListener("input", handleChangeWithDebounce);
  }
}

export default Search;
