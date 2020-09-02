import IObserver from "./IntersectionObserver.js";
import setActiveArticleText from "./setActiveArticle.js";
import Search from "./Search.js";
const subTitles = document.querySelectorAll(".sub-title");

const observerHandler = (entries) => {
  entries.forEach((entry) => {
    const { target, isIntersecting } = entry;
    const { textContent } = target;
    target.classList.remove("sub-title--active");
    if (isIntersecting) {
      setActiveArticleText(textContent);
      target.classList.add("sub-title--active");
    }
  });
};

const observer = new IObserver(observerHandler);
subTitles.forEach((subTitle) => observer.observe(subTitle));

const search = new Search(".search-input");
