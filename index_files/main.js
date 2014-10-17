/*------- для отображения слайдера на главной---------*/
$(function() {
	$('#slides').slidesjs({
		width: 940,
		height: 528,
		play: {
			active: false,
			auto: true,
			interval: 4000,
			swap: true,
			pauseOnHover: true,
			restartDelay: 2500
		},
		navigation: {
			active: false
		},
		pagination: {
			active: true,
			effect: "slide"
		}
	});
});

/*---for responsive tabs ---*/
$(function(){
	$('.sale .tab_drawer_heading').click(function(){
			var offset = $(this).offset();
			console.log(offset.top);
			$("html,body").animate({scrollTop: offset.top}, 1000);
	});

});

$(document).ready(function() {
    // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
    $("ul.tabs li").click(function() {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function() {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });

    /* Extra class "tab_last" 
       to add border to right side
       of last tab */
    $('ul.tabs li').last().addClass("tab_last");
});