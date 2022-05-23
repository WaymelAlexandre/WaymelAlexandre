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

 
function myFunction(x) {
   x.classList.toggle("change");
   sidebar.classList.toggle('active');
 }





// function myFunction(x) {
//     x.classList.toggle("change");
    
//     sidebar.classList.toggle('active');
//   }

  



//   function DARK() {
//      var element = document.body;
//      element.classList.toggle("dark-mode");
//   } 