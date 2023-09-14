let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//date section


const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();

// const month = document.getElementById("month");

// month.innerHTML = new Date().getMonth();

// const day = document.getElementById("day");

// day.innerHTML= new Date().getDate();

// const year = document.getElementById("year");

// year.innerHTML = new Date().getFullYear();





