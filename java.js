const container = document.querySelector(".container");
const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu");
let MOpen = false;


// burger menue funger 


container.addEventListener("click", () => {
   MOpen = !MOpen;

   if(MOpen){
      container.classList.add("open");
      sidebar.classList.toggle("menu-open");
      menu.classList.toggle("menu-open");
   }
   else{
      container.classList.remove("open");
      sidebar.classList.remove("menu-open");
      menu.classList.remove("menu-open");
   }
  
})

 
function burgermenu(x) {
   x.classList.toggle("change");
   sidebar.classList.toggle('active');
}
// readmoreless button js
function readmoreless() {
   var dots = document.getElementById("dots");
   var moreText = document.getElementById("more");
   var btnText = document.getElementById("morelessBut");
 
   if (dots.style.display === "none") {
     dots.style.display = "inline";
     btnText.innerHTML = "Read more"; 
     moreText.style.display = "none";
   } else {
     dots.style.display = "none";
     btnText.innerHTML = "Read less"; 
     moreText.style.display = "inline";
   }
}