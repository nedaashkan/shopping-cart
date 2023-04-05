const labelEl = document.getElementById("label");
let shoppingCart = JSON.parse(localStorage.getItem("data")) || [];
const cartEl = document.getElementById("cart-el");
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = shoppingCart
    .map((x) => x.item)
    .reduce((x, y) => x + y, 0);
};

let generateCart = () => {
  if (shoppingCart.length !== 0) {
    return (cartEl.innerHTML = shoppingCart
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        let { name, price, img } = search;
        return `
    <div class="card">
  <ul class="listCard">
    <li class="cart-border">
      <div id="remove-box">
        <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
      </div>
      <div class="list">
        <div>
          <img src="${img}" />
        </div>
        <div class="name-price-box">
          ${name} <br />
          $${price}
        </div>
        <div>${price * item}</div>
        <div class="buttons cart-buttons">
          <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
          <div id=${id} class="quantity">${item}</div>
          <i  onclick="increment(${id})" class="bi bi-plus-lg"></i>
        </div>
      </div>
    </li>
  </ul>
  </div>
`;
      })
      .join(""));
  } else {
    cartEl.innerHTML = "";
    labelEl.innerHTML = "";
    cartEl.innerHTML = `
    <h2>Cart is Empty</h2>
      <a href="index.html" rel="noopener noreferrer">
        <button>Back to Home</button>
      </a>
    `;
  }
};

generateCart();

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
  generateCart();
  update(id);
  localStorage.setItem("data", JSON.stringify(shoppingCart));
};
let decrement = (id) => {
  let search = shoppingCart.find((x) => x.id === id);
  if (search === undefined) return;
  else if (search.item === 0);
  else {
    search.item -= 1;
  }
  update(id);
  shoppingCart = shoppingCart.filter((x) => x.item !== 0);
  generateCart();
  localStorage.setItem("data", JSON.stringify(shoppingCart));
};

let update = (id) => {
  let search = shoppingCart.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (id) => {
  shoppingCart = shoppingCart.filter((x) => x.id !== id);
  calculation();
  generateCart();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(shoppingCart));
};

let TotalAmount = () => {
  if (shoppingCart.length !== 0) {
    let amount = shoppingCart
      .map((x) => {
        let { id, item } = x;
        let filterData = shopItemsData.find((x) => x.id === id);
        return filterData.price * item;
      })
      .reduce((x, y) => x + y, 0);

    return (labelEl.innerHTML = `
      <h2>Total Bill : $ ${amount}</h2>
      <button class="checkout">Checkout</button>
      <button onclick="clearCart()" class="clear">Clear Cart</button>

    `);
  } else return;
};

let clearCart = () => {
  shoppingCart = [];
  localStorage.setItem("data", JSON.stringify(shoppingCart));
  generateCart();
  calculation();
};

generateCart();
calculation();
TotalAmount();
