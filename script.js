const menulink = document.getElementById("menu-link")
const menuSection = document.getElementById("menu")

menulink.addEventListener("click", function(e){
  e.preventDefault();

  if (menuSection.style.display === "none" || menuSection.style.display === ""){
    menuSection.style.display = "block";
  } else{
    menuSection.style.display = "none"
  }
})
