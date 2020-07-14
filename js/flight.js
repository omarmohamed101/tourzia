function showDiv(d1,d2,d3){
    document.getElementById(d1).style.display="block";
    document.getElementById(d2).style.display="none",
    document.getElementById(d3).style.display="none";
}

function showHide(d1){
    var divDisplay=document.getElementById(d1);
   
    if((divDisplay.style.display)==("block")){
       divDisplay.style.display="none";
    }
    else{
        divDisplay.style.display="block";
    }
}


function showMore(option,d1){
    var 
        optionMore=document.getElementById(option),
        divDisplay=document.getElementById(d1);

    if((optionMore.value)==(-1)){
        divDisplay.style.display="block";   
    }
    else{
        divDisplay.style.display="none";
    }
}

function justshow(d1,d2){
    document.getElementById(d1).style.display="block";
    document.getElementById(d2).style.display="block";
}


/*slide show*/
var slideNum = 1;
showSlide(slideNum);


function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length){
        slideNum = 1
    } 

    if (n < 1) {
        slideNum = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    slides[slideNum-1].style.display = "block"; 
}

function plusSlides(n) {
    showSlide(slideNum += n);
}
    