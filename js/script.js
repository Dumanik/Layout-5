	 $(document).ready(function(){
	 let link = $('.menu-mobile-link')
	 let link_active = $('.menu-mobile-link_active')
	 let menu = $('.menu-mobile');
	 let nav_link= $('.menu-mobile a');


	 link.click(function(){
	 	link.toggleClass("menu-mobile-link_active");
	 	menu.toggleClass("menu-mobile_active");
	 });
	 nav_link.click(function(){
	 	link.toggleClass("menu-mobile-link_active");
	 	menu.toggleClass("menu-mobile_active");
	 });

	// Smooth anchor transition

		 jQuery("a.scrollto").click(function () {
			 elementClick = jQuery(this).attr("href")
			 destination = jQuery(elementClick).offset().top;
			 jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1200);
			 return false;
		 });

	 });
