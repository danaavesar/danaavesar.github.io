var tl = gsap.timeline({ paused: true });
const stagger = 1;
const ease = CustomEase.create(
  "custom",
  "M0,0 C0.272,0 0.234,1 0.5,1 0.792,1 0.744,0 1,0 "
);
//sequenced one-after-the-other
// tl.to(".box1", {duration: 2, x: 100}) //notice that there's no semicolon!
//   .to(".box2", {duration: 1, y: 200})
//   .to(".box3", {duration: 3, rotation: 360});

tl.to(".box", {
  y: -100,
  ease: ease,
  stagger: {
    amount: stagger
  }
});

const text = $(".text-cont");

text.on("mousemove", function (event) {
  	const rect = this.getBoundingClientRect();
  	const xPosition = event.clientX - rect.left;
  	const width = rect.width;
  	let mappedValue = xPosition / width;

  	// Ensure the mapped value is within the range of 0 to 1
 	 mappedValue = Math.min(1, Math.max(0, mappedValue));

  	tl.progress(mappedValue); console.log(mappedValue);
});