const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


//  ===========   image gallary   ============== 


$('.products_container').imagesLoaded(function(){
  $('.products_container').isotope({
    itemSelector: '.products_card',
    layoutMode: 'fitRows'
  });
});


$('.btn.all').click(function(){
  $('.products_container').isotope({
    filter: '*'
  })			
});

$('.btn.featured').click(function(){
  $('.products_container').isotope({
    filter: '.featured'
  })
});

$('.btn.bestseller').click(function(){
  $('.products_container').isotope({
    filter: '.bestseller'
  })
});

$('.btn.latest').click(function(){
  $('.products_container').isotope({
    filter: '.latest'
  })
});


$('.btn').click(function(){
  $('.btn').removeClass('on');
  $(this).toggleClass('on');
});




// map
function initMap(){
  var options= {
    zoom:20,
    center:{lat:9.687446,lng:80.027088}
  }
  var googlemap = new google.maps.Map(document.getElementById("map"), options);
}

