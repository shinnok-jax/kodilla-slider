$(function(){
	var carouselList = $("#carousel ul");
	setTimeout(changeSlide, 3000);
	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
});