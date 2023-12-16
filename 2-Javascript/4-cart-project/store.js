const addToCartAllButton = document.querySelectorAll(".shop-item-button");
const cartItemElement = document.querySelector(".cart-items");

addToCartAllButton.forEach(function (singleAddToCartBtn) {
  singleAddToCartBtn.addEventListener("click", addtoCardBtnHandler);
});

function addtoCardBtnHandler(event) {
  event.preventDefault();
  const currentElement = event.target;
  const mainShopItemDiv = currentElement.parentElement.parentElement;
  const itemName = mainShopItemDiv.querySelector(".shop-item-title").innerText;
  const itemImage = mainShopItemDiv.querySelector(".shop-item-image").src;
  const itemPrice = mainShopItemDiv.querySelector(".shop-item-price").innerText;

  const cartItemNames = document.querySelectorAll(".cart-item-title");

  let isCartItemIsAlreadyExist = false;

  if (cartItemNames.length > 0) {
    cartItemNames.forEach(function (singleCartItemName) {
      if (singleCartItemName.innerText === itemName) {
        isCartItemIsAlreadyExist = true;
      }
    });
  }

  if (isCartItemIsAlreadyExist) {
    alert("This item is already exist in our cart");
    return;
  }

  cartItemElement.innerHTML += `<div class="cart-row">
          <div class="cart-item cart-column">
            <img
              class="cart-item-image"
              src=${itemImage}
              width="100"
              height="100"
            />
            <span class="cart-item-title">${itemName}</span>
          </div>
          <span class="cart-column"
            >$ <span class="cart-price-item-item">${itemPrice}</span></span
          >
          <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" />
            <button class="btn btn-danger btn-remove" type="button">
              REMOVE
            </button>
          </div>
        </div>`;

  console.log(itemName, "itemName");
  console.log(itemImage, "itemImage");
  console.log(itemPrice, "itemPrice");
  //   console.log(mainShopItemDiv, "mainShopItemDiv");
}
