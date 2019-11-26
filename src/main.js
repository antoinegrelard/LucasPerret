import gsap from 'gsap'
import SplitText from './js/SplitText'

const indexLaunch = () => {
	const tl = gsap.timeline({delay:0.5})
	const title = new SplitText(".m-title .line", {type:"chars"})

	tl.to('.intro-wrapper', {duration:2, scaleY:0, ease:"power4.inOut"})
	.fromTo('.line', {y:"60%", autoAlpha:0}, {autoAlpha:1, y:"0%", duration:2, ease:"power4.out", stagger: 0.2}, "-=1.2")
	.fromTo('.m-spe-line', {scaleY:0, autoAlpha:0}, {autoAlpha:1, scaleY:1, duration:1.6, ease:"power4.out"}, "-=1.6")
	.fromTo('.m-spe span', {y:"60%", autoAlpha:0}, {autoAlpha:1, y:"0%", duration:1.6, stagger: 0.08, ease:"power4.out"}, "-=1.6")
	.fromTo('.logo', {y:"60%", autoAlpha:0}, {autoAlpha:1, y:"0%", duration:1.6, ease:"power4.out"}, "-=2")
	.fromTo('nav a', {y:"60%", autoAlpha:0}, {autoAlpha:1, y:"0%", duration:1.6, stagger: 0.08, ease:"power4.out"}, "-=2")
	.fromTo('.project', {x:15, autoAlpha:0}, {autoAlpha:1, x:0, duration:1.6, stagger: 0.08, ease:"power4.out"}, "-=1.8")


}

indexLaunch()