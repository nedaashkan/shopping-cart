let shopItemsData = [
  {
    id: 1,
    name: "Chicken Egg Salad",
    price: 10,
    img: "images/1.PNG",
  },
  {
    id: 2,
    name: "Hot Grid Chicken",
    price: 20,
    img: "images/2.PNG",
  },
  {
    id: 3,
    name: "Salmon Salad",
    price: 35,
    img: "images/3.PNG",
  },
  {
    id: 4,
    name: "Soup",
    price: 25,
    img: "images/4.PNG",
  },
  {
    id: 5,
    name: "Salad",
    price: 15,
    img: "images/5.PNG",
  },
  {
    id: 6,
    name: "Pizza",
    price: 10,
    img: "images/6.PNG",
  },
];
const shop = document.getElementById("shop");
let shoppingCart = [];

let generateShop = () => {
  let shopEl = "";
  shopItemsData.map((x, y) => {
    const { id, name, price, img } = x;
    let search = shoppingCart.find((x) => x.id === id) || [];
    return (shopEl += `
       <div class="item" id=${y}>
         <img src="${img}" />
         <div class="details">
           <div class="title">${name}</div>
           <div class="price-quantity">
             <div class="price">$${price}</div>
             <div class="buttons">
               <i class="bi bi-dash-lg" onclick="decrement(${id})"></i>
               <div class="quantity" id=${id}> ${
      search.item === undefined ? 0 : search.item
    }</div>
               <i class="bi bi-plus-lg"  onclick="increment(${id})"></i>
             </div>
           </div>
         </div>
       </div>
`);
  });

  return (shop.innerHTML = shopEl);
};

generateShop();

let increment = (id) => {
  let search = shoppingCart.find((x) => x.id === id);
  if (search === undefined) {
    shoppingCart.push({
      id: id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  localStorage.setItem("data", JSON.stringify(shoppingCart));
  update(id);
};
let decrement = (id) => {
  let search = shoppingCart.find((x) => x.id === id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  localStorage.setItem("data", JSON.stringify(shoppingCart));
  update(id);
};

let update = (id) => {
  let search = shoppingCart.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = shoppingCart
    .map((x) => x.item)
    .reduce((x, y) => x + y, 0);
};

(() => {
  shoppingCart = JSON.parse(localStorage.getItem("data")) || [];
  generateShop();
})();

calculation();
