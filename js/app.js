$(window).on("load", function () {
	let name = $(".enteredName");
	const askedName = prompt("What's your name?");

	if (askedName) {
		name.text(askedName);
	} else if (
		askedName === null ||
		askedName === undefined ||
		askedName === ""
	) {
		name.text("sisters");
		$(".preloader").addClass("revomed");
	}

	$(".preloader").addClass("revomed");
	$(".card").addClass("animated");

	TweenLite.set("#petals", { perspective: 700 });
	TweenLite.set("img", { xPercent: "-50%", yPercent: "-50%" });

	var total = 120;
	var warp = document.getElementById("petals"),
		w = window.innerWidth,
		h = window.innerHeight;

	for (i = 0; i < total; i++) {
		var Div = document.createElement("div");
		TweenLite.set(Div, {
			attr: { class: "dot" },
			x: R(0, w),
			y: R(-160, -120),
			z: R(-200, 200),
		});
		warp.appendChild(Div);
		animm(Div);
	}

	function animm(elm) {
		TweenMax.to(elm, R(10, 25), {
			y: h + 90,
			ease: Linear.easeNone,
			repeat: -1,
			delay: -15,
		});
		TweenMax.to(elm, R(6, 12), {
			x: "+=110",
			rotationZ: R(0, 180),
			repeat: -1,
			yoyo: true,
			ease: Sine.easeInOut,
		});
		TweenMax.to(elm, R(2, 8), {
			rotationX: R(0, 360),
			rotationY: R(0, 360),
			repeat: -1,
			yoyo: true,
			ease: Sine.easeInOut,
			delay: -5,
		});
	}

	function R(min, max) {
		return min + Math.random() * (max - min);
	}

	/* https://mattboldt.com/typed.js/ */
	var typed = new Typed("#text", {
		strings: [
			"Happy Women's Day! I hope you're doing well and feeling happy. I just wanted to wish you all the best on this special day. May you have lots of success and happiness in your life, enjoy the beauty of spring, and stay healthy all year long.  <br> <b>So keep shining and smiling, and have an awesome Women's Day!</b>",
		],
		startDelay: 4500,
		typeSpeed: 92,
		loop: false,
		showCursor: false,
		preStringTyped: function () {
			var title = document.getElementById("title");
			title.style.opacity = 1;
		},
		onComplete: function () {
			var author = document.getElementById("author");
			author.style.opacity = 1;
		},
	});

	if (window.matchMedia("(max-width: 990px)").matches) {
		setTimeout(function () {
			$(".bouquet-img").css("transform", "translate(200px, 140%)");
			$(".card").attr("style", "opacity: 0.5 !important;");
		}, 50000);

		$(".bouquet-img").on("click mouseleave", function () {
			$(this).css("transform", "translate(200px, 260%)");
			$(".card").attr("style", "opacity: 0.8 !important;");
		});
	} else {
		setTimeout(function () {
			$(".bouquet-img").css("transform", "translate(220px, 100%)");
			$(".card").attr("style", "opacity: 0.5 !important;");
		}, 45000);

		$(".bouquet-img").on("click mouseleave", function () {
			$(this).css("transform", "translate(200px, 220%)");
			$(".card").attr("style", "opacity: 0.8 !important;");
		});
	}
});
