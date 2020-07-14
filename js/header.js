function toggleSidebar()
{
    document.getElementById("sidebar").classList.toggle('nav-active');
}

function toggleSupport()
{
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) 
    {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) 
      {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) 
        {
          openDropdown.classList.remove('show');
        }
      }
    }
    var navigation = document.getElementById("sidebar");
    var btn = document.getElementById("btn");
    var menu = document.getElementById("menu");
    if (event.target != btn && event.target.parentNode != btn && event.target != navigation && event.target.parentNode != navigation
      && event.target != menu && event.target.parentNode != menu) 
    {
        if (navigation.classList.contains('nav-active')) 
        {
          navigation.classList.remove('nav-active');
        }
    }
  } 
