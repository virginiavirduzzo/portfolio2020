$(function () { // wait for document ready
    // init
    let controller = new ScrollMagic.Controller();

    // define movement of panels
    let wipeAnimation = new TimelineMax()
        // animate to second panel
        .to(".v-Section_BgYellow", 1, {width: "100%"})
        .to(".v-Section_BgYellow", 1, {x: "90%"})	// move in to first panel
        .to(".v-Section_Intro", .5, {x: "60%"})
        .to(".v-Section_About", .5, {x: "-100%"})
        .to(".v-About_Copy", 1, {opacity: "1", x: "20%"})
    // create scene to pin and link animation
    let scene1 = new ScrollMagic.Scene({
                    triggerElement: "body",
                    triggerHook: "onLeave",
                    duration: "200%"
                })
                .setPin("body")
                .setTween(wipeAnimation)
                .addTo(controller);

    // define movement of work sections
    let works = new TimelineMax()
        .staggerFromTo(".v-Work_ImageWrapper", 2, {height:"0", opacity:0}, {height:"300", opacity:1, ease: Back.easeOut}, 1)

	// build scene
	let scene2 = new ScrollMagic.Scene({
                    triggerElement: ".v-Section_Works", 
                    duration: "200%"
                })
                .setTween(works)
                .addTo(controller); 
    
    // open menu
    function openMenu() {
        $('.v-Nav').toggleClass("v-Nav_Open");
        $(this).toggleClass("v-Nav_ToggleClose");  
        $('.v-Nav_List').toggleClass("v-Nav_ListShown")
        
    }
    document.querySelector(".v-Nav_Toggle").onclick = () => openMenu();
    
    // scroll menu
    $(document).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();
        $('.v-Nav').removeClass("v-Nav_Open");
        $('.v-Nav_Toggle').removeClass("v-Nav_ToggleClose");  
        $('.v-Nav_List').removeClass("v-Nav_ListShown")

        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'linear');
    });
});
