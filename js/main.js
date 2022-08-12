const elements = document.querySelectorAll(".button");

/*
for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
}
*/
const buttonName = [];

elements.forEach((item) => buttonName.push(item.getAttribute("value")));

//console.log(buttonName);
/*
for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
}
*/

const handleClick = (i) => {
  console.log(elements[i]);
  elements[i].addEventListener("click", function () {
    console.log(buttonName[i]);
  });
};

for (let i = 0; i < elements.length; i++) {
  handleClick(i);
}
