$(document).ready(function(){

//<header>
//-----------------video_section-----------------
  //video섹션 msg 타이핑
  var typingstarting = false;
  var typingindex = 0;
  var typingTxt = $(".typing_txt").text();
  typingTxt = typingTxt.split("");
  if(typingstarting == false) {
     typingstarting = true;
     var tyInt = setInterval(typing,140);
   }

   function typing(){
     if(typingindex<typingTxt.length){
       if(typingindex == "30"){
         $(".typing").append("<span class=shohi>.</span>");
       }else{
         $(".typing").append(typingTxt[typingindex]);
       }
       typingindex++;
     } else{
       clearInterval(tyInt);
     }
   }

   setInterval(toggle, 500);
   var shown = true;
   function toggle(){
      if(shown){
        $(".shohi").css({opacity: 0});
        shown = false;
      } else {
        $(".shohi").css({opacity: 1});
        shown = true;
      }
    }

   // header_bottom / position: fixed;
   $(window).scroll(function(){
     var scrollTop = $(window).scrollTop();
       if(scrollTop > "50"){
           $(".header_bottom_wrap").addClass('active')
           $(".header_bottom").addClass('active')
           $(".search_box").addClass('active')
           $(".login").addClass('active')
           $(".burger_wrap").addClass('active')
       } else {
         $(".header_bottom_wrap").removeClass('active')
         $(".header_bottom").removeClass('active')
         $(".search_box").removeClass('active')
         $(".login").removeClass('active')
         $(".burger_wrap").removeClass('active')
       }
   })




// </header>
// <main>
  // popup메뉴 close
  $(".popup_close").on('click',function(){
    $(".event_popup_wrap").hide();
  })
  // side메뉴바, 애니메이션&화살표방향 변경
  $(".side_menu_wrap .handle").on('click', function(e){
    $(".side_menu_wrap").toggleClass("open");
    e.preventDefault();
    if($(".side_menu_wrap").hasClass("open")==true){
      $(".side_menu_wrap .handle i").attr("class","fas fa-arrow-right");
    } else {
      $(".side_menu_wrap .handle i").attr("class","fas fa-arrow-left");
    }
  })


//product_slide_section
  //product_slide_section에 이미지 넣기
  var slidelength = $(".product_slide_section .slide ul li a");
  for(var i = 0; i < slidelength.length; i++)
  $(".product_slide_section .slide ul li a:eq("+i+")").css({background:"url(./images/bg_slide_0"+(i+1)+".png) no-repeat center/cover"})
  //product_slide_section에 버튼 이벤트
  $(".product_slide_section .next").on('click', function(){
    $(".product_slide_section_wrap .slide ul li:eq(0):not(:animated)").css({zIndex:2, display:"block"}).animate({left:"30%",opacity:1, width: "525px", height: "310px"})
    $(".product_slide_section_wrap .slide ul li:eq(1):not(:animated)").css({zIndex:3}).animate({left:"50%",opacity:1, width: "750px", height: "500px"})
    $(".product_slide_section_wrap .slide ul li:eq(2):not(:animated)").css({zIndex:2}).animate({left:"70%",opacity:1, width: "525px", height: "310px"})
    $(".product_slide_section_wrap .slide ul li:eq(3):not(:animated)").css({zIndex:1}).animate({left:"90%",opacity:0, width: "300px", height: "220px"}, function(){
      $(this).css({display:"none"})
    })
    $(".product_slide_section_wrap .slide ul li:eq(4):not(:animated)").css({zIndex:0}).animate({left:"10%",opacity:0, width: "300px", height: "220px"},function(){
      $(".product_slide_section_wrap .slide ul").prepend($(".product_slide_section_wrap .slide ul li:last"));
      $(this).css({display:"none"})
    })
  })
  $(".product_slide_section .prev").on('click', function(){
    $(".product_slide_section_wrap .slide ul li:eq(0):not(:animated)").css({zIndex:0}).animate({left:"90%",opacity:0, width: "300px", height: "220px"})
    $(".product_slide_section_wrap .slide ul li:eq(1):not(:animated)").css({zIndex:1}).animate({left:"10%",opacity:0, width: "300px", height: "220px"}, function(){
      $(this).css({display:"none"})
    })
    $(".product_slide_section_wrap .slide ul li:eq(2):not(:animated)").css({zIndex:2}).animate({left:"30%",opacity:1, width: "525px", height: "310px"})
    $(".product_slide_section_wrap .slide ul li:eq(3):not(:animated)").css({zIndex:3}).animate({left:"50%",opacity:1, width: "750px", height: "500px"})
    $(".product_slide_section_wrap .slide ul li:eq(4):not(:animated)").css({zIndex:2, display:"block"}).animate({left:"70%",opacity:1, width: "525px", height: "310px"}, function(){
      $(".product_slide_section_wrap .slide ul").append($(".product_slide_section_wrap .slide ul li:first"));
    })
  })
  //이미지 자동회전
  var timer;
  var timer = setInterval(function(){
    $(".product_slide_section .next").click();
  }, 3000)
  $(".product_slide_section_wrap .movebutton div").on('click',function(){
    clearInterval(timer);
    timer = setInterval(function(){
      $(".product_slide_section .next").click();
    }, 3000)
  })
  //index2에 왔을때만 context보이게
  $(".slide ul li:eq(2) .context").show();
  var slideliLength = $(".slide ul li").length;
  $(".product_slide_section .next").on("click", function(){
    for(var i = 0; i < slideliLength; i++){
      var liIndex = $(".slide ul li:eq("+i+")").index();
      if(liIndex == 1){
        $(".slide ul li:eq("+i+") .context").show();
      } else {
        $(".slide ul li:eq("+i+") .context").hide();
      }
    }
  })
  $(".product_slide_section .prev").on("click", function(){
    for(var i = 0; i < slideliLength; i++){
      var liIndex = $(".slide ul li:eq("+i+")").index();
      if(liIndex == 3){
        $(".slide ul li:eq("+i+") .context").show();
      } else {
        $(".slide ul li:eq("+i+") .context").hide();
      }
    }
  })
  // 비행기 스크롤 반응
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var curscrollTop = $(window).scrollTop();
    if(scrollTop < "500"){
      $(".airplan").css({top: 0})
    } else if(scrollTop > "1320"){
      $(".airplan").css({bottom: 0})
    } else {
      $(".airplan").stop().animate({top:$(window).scrollTop()-500}, 1000)
    }
  })
  $("body").on("mousewheel", function(event, delta){
    if(delta>0){ //휠올릴때 delta+
      $(".airplan").css({transform: "rotate(180deg)"})
    } else if(delta < 0){ //휠올릴때 delta-
      $(".airplan").css({transform: "rotate(360deg)"})
    }
  })


