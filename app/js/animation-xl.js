var controller = new ScrollMagic.Controller();

//first-pattern
var tween;
if (window.innerWidth > 1200) {

    tween = TweenMax.to(".site-templates-section__first-pattern", 1,
        {left: 0, top: -70},
        {left: -1800, yoyo: true, ease: Circ.easeInOut});

} else if(window.innerWidth >= 992 && window.innerWidth < 1199.98) {

    tween = TweenMax.to(".site-templates-section__first-pattern", 1,
        {left: 0, top: -140},
        {left: -1800, yoyo: true, ease: Circ.easeInOut});

} else if(window.innerWidth >= 768 && window.innerWidth < 991.98) {

    tween = TweenMax.to(".site-templates-section__first-pattern", 1,
        {left: 0, top: 0},
        {left: -1800, yoyo: true, ease: Circ.easeInOut});

} else {
    tween = TweenMax.to(".site-templates-section__first-pattern", 1,
        {left: 0, top: 0},
        {left: -1800, yoyo: true, ease: Circ.easeInOut});

}


var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 400})
    .setTween(tween)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);


//second-pattern

var tween1;

if (window.innerWidth > 1200) {

    tween1 = TweenMax.to(".site-templates-section__second-pattern", 1,
        {right: 0, top: 225},
        {right: -1800, yoyo: true, ease: Circ.easeInOut});

} else if(window.innerWidth >= 992 && window.innerWidth < 1199.98) {

    tween1 = TweenMax.to(".site-templates-section__second-pattern", 1,
        {right: 0, top: 110},
        {right: -1800, yoyo: true, ease: Circ.easeInOut});

} else if(window.innerWidth >= 768 && window.innerWidth < 991.98) {

    tween1 = TweenMax.to(".site-templates-section__second-pattern", 1,
        {right: 0, top: 200},
        {right: -1800, yoyo: true, ease: Circ.easeInOut});

} else {
    tween1 = TweenMax.to(".site-templates-section__second-pattern", 1,
        {right: 0, top: 145},
        {right: -1800, yoyo: true, ease: Circ.easeInOut});
}


var scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 400})
    .setTween(tween1)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);


//phone

var tween2;

 tween2 = TweenMax.to(".adaptability-section__phone-img", 0.1,
    {opacity: 1},
    {yoyo: true, ease: Circ.easeInOut});

var scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger2", duration: 300
})
    .setTween(tween2)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);









//header
var tween3;

if (window.innerWidth > 1200) {
    tween3 = TweenMax.to(".tablet-images__animate", 0.5, {top: '-300px'});
} else if(window.innerWidth >= 992 && window.innerWidth < 1199.98) {
    tween3 = TweenMax.to(".tablet-images__animate", 0.5, {top: '-300px'});
} else if(window.innerWidth >= 768 && window.innerWidth < 991.98) {
    tween3 = TweenMax.to(".tablet-images__animate", 0.5, {top: '-500px'});
} else {
    tween3 = TweenMax.to(".tablet-images__animate", 0.5, {top: '-300px'});
}

var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "100%", offset: 320})
    .setTween(tween3)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

//..........................................................................................................

var tween4 = TweenMax.to(".interface-features__content-animate", 0.5,
    {bottom: 0}
    );

var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: "70%", offset: 100})
    .setTween(tween4)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
