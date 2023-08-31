var openContactPage = function(){
	console.log("open contact page")
	 $("#contact-page").toggleClass('display');
  	$(".img-container").toggleClass('active');
  	$(".top-bar").addClass("contact");
  	$("body").addClass("other-page");
}

var closeContactPage = function(page){
  console.log("close")
  $("#contact-page").toggleClass('display');
  $(".img-container").toggleClass('active');
    $(".top-bar").removeClass("contact");
    if(page == "projects"){
        
    }else if(page == "home"){
      $("body").removeClass("other-page");
    }
    
}


var openHowPage = function(){
  console.log("open-how-page")
	  $("#how-its-made-page").addClass('display');
  	$(".top-bar").addClass("how");
  	$("body").addClass("how");
}

var closeHowPage = function(){
  console.log("close-how-page")
	$("#how-its-made-page").toggleClass('display');
  	$(".top-bar").removeClass("how");
  	if(page == "projects"){
  			
  	}else if(page == "home"){
  		$("body").removeClass("how");
  	}
}


var page = "home";
var currentUrl = window.location.href;

if(currentUrl.indexOf("index.html") == -1){
    page = "other";
}

$(".contact").on( "click", function(){openContactPage()});
$( ".how-link" ).on( "click", function(){openHowPage()});

$("#how-its-made-page:not(a)").on('click', function(){closeHowPage(page)} );

$("#contact-page:not(a)").on('click', function(){closeContactPage(page)} );