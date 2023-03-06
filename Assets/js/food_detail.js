// Slider

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = document.querySelector('.img-showcase img ');

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = document.querySelector('.img-showcase img');
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);
  


// User Rating

const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
  const starClassActive = "rating__star fa-solid fa-star";
  const starClassInactive = "rating__star fa-regular fa-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className===starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}
executeRating(ratingStars);


// Tab Menu

const tabLink = document.querySelectorAll(".tab__menu__link");
const tabContent = document.querySelectorAll(".tab__bar__content");

tabLink.forEach((item) => {
  item.addEventListener("click", activeTab);
});

function activeTab(item) {
  const btnTarget = item.currentTarget;
  const content = btnTarget.dataset.content;

  tabContent.forEach((item) => {
    item.classList.remove("is__active");
  });

  tabLink.forEach((item) => {
    item.classList.remove("is__active");
  });

  document.querySelector("#" + content).classList.add("is__active");
  btnTarget.classList.add("is__active");
}

//  LOAD MORE FUNCTION

$(document).ready(function(){
  $(".user__reviews").slice(0, 1).show();
  $(".load__more").on("click", function(e){
    e.preventDefault();
    $(".user__reviews:hidden").slice(0, 1).slideDown();
    if($(".user__reviews:hidden").length == 0) {
      $(".load__more").text("No Content").addClass("noContent");
    }
  });
  
})