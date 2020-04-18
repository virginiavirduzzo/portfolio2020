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
        .to("", .5, {opacity: "1"} )
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

    // // init controller
    // var controller1 = new ScrollMagic.Controller();

    // // build scene
    // var animateElem = document.querySelector(".v-Section_BgYellow");
    // var scene = new ScrollMagic.Scene({triggerElement: ".v-Scroll", duration: 200})
    //                 .on("enter", function () {
    //                     // trigger animation by changing inline style.
    //                     animateElem.style.width = "100%";
    //                 })
    //                 .on("leave", function () {
    //                     // reset style
    //                     animateElem.style.width = "50%";
    //                 })
    //                 .addIndicators({name: "2 - change inline style"}) // add indicators (requires plugin)
    //                 .addTo(controller1);
});