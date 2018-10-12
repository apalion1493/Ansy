// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = TweenMax.to(".tablet-images__animate", 0.5, {rotationY: 45});

// build scene and set duration to window height
var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "150%", offset: 250})
    .setTween(tween)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


