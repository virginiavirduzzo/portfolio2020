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
        .to(".v-About_Copy", 1, {opacity: "1", x:"20%"} )
    // create scene to pin and link animation
    new ScrollMagic.Scene({
            triggerElement: "body",
            triggerHook: "onLeave",
            duration: "200%"
        })
        .setPin("body")
        .setTween(wipeAnimation)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    
    // open menú
    var openMenu = gsap.to(".v-Nav_Wrapper", {
        duration: 4, 
        x: 750, 
        rotation: 360, 
        ease: "none", 
        paused: true
        });
        
        // click handlers for controlling the tween instance...
        document.querySelector(".v-Nav_Toggle").onclick = () => openMenu.play();
});