//dom stands for (Document Object Model)
// https://www.w3schools.com/js/js_htmldom.asp
//https://javascript.info/

/*
When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a tree of Objects:

*/

let domTesting = document;
domTesting = document.head;
domTesting = document.doctype;
domTesting = document.domain;
domTesting = document.URL;
domTesting = document.characterSet;
domTesting = document.contentType;

domTesting = document.forms; //give you the whole forms which is preset on your html
// domTesting = document.forms[0];
domTesting = document.links; //it will give the ancor tag
domTesting = document.forms[0];
domTesting = document.forms[0].method;
domTesting = document.forms[0].action;

// domTesting = document.links;
// domTesting = document.links[0];
// domTesting = document.links[0].id;
// domTesting = document.links[0].className;
// domTesting = document.links[0].classList;
// domTesting = document.links[0].classList[0];

// domTesting = document.images; //it will give you the array of image tag/element
// domTesting = document.scripts;
// domTesting = document.scripts[0];
// domTesting = document.scripts[0].getAttribute("src");
// console.log(domTesting, "domTesting");

const cardTitleElement = document.querySelector(".card-title");
const taskBtnElement = document.querySelector("#task-button");

// taskBtnElement.addEventListener("click", function (event) {
//   event.preventDefault();

//   if (cardTitleElement.style.display == "none") {
//     cardTitleElement.style.display = "block";
//   } else {
//     cardTitleElement.style.display = "none";
//   }
// });

const collectionItem = document.getElementsByClassName("collection-item");
// const collectionItem = document.querySelectorAll(".collection-item");
// console.log(collectionItem, "collectionItem");

//Text Change
// taskTitle.textContent = "Shahzaib";
// taskTitle.innerText = "Shahzaib";
// cardTitleElement.innerHTML = "<span style='color:red'>Shahzaib</span>";

// console.log(taskTitle);
//it will return array
// let allLiElements = document.querySelectorAll("ul li");
// let allLiElements = document.querySelectorAll("ul li:nth-child(odd)");
// let allLiElements = document.querySelectorAll("ul li:nth-child(even)");

// console.log(allLiElements, "allLiElements");

// Traversing in Dom
//up/down from one element to another element

const deleteItemBtnElements = document.querySelectorAll(".delete-item");

deleteItemBtnElements.forEach(function (singleButton) {
  singleButton.addEventListener("click", function (event) {
    event.preventDefault(); // default functionality rukne ke liye

    const currentElement = event.target;
    currentElement.parentElement.parentElement.remove();
    // console.log(currentElement, "currentElement");
  });
});
console.log(deleteItemBtnElements, "deleteItemBtnElements");

// we have nodes in traversing

// thre are six types of nodes

// node type

// 1 = Element
// 2 = Attribute
// 3 = Text node = (link break)
// 4 = Comment
// 5 = Document Itself
// 6 = Doctype

const nodeCollection = document.querySelector(".collection").childNodes;

// console.log(nodeCollection, "nodeCollection");

const collection = document.querySelector(".collection");

//for selecting element

// First Child

// console.log(collection.firstChild);
// console.log(collection.firstElementChild);

//Last Child

// console.log(collection.lastChild);
// console.log(collection.lastElementChild);

const firstCollectionItem = document.querySelector(".collection-item");

// Next sibling elemnt

// console.log(firstCollectionItem.nextSibling, "firstCollectionItem");
// console.log(firstCollectionItem.nextElementSibling, "firstCollectionItem");

// Previous sibling elemnt

// console.log(firstCollectionItem.previousSibling, "firstCollectionItem");
// console.log(firstCollectionItem.previousElementSibling, "firstCollectionItem");

/*
<li class="collection-item">
  6-List Item
  <a href="#" class="delete-item secondary-content">
    <i class="fa fa-remove"></i>
  </a>
</li>;

*/

const listNewElement = document.createElement("li");
listNewElement.className = "collection-item";
listNewElement.id = "some-id";
listNewElement.innerHTML = `
    6-List Item
    <a href="#" class="delete-item secondary-content">
      <i class="fa fa-remove"></i>
    </a>
  `;

document.querySelector(".collection").append(listNewElement);
// console.log(listNewElement, "listNewElement");

const newHeadding = document.createElement("h2");
newHeadding.id = "task-title";
newHeadding.appendChild(document.createTextNode("Task List !!!!!!!!!!"));

// console.log(newHeadding);

// Replace Previos Element from New ELement

const oldHeading = document.querySelector("#task-title");

const cardAction = document.querySelector(".card-action");

cardAction.replaceChild(newHeadding, oldHeading);

const link = document.querySelector(".btn-redirect");

link.getAttribute("href");
link.setAttribute("href", "https://w3school.com");
