let shopItemsData = [
  {
    id: "Chicken Egg Salad",
    name: "Chicken Egg Salad",
    price: 10,
    img: "images/1.PNG",
  },
  {
    id: "Hot Grid Chicken",
    name: "Hot Grid Chicken",
    price: 20,
    img: "images/2.PNG",
  },
  {
    id: "Salmon Salad",
    name: "Salmon Salad",
    price: 35,
    img: "images/3.PNG",
  },
  {
    id: "Soup",
    name: "Soup",
    price: 25,
    img: "images/4.PNG",
  },
  {
    id: "Salad",
    name: "Salad",
    price: 15,
    img: "images/5.PNG",
  },
  {
    id: "Pizza",
    name: "Pizza",
    price: 10,
    img: "images/6.PNG",
  },
];

const shopEl = document.getElementById("shop");
shopEl.in;
let generateShop = () => {
  let shop = "";
  shopItemsData.map((x, y) => {
    const { id, name, price, img } = x;
    return (shop = `
          <div class="item">
        <img src="${img}" />
        <div class="details">
          <div class="title">${name}</div>
          <div class="price-quantity">
            <div class="price">$10</div>
            <div class="buttons">
              <i class="bi bi-dash-lg"></i>
              <div class="quantity">0</div>
              <i class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>

    
    
    
    `);
  });
};
