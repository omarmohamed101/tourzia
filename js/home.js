//slideshow start
var i=0;
var images= [];
var caption = [];
var link=[];
var time =5000;
//image list
images[0]= 'img/flights.jpg';
images[1]= 'img/hotels.jpg';
images[2]= 'img/cars.jpg';

//link list
link[0]="flight.html";
link[1]="hotel.html";
link[2]="car rental.html";
//change
function swapImg()
{

    var img=document.getElementById("slide");
    img.src=images[i];
    var a = document.getElementById("link");
    a.href=link[i];
    if(i<images.length-1){i++;}
    else{i=0}
    setTimeout("swapImg()" , time);
}
window.onload = swapImg;
//slideshow end

window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("bkmrk").style.display="block";
  } else {
    document.getElementById("bkmrk").style.display="none";
  }
}

function destination1()
{
    document.getElementById("dest1").classList.add('chosen-dest');
    document.getElementById("dest2").classList.remove('chosen-dest');
    document.getElementById("dest3").classList.remove('chosen-dest');
    document.getElementById("tb1").style.display = "block";
    document.getElementById("tb2").style.display = "none";
    document.getElementById("tb3").style.display = "none";
}
function destination2()
{
    document.getElementById("dest2").classList.add('chosen-dest');
    document.getElementById("dest1").classList.remove('chosen-dest');
    document.getElementById("dest3").classList.remove('chosen-dest');
    document.getElementById("tb2").style.display = "block";
    document.getElementById("tb1").style.display = "none";
    document.getElementById("tb3").style.display = "none";
}
function destination3()
{
    document.getElementById("dest3").classList.add('chosen-dest');
    document.getElementById("dest2").classList.remove('chosen-dest');
    document.getElementById("dest1").classList.remove('chosen-dest');
    document.getElementById("tb3").style.display = "block";
    document.getElementById("tb2").style.display = "none";
    document.getElementById("tb1").style.display = "none";
}