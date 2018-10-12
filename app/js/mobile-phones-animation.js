var controller = new ScrollMagic.Controller();

// build tween
var tween = TweenMax.to(".adaptability-section__phone-img", 0.1,
    {right: 0},
    {yoyo: true, ease: Circ.easeInOut});

// build scene and set duration to window height
var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 400})
    .setTween(tween)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);