//----------- reviewer_section----------------
  //리뷰섹션 top0애니메이션
  $(".reviewer_section .hide").css({opacity: 0})
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var delayarray;
    var delaylength = $(".reviewer_section .top0").length;
    var hidelength = $(".reviewer_section .hide").length;
    if(scrollTop > "1200"){
        $(".top0").animate({top:0}, 1000);
      //img fadeIN
      for(var i = 0; i < hidelength; i++){
        delayarray = $(".hide:eq("+i+")").data("delay");
        $(".reviewer_section .hide:eq("+i+")").delay(delayarray*1000).animate({opacity: 1});
      }
    } else {
    }
  })
  //리뷰섹션 img 마우스호버
  $(".reviewer_section_wrap .img_wrap .cover").css({opacity: 0})
  $(".img_wrap").hover(function(){
    $(this).children(".cover").stop().animate({opacity: 1}, 700)
  }, function(){
    $(this).children(".cover").stop().animate({opacity: 0}, 700)
  })




//------------ceo_section---------------------
  // ceo img 변경
  setInterval(fading, 4000);
  function fading(){
      $(".chang_img img:eq(0)").fadeOut(2000).removeClass('active');
      $(".chang_img").append($(".chang_img img:eq(0)"))
      $(".chang_img img:eq(0)").fadeIn(2000).addClass('active');
  }
  setInterval(svg, 4000);
  function svg(){
    $(".ceo_section .introduce_wrap .introduce_svg_wrap circle").css({animation: "none"});
    $(".ceo_section .introduce_wrap .introduce_svg_wrap circle").css({animation: "dashAni 2s linear forwards"});
  }
  //ceo_mal 애니메이션
  $(".introduce_mal p").hide();
  $(window).scroll(function(){
    // 사인애니메이션
    var scrollTop = $(window).scrollTop();
    var svglength = $(".sign svg").length;
    if(scrollTop > "2500"){
      for(var i = 0; i < svglength; i++){
        var aniname = "signAni";
        var aniduration = $(".sign svg:eq("+i+")").data("aniduration");
        var anidelay = $(".sign svg:eq("+i+")").data("delay");
        var anidretion = "forwards";
        $(".sign svg:eq("+i+")").css({animation: "linear "+aniduration+" "+aniname+" "+anidelay+" "+"forwards"})
      }
      $(".introduce_mal p").fadeIn(1000);
    }
  })


  setInterval(line);
  function line(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop > "2500"){
      $(".ceo_section .introduce_wrap .introduce_svg_wrap circle").css({animation: "dashAni 2s linear forwards"});
    }
  }

  $("body").on("mousemove", function(e){
    var $bg = $(".ceo_background img:eq(0)");
    var posX = ($(window).width() - e.screenX)/100 - $(window).width()*0.1;
    var posY = ($(window).height() - e.screenY)/100 - $(window).height()*0.1;
    $bg.css({ left: posX+260, top: posY-120 })
  })
  $("body").on("mousemove", function(e){
    var $bg = $(".ceo_background img:eq(2)");
    var posX = ($(window).width() - e.screenX)/100 - $(window).width()*0.1;
    var posY = ($(window).height() - e.screenY)/100 - $(window).height()*0.1;
    $bg.css({ left: -posX-190, top: -posY+170 })
  })


  // 스노우
  $(document).ready(function(){
    window.onload = function(){
  	//canvas init
  	var canvas = document.getElementById("canvas");
  	var ctx = canvas.getContext("2d");

  	//canvas dimensions
  	var W = window.innerWidth;
  	var H = window.innerHeight;
  	canvas.width = W;
  	canvas.height = H;

  	//snowflake particles
  	var mp = 25; //max particles
  	var particles = [];
  	for(var i = 0; i < mp; i++)
  	{
  		particles.push({
  			x: Math.random()*W, //x-coordinate
  			y: Math.random()*H, //y-coordinate
  			r: Math.random()*4+1, //radius
  			d: Math.random()*mp //density
  		})
  	}

  	//Lets draw the flakes
  	function draw()
  	{
  		ctx.clearRect(0, 0, W, H);

  		ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  		ctx.beginPath();
  		for(var i = 0; i < mp; i++)
  		{
  			var p = particles[i];
  			ctx.moveTo(p.x, p.y);
  			ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
  		}
  		ctx.fill();
  		update();
  	}

  	//Function to move the snowflakes
  	//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
  	var angle = 0;
  	function update()
  	{
  		angle += 0.01;
  		for(var i = 0; i < mp; i++)
  		{
  			var p = particles[i];
  			//Updating X and Y coordinates
  			//We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
  			//Every particle has its own density which can be used to make the downward movement different for each flake
  			//Lets make it more random by adding in the radius
  			p.y += Math.cos(angle+p.d) + 1 + p.r/2;
  			p.x += Math.sin(angle) * 2;

  			//Sending flakes back from the top when it exits
  			//Lets make it a bit more organic and let flakes enter from the left and right also.
  			if(p.x > W+5 || p.x < -5 || p.y > H)
  			{
  				if(i%3 > 0) //66.67% of the flakes
  				{
  					particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
  				}
  				else
  				{
  					//If the flake is exitting from the right
  					if(Math.sin(angle) > 0)
  					{
  						//Enter from the left
  						particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
  					}
  					else
  					{
  						//Enter from the right
  						particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
  					}
  				}
  			}
  		}
  	}

  	//animation loop
  	setInterval(draw, 33);
  }
  })

  //반응형웹 @media screen and (max-width: 859px)
  //header부분
    $('.mob_navigation_wrap .inner_ul').hide()
		$('.mob_navigation_wrap > nav > ul > li > a').on('click',function(){
      //슬라이드
      $('.mob_navigation_wrap .inner_ul').not($(this).next()).slideUp(500);
      $(this).next('.mob_navigation_wrap .inner_ul').slideToggle();
		})

    $(".burger_wrap").on('click', function(){
      $(".mob_navigation_wrap").css({display: "block"})
    })

    $(".mob_navigation_wrap .close_wrap").on('click', function(){
      $(".mob_navigation_wrap").css({display: "none"})
    })

    // 비행기 스크롤 반응
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if(scrollTop < "582"){
        $(".mob_airplane").css({left: 0})
      } else if(scrollTop > "850"){
        $(".mob_airplane").css({left: 270})
      } else {
        $(".mob_airplane").stop().animate({left:$(window).scrollTop()-580}, 1000)
      }
    })
    $("body").on("mousewheel", function(event, delta){
      if(delta>0){ //휠올릴때 delta+
        $(".mob_airplane").css({transform: "rotate(180deg)"})
      } else if(delta < 0){ //휠올릴때 delta-
        $(".mob_airplane").css({transform: "rotate(360deg)"})
      }
    })

    //product_slide_section_mob
    var slidelength = $(".product_slide_section .mob_slide ul li a");
    for(var i = 0; i < slidelength.length; i++)
    $(".product_slide_section .mob_slide ul li a:eq("+i+")").css({background:"url(./images/bg_slide_0"+(i+1)+".png) no-repeat center/cover"})



});//
