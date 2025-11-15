const categList = document.querySelector("#categories");
const categItems = categList.querySelectorAll(".item");
console.log(`Number of categories: ${categItems.length}`);

categItems.forEach((item) => {
  const categTitle = item.querySelector("h2").textContent;
  const categElem = item.querySelectorAll("ul li").length;
  console.log(`Category: ${categTitle}`);
  console.log(`Elements: ${categElem}`);
});
