const ulEl = document.querySelector("ul#categories");
const countChildren = ulEl.children.length;
console.log(`Number of categories: ${countChildren}`);






const liEl = ulEl.children;

for (let i = 0; i < liEl.length; i += 1) {
  const childrenLi = liEl[i].children;

  const textContent = childrenLi[0].textContent;
    console.log('Category:', textContent);
    
  const countChild = childrenLi[1].children.length;
  console.log('Elements:', countChild);
};






