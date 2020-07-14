var myIndex = 0;

carousel();

function carousel() {

  var i;

  var x = document.getElementsByClassName("mySlides");

  for (i = 0; i < x.length; i++) {

    x[i].style.display = "none";  

  }

  myIndex++;

  if (myIndex > x.length) {myIndex = 1}  

  x[myIndex-1].style.display = "block";  

  setTimeout(carousel, 2000); // Change image every 2 seconds

}

function showHide(d1,d2){

  var divDisplay=document.getElementById(d1);
  var divDisplay2=document.getElementById(d2);



  if((divDisplay.style.display)=="none"){

    (divDisplay.style.display)="block";
    (divDisplay2.style.display)="block";

    
  }

  else{

    (divDisplay.style.display)="none";
    (divDisplay2.style.display)="none";

  }


}


var ourInput = document.getElementById('pickup');
 ourInput.onfocus = function ()
  { 'use strict'; 
  this.removeAttribute('placeholder');
 }; 
 ourInput.onblur = function () 
 { 'use strict'; 
 this.setAttribute('placeholder', 'Enter you picking-up location'); 
};



var ourInput= document.getElementById('dropoff');
 ourInput.onfocus = function ()
  { 'use strict'; 
  this.removeAttribute('placeholder');
 }; 
 ourInput.onblur = function () 
 { 'use strict'; 
 this.setAttribute('placeholder', 'Enter you dropping-off location'); 
};



var ourInput= document.getElementById('mail');
 ourInput.onfocus = function ()
  { 'use strict'; 
  this.removeAttribute('placeholder');
 }; 
 ourInput.onblur = function () 
 { 'use strict'; 
 this.setAttribute('placeholder', 'Enter your Email'); 
};
