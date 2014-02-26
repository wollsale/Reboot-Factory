$(function() {

	$("#slider").draggable({
		axis: 'x',
		containment: 'parent',
		drag: function(event, ui) {
			if (ui.position.left > 50) {
			    setTimeout(function(){
			       $(".tempo").addClass("move-up");
			       $("img").addClass("move-up");
			       $("#well").addClass("move-up");
			   }, 000);
			    setTimeout(function(){
			       $(".box").addClass("move-in-right");
			       $(".box2").addClass("move-in-left");
			   }, 500);
			} else {
			    // Apparently Safari isn't allowing partial opacity on text with background clip? Not sure.
				// $("h2 span").css("opacity", 100 - (ui.position.left / 5))
			}
		},
		stop: function(event, ui) {
			if (ui.position.left < 51) {
				$(this).animate({
					left: 0
				})
			}
		}
	});
	
	// The following credit: http://www.evanblack.com/blog/touch-slide-to-unlock/
	
	$('#slider')[0].addEventListener('touchmove', function(event) {
	    event.preventDefault();
	    var el = event.target;
	    var touch = event.touches[0];
	    curX = touch.pageX - this.offsetLeft - 73;
	    if(curX <= 0) return;
	    if(curX > 195){
				//$('img').fadeOut();
				//$("#well").fadeOut();
	    		//$('img').delay(000).fadeOut();
	    		//$('#well').delay(000).fadeOut();
	    		//$('.tempo').delay(2000).fadeOut();
			    setTimeout(function(){
			       $(".login-page").addClass("move-up");
			   }, 000);
			    setTimeout(function(){
			       $(".page").addClass("move-in-right");
			       $(".posts").addClass("move-in-left");
			   }, 500);
	    		//$('.box').delay(4000).addClass("move-in");
	    		// Je dois utiliser la fonction setTimeout car sinon je ne peux pas mettre un delay à un addClass
	    }
	   	el.style.webkitTransform = 'translateX(' + curX + 'px)'; 
	}, false);
	
	$('#slider')[0].addEventListener('touchend', function(event) {	
	    this.style.webkitTransition = '-webkit-transform 0.3s ease-in';
	    this.addEventListener( 'webkitTransitionEnd', function( event ) { this.style.webkitTransition = 'none'; }, false );
	    this.style.webkitTransform = 'translateX(0px)';
	}, false);




});


// ANIMS PHOTO

	var boolflash = true;
	$( ".flash" ).click(function() {
		if(boolflash == 1) {
			console.log("boolflash = 1")
			$( ".flash" ).removeClass( "bg-flash" );
			boolflash = 0;
		}
	});
	$( ".flash" ).click(function() {
		if(boolflash == 0) {
			console.log("boolflash = 0")
			$( ".flash" ).removeClass( "bg-flash" );
			boolflash = 1;
		}
	});

	$( ".button-pict" ).click(function() {
		console.log("hey");
		// $('.line-v1').addClass( "move-up" );
		// $('.line-v2').addClass( "move-up" );
		// $( ".take-pict" ).addClass( "move-left" );
		$('.take-pict').fadeOut();

	});

	$( ".confirm-icon-y" ).click(function() {
		console.log("hey");
		// $('.line-v1').addClass( "move-up" );
		// $('.line-v2').addClass( "move-up" );
		// $( ".take-pict" ).addClass( "move-left" );
		$('.confirm').fadeOut();

	});



// ANIM NEW POST



	$( ".secret" ).click(function() {
		$( ".current-post" ).addClass( "anim-new" );
	});




	$(document).bind(
	      'touchmove',
	          function(e) {
	            e.preventDefault();
	          }



);