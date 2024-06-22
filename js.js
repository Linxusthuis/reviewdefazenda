function menu() {
  document.getElementById("myDropdown").classList.add("show");
  console.log(document.getElementById("myDropdown").classList);
//  document.getElementById("menu").classList.remove('show');
}

// Close the dropdown if the user clicks outside of it
 window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('.butao') ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    // = document.getElementById("menu")
    var menu = document.getElementById("menu");
    var i;
    for (var i = 0; i < dropdowns.length || i < menu.length; i++) {
      console.log("então");
       var openDropdown = dropdowns[i];
       var openmenu = menu[i];
       if (dropdowns[i].classList.contains('show') || menu.classList.contains('show')) {
        console.log(dropdowns.classList)
        dropdowns[i].classList.remove("show");
        document.getElementById("menu").classList.remove('show');
 }
   }
 
  }

function menu2(){
  document.getElementById("menu").classList.add("show")
}