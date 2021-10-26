const bookmarkDiv = document.querySelector(".bookmark-action");
const changetext = document.querySelector(".bookmark");
let modal = document.querySelector('.modal');
let btn = document.querySelector('.button-left');
let span = document.getElementsByClassName('close')[0];
let modal2 = document.querySelector('.modal2');
let btn2 = document.querySelectorAll('.payButton2');
let span2 = document.getElementsByClassName('close2')[0];
let btn3 = document.querySelector('.btn-modal2'); 
let btn4 = document.querySelectorAll('.btn-modal');

btn4.onclick = function(e) {
  modal.style.display = "block";
  e.preventDefault();
}

btn.onclick = function(e) {
    modal.style.display = "block";
    e.preventDefault();
}

span.onclick = function() {
    modal.style.display = "none";
}

btn2.forEach (function (item) {
    item.onclick = function(e) {
        e.preventDefault();
        modal2.classList.remove("hidden");
        modal.style.display = "none";
    }
});

btn3.onclick = function() {
    modal2.classList.add("hidden");
}

let isBookmarked = JSON.parse(localStorage.getItem("isBookmarked"));
if (isBookmarked) {
    bookmarkDiv.classList.add("bookmarked");
}
const handleBookmarkClick = () => {
    if (!isBookmarked) {
        localStorage.setItem("isBookmarked", "true");
        bookmarkDiv.classList.add("bookmarked");
        changetext.textContent = "Bookmarked";
        isBookmarked = true;
    } else {
        localStorage.setItem("isBookmarked", "false");
        bookmarkDiv.classList.remove("bookmarked");
        changetext.textContent = "Bookmark";
        isBookmarked = false;
    }
}
bookmarkDiv.addEventListener("click", handleBookmarkClick);