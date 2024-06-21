function menu() {
  document.getElementById("myDropdown").classList.add("show");
}

// Close the dropdown if the user clicks outside of it
 window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')||!event.target.matches('.butao')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var menu = document.getElementsByClassName("menu")
    var i;
    for (i = 0; i < dropdowns.length || i < menu.length; i++) {
      var openDropdown = dropdowns[i];
      var openmenu = menu[i]
      if (openDropdown.classList.contains('show') || openmenu.classList.contains('show')) {
        openDropdown.classList.remove('show');
        openmenu.classList.remove('show');
      }
    }
  }
}
function menu2(){
  document.getElementById("menu").classList.add("show")
}
