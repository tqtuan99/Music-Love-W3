// Silde Show
var myIndex = 0;
carousel();

function carousel() {
   var i;
   var x = document.getElementsByClassName("mySlides");
   for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
   }
   myIndex++;
   if (myIndex > x.length) {
      myIndex = 1
   }
   x[myIndex - 1].style.display = "block";
   setTimeout(carousel, 2000); // Change image every 2 seconds
}

// MENU
var header = document.getElementById('header')
var mobileMenu = document.getElementById('mobile-menu')
var headerHeight = header.clientHeight;

//Đóng mở Menu of Mobile
mobileMenu.onclick = function () {
   var isClose = header.clientHeight === headerHeight;
   if (isClose) {
      header.style.height = 'auto';
   } else {
      header.style.height = null;
   }
}
//Tự động đóng khi chọn các đối tự trong menu.
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
//lấy tự cả những thẻ <a> có href = #
for (var i = 0; i < menuItems.length; i++) {
   var menuItem = menuItems[i];
   menuItem.onclick = function () {
      header.style.height = null;
   }
}