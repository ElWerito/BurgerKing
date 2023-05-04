const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper p")

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 800;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () =>{
      if(icon.id === "left"){
        carousel.scrollLeft -= firstImgWidth; 
      } else{
        carousel.scrollLeft += firstImgWidth;
      }
    })
});



const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    console.log(prevPageX)
    prevScrollLeft = carousel.scrollLeft;
    console.log(prevScrollLeft)
}

const dragStop = () => {
    isDragStart= false;
}


const draggin = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX -prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}



carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mouseup", dragStop)
carousel.addEventListener("mousemove", draggin)
