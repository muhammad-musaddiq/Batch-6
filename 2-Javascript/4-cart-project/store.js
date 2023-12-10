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

  cartItemElement.innerHTML = "teafwefawed";

  console.log(itemName, "itemName");
  console.log(itemImage, "itemImage");
  console.log(itemPrice, "itemPrice");
  //   console.log(mainShopItemDiv, "mainShopItemDiv");
}
