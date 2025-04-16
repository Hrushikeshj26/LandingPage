
  const nextBtn = document.getElementById("nextbtn");
  const prevBtn = document.getElementById("prebtn");
  const slider = document.querySelector(".item-slider");
  const menuBar = document.getElementById("menubar");
  const menuItems = document.querySelector(".navlinks");

  const scrollAmount = 320; 

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });

  function slideLeft() {
    const slider = document.getElementById('slider');
    slider.scrollBy({ 
      left: -320, 
      behavior: 'smooth' 
    });
  };

function slideRight() {
    const slider = document.getElementById('slider');
    slider.scrollBy({ 
      left: 320, 
      behavior: 'smooth' 
    });
  };

menuBar.addEventListener('click', () => {
    console.log('clicked');
    if(menuItems.id == "hidden"){
      menuItems.id = "";
    }
    else{
      menuItems.id = "hidden";
    }
})
