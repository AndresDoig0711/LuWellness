const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -5.181540886283448, lng: -80.63434535670615 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
//Scrolling animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for(var i = 0; i < reveals.length; i++)
  {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;   
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible)
    {
      reveals[i].classList.add("active");
    } 
    else 
    {
      reveal[i].classList.remove("active");
    }
  }
}

function reveal2() {
  var reveals = document.querySelectorAll(".reveal2");
  for(var i = 0; i < reveals.length; i++)
  {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible)
    {
      reveals[i].classList.add("active");
    } 
    else 
    {
      reveal[i].classList.remove("active");
    }
  }
}
// Event listener scrolling animation
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal2);

