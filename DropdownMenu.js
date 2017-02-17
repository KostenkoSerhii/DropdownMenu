$(".link-js").on("click", function(e){
	var _this = $(this);
	var attr = $(this).attr("href");
	e.preventDefault();
	$(".link-js").removeClass("js-menu-active");
	_this.addClass("js-menu-active");
	$(".link-js").not(_this).next(".sub-menu").slideUp();

	if(attr == "#" && _this.next().is(".sub-menu")){
		_this.next(".sub-menu").slideToggle();

	}else{
		$("html, body").animate({
			scrollTop: $(attr).offset().top
		}, 500);
		
		//if(windowWidth < 767){
		//	$(".menu-btn").trigger('click');
		//};
		
	};
});

$(".sub-link-js").on("click", function(e){
	e.preventDefault();
	var attr = $(this).attr("href");
	//var tabAttr = $(this).attr("data-tab-index")
	//$('#tabs').tabs("option", "active", tabAttr  );
	$(this).parent().parent().slideUp();
	$("html, body").animate({
		scrollTop: $(attr).offset().top
	}, 500);

	//if(windowWidth < 767){
	//	$(".menu-btn").trigger('click');
	//};

});