const tombol1 = document.getElementById("btn1");
const tombol2 = document.getElementById("btn2");
const fb = document.getElementById("feedb");

window.onload = function() {
  if(!
     localStorage.getItem("visited")) {
  alert(`Website ini masih dalam tahap pengembangan,
    jadi masih banyak fitur yang belum bisa dijalankan!`);
    localStorage.setItem("visited", "true");
}

tombol1.addEventListener("click", function () {
  window.location.href = "masuk.html";
});

tombol2.addEventListener("click", function () {
  window.location.href = "info-keanggotaan.html";
});

function toggleMenu(event) {
  const menuContent = document.getElementById('menuContent');
  menuContent.classList.toggle('show');
  event.stopPropagation(); // Prevent click event from bubbling up
}

window.onclick = function(event) {
  const menuContent = document.getElementById("menuContent");
  const menuIcon = document.querySelector(".menu-icon");
  // Close the menu if the click is outside the menu content and icon
  if (!menuContent.contains(event.target) && !menuIcon.contains(event.target)) {
      menuContent.classList.remove('show'); // Close menu if clicking outside
  }
}
