let navbar = document.querySelector('.header .navbar');
let seachForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('contact-info');



document.querySelector('#menu-btn').onclick = () =>{
	navbar.classlist.toggle('active');
	seachForm.classlist.remove('active');
	loginForm.classlist.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
	seachForm.classlist.toggle('active');
	navbar.classlist.remove('active');
	loginForm.classlist.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
	loginForm.classlist.toggle('active');
	navbar.classlist.remove('active');
	seachForm.classlist.remove('active');
	
};


document.querySelector('#close-contact-info').onclick = () =>{
	loginForm.classlist.remove('active');
};


window.onscroll = () =>{
	navbar.classlist.remove('active');
	seachForm.classlist.remove('active');
	loginForm.classlist.remove('active');
	contactInfo.classlist.remove('active');
}

var swiper = new swiper(".home-slider", {
	loop:true,
	grabCursor:true,
	navigation: {
		nextE1: ".swiper-button-next",
		prevE1: ".swiper-button-prev",
	},
});

var swiper = new swiper(".reviews-slider", {
	loop:true,
	grabCursor:true,
	spaceBetween:20,
	breakpoints:{
		640:{
			slidesPerView:1,
		},
		768:{
			slidesPerView:2,
		},
		991:{
			slidesPerView:3,
		},
	},
});


var swiper = new swiper(".blog-slider", {
	loop:true,
	grabCursor:true,
	spaceBetween:20,
	breakpoints:{
		640:{
			slidesPerView:1,
		},
		768:{
			slidesPerView:2,
		},
		991:{
			slidesPerView:3,
		},
	},
});



var swiper = new swiper(".logo-slider", {
	loop:true,
	grabCursor:true,
	spaceBetween:20,
	breakpoints:{
		450:{
			slidesPerView:2,
		},
		640:{
			slidesPerView:3,
		},
		768:{
			slidesPerView:4,
		},
		1000:{
			slidesPerView:5,
		},
	},
});

