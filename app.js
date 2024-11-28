// initial product
const products = [
  {
    id: 1,
    title: "First Product",
    price: 99,
  },
  {
    id: 2,
    title: "Second Product",
    price: 49,
  },
  {
    id: 3,
    title: "Third Product",
    price: 35,
  },
  {
    id: 4,
    title: "Product Title",
    price: 56,
  },
  {
    id: 5,
    title: "Product Title",
    price: 73,
  },
  {
    id: 6,
    title: "Product Title",
    price: 83,
  },
  {
    id: 7,
    title: "Product Title",
    price: 45,
  },
  {
    id: 8,
    title: "Product Title",
    price: 2,
  },
  {
    id: 9,
    title: "Product Title",
    price: 2,
  },
];
// elements
const productGrid = document.querySelector(".product-grid");
const cartCount = document.querySelector(".cart-count");

// Render html
const renderHtml = (product) => {
  let html = `
            <img src="https://picsum.photos/200"
               alt="Product Image"
               class="product-image"
               />
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">$${product.price}</p>
            <button class="add-to-cart">
              Add to Cart
            </button>
              `;
  let div = document.createElement("div");
  div.classList.add("producdt-card");
  div.setAttribute();
  div.innerHTML = html;
  // productGrid.innerHTML = html;
  productGrid.appendChild(div);
};

// fetch the products
products.forEach((product) => {
  renderHtml(product);
});
