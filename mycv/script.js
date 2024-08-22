// Script File

// Home Section Starts
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".nav-links");
var menuLinks = document.querySelectorAll(".nav-links li a");

menuBtn.addEventListener("click", activeClass);

function activeClass() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
}

for (i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", menuItemClicked);
}

function menuItemClicked() {
  menuBtn.classList.remove("active");
  menu.classList.remove("active");
}

var homeSection = document.querySelector(".home");
window.addEventListener("scroll", scrollFunction);
window.addEventListener("load", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 60) {
    homeSection.classList.add("active");
  } else {
    homeSection.classList.remove("active");
  }
}
// Home Section Ends

// Portfolio Section Starts
var $galleryContainer = $(".gallery").isotope({
  itemSelector: ".item",
  layoutMode: "fitRows",
});

$(".button-group .button").on("click", function () {
  $(".button-group .button").removeClass("active");
  $(this).addClass("active");

  var value = $(this).attr("data-filter");
  $galleryContainer.isotope({
    filter: value,
  });
});

// magnific popup
$(".gallery").magnificPopup({
  delegate: ".overlay a",
  type: "image",
  gallery: {
    enabled: true,
  },
});
// Portfolio Section Ends

// Testimonials Section Starts
$(".testimonials-container").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTime: 6000,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: true,
    },
    768: {
      items: 2,
    },
  },
});

// let bro = 0;
// let fuck = 3;
// for (bro = 0; bro < fuck; bro++) {
//   // use an existing variable
//   alert(
//     "เขามาดูได้ไม่เข่าใจตรงไหนถามได้เราสอนเราบอกอยากได้แบบไหน เราดีใจช่วยนะ"
//   );
//   alert(
//     "แต่ให้เกรงใจคนที่นั่งทำเสียเวลาของตัวเองด้วย ถ้าอยากรู้ตรงไหนอยากได้ตรงไหนเดี๋ยวมาถามเราสอนเราให้แต่ขออย่าหลอกไปมันดูไม่ค่อยดีเท่าไร"
//   );
//   alert(
//     "ดูก็ดูได้ไม่ว่าแต่ขออย่า copy ไปทำของตัวเองด้วยไม่ได้ข้อให้เกรดคนที่เสียเวลาทำด้วย ไม่ว่ามาทำให้หลอกไปนะ"
//   );
// }
// alert("Do not copy this dude I do not to get  sth shit wrong with u");

// noRightClickEl.addEventListener("contextmenu", (event) => {
//   alert("✋ no right click here");
//   event.preventDefault();
// });
// // ❗️❗️❗️ this does not seems to work for
// //  Magic Mouse or Mackbook trackpad
// element.addEventListener("click", (event) => {
//   if (event.button == 2) {
//     console.log("🖱 right click detected!");
//   }
// });
// onclick = "window.alert('All copyrights reserved');";
// oncontextmenu = "window.alert('Image context menu is disabled');return false;";
// src = "https://i.imgflip.com/xl2ha.jpg?a478656";
