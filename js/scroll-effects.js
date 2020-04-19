$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        // animate to second panel
        .to(".v-Section_BgYellow", 1, {width: "100%"})
        .to(".v-Section_BgYellow", 1, {x: "90%"})	// move in to first panel
        .to(".v-Section_Intro", .5, {x: "60%"})
        .to(".v-Section_About", .5, {x: "-100%"})
        .to(".v-About_Copy", 1, {opacity: "1", x: "20%"})
    // create scene to pin and link animation
    var scene1 = new ScrollMagic.Scene({
                    triggerElement: "body",
                    triggerHook: "onLeave",
                    duration: "200%"
                })
                .setPin("body")
                .setTween(wipeAnimation)
                .addTo(controller);
    
    // build tween
    var works = new TimelineMax()
        .staggerFromTo(".v-Work_ImageWrapper", 2, {height:"0", opacity:0}, {height:"300", opacity:1, ease: Back.easeOut}, 1);

	// build scene
	var scene2 = new ScrollMagic.Scene({triggerElement: ".v-Section_Works", duration: "200%"})
					.setTween(works)
					.addIndicators({name: "staggering"}) // add indicators (requires plugin)
					.addTo(controller); 

    // // open menu
    // var openMenu = gsap.to(".v-Nav_Wrapper", {
    //     duration: 4, 
    //     x: 750, 
    //     rotation: 360, 
    //     ease: "none", 
    //     paused: true
    //     });
        
    //     // click handlers for controlling the tween instance...
    //     document.querySelector(".v-Nav_Toggle").onclick = () => openMenu.play();
});