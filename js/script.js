$(document).ready(function(){

		$("#fotobox").show();
		$("#faktbox").hide();
		$("#kontaktbox").hide();
		$("footer").attr("bottom", "0");
		$("footer").attr("position", "absolute");
		$("footer").attr("height", "30px");

    $("#Fotos").click(function(){
		
		$(this).addClass("active");
		$("#Fakten").removeClass("active");
		$("#Kontakt").removeClass("active");
		
		$(this).attr("aria-selected", "true");
		$("#Fakten").attr("aria-selected", "false");
		$("#Kontakt").attr("aria-selected", "false");
		$("#fotobox").attr("arria-hidden", "false");
		$("#faktbox").attr("arria-hidden", "true");
		$("#kontaktbox").attr("arria-hidden", "true");
				
		
        $("#fotobox").show();
		$("#faktbox").hide();
		$("#kontaktbox").hide();
    });
	


	$(".navbar-brand").click(function(){
		
		$("#Fotos").addClass("active");
		$("#Fakten").removeClass("active");
		$("#Kontakt").removeClass("active");
		
		$("#Fotos").attr("aria-selected", "true");
		$("#Fakten").attr("aria-selected", "false");
		$("#Kontakt").attr("aria-selected", "false");
		$("#fotobox").attr("arria-hidden", "false");
		$("#faktbox").attr("arria-hidden", "true");
		$("#kontaktbox").attr("arria-hidden", "true");
		
        $("#fotobox").show();
		$("#faktbox").hide();
		$("#kontaktbox").hide();
    });
	
	$("#Fakten").click(function(){
			
		$(this).addClass("active");
		$("#Fotos").removeClass("active");
		$("#Kontakt").removeClass("active");
		
		$("#Fakten").attr("aria-selected", "true");
		$("#Fotos").attr("aria-selected", "false");
		$("#Kontakt").attr("aria-selected", "false");
		$("#fotobox").attr("arria-hidden", "true");
		$("#faktbox").attr("arria-hidden", "false");
		$("#kontaktbox").attr("arria-hidden", "true");
		
        $("#fotobox").hide();
		$("#faktbox").show();
		$("#kontaktbox").hide();
    });
	
	$("#Kontakt").click(function(){
			
		$(this).addClass("active");
		$("#Fakten").removeClass("active");
		$("#Fotos").removeClass("active");
		
		$(this).attr("aria-selected", "true");
		$("#Fotos").attr("aria-selected", "false");
		$("#Fakten").attr("aria-selected", "false");
		$("#fotobox").attr("arria-hidden", "true");
		$("#faktbox").attr("arria-hidden", "true");
		$("#kontaktbox").attr("arria-hidden", "false");
		
        $("#fotobox").hide();
		$("#faktbox").hide();
		$("#kontaktbox").show();
    });
	
	$("#collapsible-0").click(function(){
		
		if ( $("#collapse0").is(":visible") ){
			$("#collapse0").hide();
			$("#collapse0").attr("arria-hidden", "true");
			$("#collapsible-0").attr("arria-expanded", "false");
		}
		else if ( $("#collapse0").is(":hidden") ){
			$("#collapse0").show();
			$("#collapse0").attr("arria-hidden", "false");
			$("#collapsible-0").attr("arria-expanded", "true");
		};
		
	});
	
		$("#collapsible-1").click(function(){
		
		if ( $("#collapse1").is(":visible") ){
			$("#collapse1").hide();
			$("#collapse1").attr("arria-hidden", "true");
			$("#collapsible-1").attr("arria-expanded", "false");
		}
		else if ( $("#collapse1").is(":hidden") ){
			$("#collapse1").show();
			$("#collapse1").attr("arria-hidden", "false");
			$("#collapsible-1").attr("arria-expanded", "true");
		};
		
	});
	
	
});