/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  var menu = document.getElementById("myDropdown");
  if (menu.style.display === "block") {
      menu.style.display = "none";
  } else {
      menu.style.display = "block";
  }
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.myDropdown')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  function toggleMenu() {
    var menu = document.getElementById("meuMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Fechar o menu se clicar fora dele
window.onclick = function(event) {
    if (!event.target.closest('.meu-botao') && !event.target.closest('#meuMenu')) {
        var menu = document.getElementById("meuMenu");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        }
    }
}