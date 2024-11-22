const menuBtn = document.getElementsByClassName("menu-logo")[0];
const menubar = document.getElementsByClassName("mobile-bar")[0];
const closeBtn = document.getElementById("close-option");
let cartBtn = document.querySelector(".cart-logo");
let noOfItemsAdd = document.getElementById("no-add-items");
let cartItemBox = document.getElementsByClassName("cart-item")[0];
let productInfo = document.getElementById("add-item");
let addToCartBtn = document.querySelector(".add-cart");
let delBtn = document.getElementById("delete");
let addItem = document.getElementById("plus");
let minusItem = document.getElementById("minus");
let countItem = document.getElementById("count");
let nextSlide = document.getElementsByClassName("next-slide")[0];
let previousSlide = document.getElementsByClassName("previous-slide")[0];
let noOfItemAddToCart = document.getElementById("no-add-item-cart");
let totalOfTotal = document.getElementById("total-price-of-itm");
let emptyPrompt = document.getElementById("prompt");
let checkoutBtn = document.getElementById("checkout");
let orignalImages = document.getElementById("large-img");

let popupPage=document.getElementsByClassName("popup-page")[0];

let thumbnailsImg = document.querySelectorAll(".thumbnail");

let arrImg = Array.from(thumbnailsImg);

let originalImg = {
  url1: "/images/image-product-1.jpg",
  url2: "/images/image-product-2.jpg",
  url3: "/images/image-product-3.jpg",
  url4: "/images/image-product-4.jpg",
};



let navOptionDiv=document.querySelectorAll(".nav-option");


let divOfoption=Array.from(navOptionDiv);

divOfoption.forEach((opt) => {
 
  opt.addEventListener("mouseover", function () {
    divOfoption.forEach((op) => {
      op.style.paddingBottom = ""; 
      opt.style.paddingTop=""
      op.style.width = "";
      op.style.borderBottom = ""; 
      op.style.transition = "transform 0.9s ease-in-out"; 
    });
  
    opt.style.paddingBottom = "1.5em"; 
    opt.style.paddingTop="1em"
    opt.style.width = "fit-content";
    opt.style.borderBottom = "0.3em solid hsl(26, 100%, 55%)"; 
    opt.style.transition = "transform 0.9s ease-in-out"; 
    opt.style.cursor="pointer"
  });

  opt.addEventListener("mouseout", function () {
    opt.style.paddingBottom = "";
    opt.style.paddingTop="" 
    opt.style.width = "";
    opt.style.borderBottom = "";
    opt.style.transition = "transform 0.5s ease-in-out"; 
  });
});

















arrImg.forEach((img, index) => {
  img.addEventListener("click", function (e) {
    arrImg.forEach((thumbnail) => {
      thumbnail.style.border = "";
      thumbnail.style.backgroundColor = "";
      thumbnail.style.opacity = "";
    });

    if (e.target.id == "1") {
      orignalImages.src = originalImg.url1;
    }
    if (e.target.id == "2") {
      orignalImages.src = originalImg.url2;
    }
    if (e.target.id == "3") {
      orignalImages.src = originalImg.url3;
    }
    if (e.target.id == "4") {
      orignalImages.src = originalImg.url4;
    }

    img.style.border = "0.2em solid hsl(26, 100%, 55%)";
    img.style.backgroundColor = " hsl(25, 100%, 94%)";
    img.style.opacity = "0.5";
  });
});

let count = 0;

menuBtn.addEventListener("click", function () {
  menubar.style.transform = "translateX(-0em)";
  menubar.style.transition = "transform 0.5s ease-in-out"; 
 
  previousSlide.style.display = "none";
});

closeBtn.addEventListener("click", function () {
  menubar.style.transform = "translateX(-13em)"; 
  menubar.style.transition = "transform 0.5s ease-in-out"; 
  previousSlide.style.display = "flex";
});

var show = true;
cartBtn.addEventListener("click", function () {
  if (show == true) {
    cartItemBox.style.visibility = "visible";
    cartItemBox.style.transition = "transform 0.7s ease-in-out";

    show = false;
  } else {
    cartItemBox.style.visibility = "hidden";
     cartItemBox.style.transition = "transform 0.7s ease-in-out";
    show = true;
  }
});

addItem.addEventListener("click", function () {
  count++;
  countItem.innerText = count;
  minusItem.style.opacity = "1";
});

minusItem.addEventListener("click", function () {
  if (count > 0) {
    count--;
    countItem.innerText = count;
    if (count === 0) {
      minusItem.style.opacity = "0.1";
    }
  }
});

addToCartBtn.addEventListener("click", function () {
  let tNumber = count;
  let total = tNumber * 125;
  noOfItemAddToCart.innerHTML = `$125.00*${count}<span id="total-price-of-itm">|${total}$</span>`;
  productInfo.style.display = "flex";
  emptyPrompt.style.display = "none";
  checkoutBtn.style.display = "flex";

  noOfItemsAdd.style.display = "flex";
  noOfItemsAdd.textContent = count;
  console.log(total);
});

delBtn.addEventListener("click", function () {
  productInfo.style.display = "none";
  checkoutBtn.style.display = "none";
  noOfItemsAdd.style.display = "none";
  noOfItemsAdd.textContent = "0";
  emptyPrompt.style.display = "inline";
});


let imageUrls = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];
  
  
  let index = 0;
  

  nextSlide.addEventListener("click", function () {
    index++;
    if (index >= imageUrls.length) {
      index = 0; 
    }
    orignalImages.src = imageUrls[index]; 
  });
  
 
  previousSlide.addEventListener("click", function () {
    index--;
    if (index < 0) {
      index = imageUrls.length - 1; 
    }
    orignalImages.src = imageUrls[index]; 
  });

  let bodyback=document.getElementsByTagName("body")[0];

  orignalImages.addEventListener("click",function(){
    popupPage.style.display="flex";
  })

  let closeBtnforpop=document.getElementById("closebtn");

  let popupImage=document.getElementById("pop-image-large");

  let popImageUrls = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];

  closeBtnforpop.addEventListener("click",function(){
    popupPage.style.display="none";
  });
  
  previousBtn=document.getElementsByClassName("previous")[0];
  nextBtn=document.getElementsByClassName("next")[0];

 let popThhumbnail=document.querySelectorAll(".pop-thumbnail");
 let popImageArr=Array.from(popThhumbnail);


  let i=0;
  nextBtn.addEventListener("click", function () {
    i++;
    if (i >= imageUrls.length) {
      i = 0; 
    }
    popupImage.src = popImageUrls[i]; 
    
  });

  popImageArr.forEach((img) => {
    img.addEventListener("click", function () {
      popImageArr.forEach((thumbnail) => {
        thumbnail.style.border = "";
        thumbnail.style.backgroundColor = "";
        thumbnail.style.opacity = "";
      });
      img.style.border = "0.2em solid hsl(26, 100%, 55%)";
      img.style.backgroundColor = "hsl(25, 100%, 94%)";
      img.style.opacity = "0.5";
    });
  });
  
  
 
  previousBtn.addEventListener("click", function () {
    i--;
    if (i < 0) {
      i = popImageUrls.length - 1; 
    }
    popupImage.src = popImageUrls[i]; 
  });
