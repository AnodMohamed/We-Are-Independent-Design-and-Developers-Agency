// make slide take the hight of the screan with upper bar and nav bar 
$(function () {
 'use strict';
 var winH  =$(window).height(),
	 upperH	 =$('.upper-bar').innerHeight(),
	 navH    =$('.navbar').innerHeight();
$('.slider, .carousel-item').height(winH - (upperH+navH));
	

});	