
// import $ from 'jquery'
// import 'slick-carousel'
// import 'jrange'

// function valueChangeds()
// {
// 	$(".termCheck").is(":checked") ? $(".terms").hide() : $(".terms").show()
// }
// document.addEventListener("DOMContentLoaded", function ()
// {
// 	Typed.new("#typed",
// 	{
// 		stringsElement: document.getElementById("typed-strings"),
// 		typeSpeed: 30,
// 		backDelay: 2500,
// 		loop: !1,
// 		contentType: "html",
// 		loopCount: null,
// 		callback: function ()
// 		{
// 			foo()
// 		},
// 		resetCallback: function ()
// 		{
// 			newTyped()
// 		}
// 	});
// 	var e = document.querySelector(".reset");
// 	e && e.addEventListener("click", function ()
// 	{
// 		document.getElementById("typed")._typed.reset()
// 	})
// }),
// //  $(function ()
// // {
// // 	$("#tabs").tabs()
// // }),
// //  $(function ()
// // {
// // 	$(".datepicker").datetimepicker(
// // 	{
// // 		timepicker: !1,
// // 		format: "d.m.Y"
// // 	}), $(".timepicker").datetimepicker(
// // 	{
// // 		datepicker: !1
// // 	})
// // }),

// $(".brandsWrap .images").slick({
//     dots: !1,
//     infinite: !0,
//     speed: 300,
//     slidesToShow: 10,
//     slidesToScroll: 1,
//     autoplay: !0,
//     autoplaySpeed: 2e3,
//     responsive: [{
//         breakpoint: 600,
//         settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1
//         }
//     }, {
//         breakpoint: 480,
//         settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1
//         }
//     }]
// }), $(".testislider").slick(
// {
// 	dots: !1,
// 	infinite: !0,
// 	speed: 300,
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	autoplay: !0,
// 	autoplaySpeed: 2e3,
// 	responsive: [
// 	{
// 		breakpoint: 700,
// 		settings:
// 		{
// 			slidesToShow: 2,
// 			slidesToScroll: 1
// 		}
// 	},
// 	{
// 		breakpoint: 600,
// 		settings:
// 		{
// 			slidesToShow: 1,
// 			slidesToScroll: 1
// 		}
// 	}]
// }),$(".categories").slick({
//     dots: !1,
//     infinite: !0,
//     speed: 300,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: !0,
//     autoplaySpeed: 2e3,
//     responsive: [{
//         breakpoint: 600,
//         settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1
//         }
//     }, {
//         breakpoint: 480,
//         settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1
//         }
//     }]
// }), $(".offerWraps").slick(
// {
// 	dots: !1,
// 	infinite: !0,
// 	speed: 300,
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	centerMode: !0,
// 	autoplaySpeed: 2e3,
// 	responsive: [
// 	{
// 		breakpoint: 600,
// 		settings:
// 		{
// 			arrows: !1,
// 			autoplay: !0,
// 			slidesToShow: 2,
// 			slidesToScroll: 1
// 		}
// 	},
// 	{
// 		breakpoint: 480,
// 		settings:
// 		{
// 			arrows: !1,
// 			autoplay: !0,
// 			slidesToShow: 1,
// 			slidesToScroll: 1
// 		}
// 	}]
// }), $(".zero").click(function (e)
// {
// 	$(".zero").is(":checked") && $(this).parent("label").parent(".fieldWr").siblings(".terms").show()
// }), $(".destinations .desticnt").slick(
// {
// 	dots: !1,
// 	infinite: !0,
// 	speed: 300,
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	autoplaySpeed: 2e3,
// 	responsive: [
// 	{
// 		breakpoint: 600,
// 		settings:
// 		{
// 			arrows: !1,
// 			slidesToShow: 2,
// 			slidesToScroll: 1
// 		}
// 	},
// 	{
// 		breakpoint: 480,
// 		settings:
// 		{
// 			arrows: !1,
// 			slidesToShow: 1,
// 			slidesToScroll: 1
// 		}
// 	}]
// }), $(".openNav").click(function (e)
// {
// 	e.preventDefault(), $(".header nav").addClass("activeNav")
// }), $(".closeNav").click(function (e)
// {
// 	e.preventDefault(), $(".header nav").removeClass("activeNav")
// }), $(".videobtn").click(function (e)
// {
// 	e.preventDefault(), $(".videobtn").css("visibility", "hidden"), $(".vedioWrap .loaders").fadeIn(), $(".vimeo-wrapper").html('<video autoplay muted loop><source src="video/video.mp4" type="video/mp4"></video>'), $(".vimeo-wrapper").fadeIn()
// }), $(".acrdBtn").click(function (e)
// {
// 	e.preventDefault(), $(".acrdBtn").removeClass("ui-state-active"), $(this).addClass("ui-state-active"), $(".acrdContent").slideUp("slow"), $(this).next(".acrdContent").slideDown("slow")
// }), $(".smallImages").slick(
// {
// 	slidesToShow: 4,
// 	slidesToScroll: 1,
// 	arrows: !0,
// 	dots: !1,
// 	focusOnSelect: !0
// }), $(".smallImages img").click(function (e)
// {
// 	e.preventDefault();
// 	var s = $(this).attr("src");
// 	$(this).parents(".smallImages").siblings(".bigsImages").children(".imgs").children("img").attr("src", s)
// }), 
// // $(".slider-input").jRange(
// // {
// // 	from: 0,
// // 	to: 100,
// // 	step: 1,
// // 	scale: [0, 25, 50, 75, 100],
// // 	format: "%s",
// // 	width: 300,
// // 	showLabels: !0,
// // 	isRange: !0
// // }),
//  $(".smallImagess img").click(function (e)
// {
// 	e.preventDefault();
// 	var s = $(this).attr("src");
// 	$(this).parents(".smallImagess").siblings(".bigsImages").children(".imgs").children("img").attr("src", s)
// }), $(".lst").click(function (e)
// {
// 	e.preventDefault(), $(".grd").removeClass("act"), $(this).addClass("act"), $(".listView").fadeIn(), $(".girdView").css("display", "none"), $(".smallImagess").slick(
// 	{
// 		slidesToShow: 4,
// 		slidesToScroll: 1,
// 		arrows: !0,
// 		dots: !1,
// 		focusOnSelect: !0
// 	})
// }), $(".grd").click(function (e)
// {
// 	e.preventDefault(), $(".lst").removeClass("act"), $(this).addClass("act"), $(".girdView").fadeIn(), $(".listView").css("display", "none")
// }), $(".topSlides").slick(
// {
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	arrows: !1,
// 	fade: !0,
// 	asNavFor: ".bottomSlides"
// }), $(".bottomSlides").slick(
// {
// 	slidesToShow: 6,
// 	slidesToScroll: 1,
// 	asNavFor: ".topSlides",
// 	dots: !1,
// 	arrows: !0,
// 	focusOnSelect: !0
// }), $(".brandsWrap a.nexts").hover(function ()
// {
// 	$(".infiniteslide_wrap").addClass("hoverL")
// }, function ()
// {
// 	$(".infiniteslide_wrap").removeClass("hoverL")
// }), $(".brandsWrap a.prevs").hover(function ()
// {
// 	$(".infiniteslide_wrap").addClass("hoverR")
// }, function ()
// {
// 	$(".infiniteslide_wrap").removeClass("hoverR")
// });
// $('.hiredCarss').slick({dots: false,speed: 300,slidesToShow: 3,slidesToScroll: 3,responsive: [{breakpoint: 700,settings: {slidesToShow: 2,slidesToScroll: 1}},{breakpoint: 480,settings:{slidesToShow: 1,slidesToScroll: 1}}]});