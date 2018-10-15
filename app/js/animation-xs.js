var controller = new ScrollMagic.Controller();

//first-pattern

var tween = TweenMax.to(".site-templates-section__first-pattern", 1,
    {left: 0, top: 0},
    {left: -1800, yoyo: true, ease: Circ.easeInOut});

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300})
    .setTween(tween)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


//second-pattern


var tween1 = TweenMax.to(".site-templates-section__second-pattern", 1,
    {right: 0, top: 100},
    {right: -1800, yoyo: true, ease: Circ.easeInOut});

var scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300})
    .setTween(tween1)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


//phone

var tween2 = TweenMax.to(".adaptability-section__phone-img", 0.1,
    {right: 0},
    {yoyo: true, ease: Circ.easeInOut});

var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 200})
    .setTween(tween2)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

//header

var tween3 = TweenMax.to(".tablet-images__animate", 0.5, {rotationY: 45});

var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "150%", offset: 250})
    .setTween(tween3)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);