	(function($){


// Pages - swipes


		var $page = $("#page");
		var $sidebarbloc = $("#posts")
		var sidebar = 0;
		$page.hammer()
			.on("swiperight", function(e){
				if(sidebar){
					return true;
				}
				$page.animate({translateX:"0px"}, 300);
				sidebar = 1;
			})
			.on("swipeleft", function(e){
				if(!sidebar){
					return true;
				}
				$page.animate({translateX:"-320px"}, 300);
				sidebar = 0;
			})



// Pages - drags




			.on("drag", function(e){
				if(- e.gesture.deltaX > 320) {
					return false;
				}
				if(e.gesture.deltaX > 320 ) {
					return false;
				}
				if(e.gesture.direction == "left" ){
					$page.animate({translateX: e.gesture.deltaX + "px"}, 0);
				}
				if(e.gesture.direction == "right"){
					$page.animate({translateX: -320 + e.gesture.deltaX + "px"}, 0);
				}
			})
			.on("dragend", function(e){
				if(e.gesture.direction == "left"){
					if(- e.gesture.deltaX > 160){
						$page.animate({translateX:"-320px"}, 300);
						sidebar = 0;
					}else{
						$page.animate({translateX:"0px"}, 300);
					}
				}
				if(e.gesture.direction == "right"){
					if(e.gesture.deltaX < 160){
						$page.animate({translateX:"-320px"}, 300);
						sidebar = 1;
					}else{
						$page.animate({translateX:"0px"}, 300);
					}
				}
			})









// POSTS





// POSTS - swipes







		var $posts = $("#posts");
		var bool = 0;
		$posts.hammer()
			.on("swiperight", function(e){
				if(sidebar){
					return true;
				}
				$posts.animate({translateX:"0px"}, 300);
				sidebar = 1;
			})
			.on("swipeleft", function(e){
				if(!sidebar){
					return true;
				}
				$posts.animate({translateX:"-320px"}, 300);
				sidebar = 0;
			})



// POSTS - drags


			.on("drag", function(e){
				if(- e.gesture.deltaX > 320) {
					return false;
				}
				if(e.gesture.deltaX > 320 ) {
					return false;
				}
				if(e.gesture.direction == "left" ){
					$posts.animate({translateX: e.gesture.deltaX + "px"}, 0);
				}
				if(e.gesture.direction == "right"){
					$posts.animate({translateX: -320 + e.gesture.deltaX + "px"}, 0);
				}
			})
			.on("dragend", function(e){
				if(e.gesture.direction == "left"){
					if(- e.gesture.deltaX > 160){
						$posts.animate({translateX:"-320px"}, 300);
						sidebar = 0;
					}else{
						$posts.animate({translateX:"0px"}, 300);
					}
				}
				if(e.gesture.direction == "right"){
					if(e.gesture.deltaX < 160){
						$posts.animate({translateX:"-320px"}, 300);
						sidebar = 1;
					}else{
						$posts.animate({translateX:"0px"}, 300);
					}
				}
			})





















})(Zepto);