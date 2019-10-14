// Your code goes here
// 1. mouseOver
const purpleLinks = document.querySelectorAll(".nav-link").forEach(item => {
	item.addEventListener("mouseover", () => {
		console.log(`click event for nav`);
		item.style.backgroundColor = "purple";
		item.style.color = "white";
	});
});

// 2. mouseEnter
const bigTitle = document.querySelector("h1");
bigTitle.addEventListener("mouseenter", () => {
	console.log(`h1 click event`);
	bigTitle.style.transform = "scale(6)";
	bigTitle.style.transition = "all 0.2s";
});

// 3. mouseLeave
const scaleDown = document.querySelector("h1");
scaleDown.addEventListener("mouseleave", () => {
	console.log(`h1 shrink`);
	scaleDown.style.transform = "scale(0.3)";
	scaleDown.style.transition = "all 2s";
});

// 4. resize
window.addEventListener("resize", () => {
	console.log(`resized the window`);
	const changeTitle = document.querySelector(".intro h2");
	changeTitle.textContent = "NO YELLING ON THE FUN BUS!!!!!";
});

// 5. click
const helicopter = document.querySelectorAll("img").forEach(item => {
	item.addEventListener("click", () => {
		console.log(`new pics`);
		item.src =
			"https://images.unsplash.com/photo-1562361756-ef50fb3d0b2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
		item.alt = "The Fun Chopper";
	});
});

// 6. wheel
function zoom(event) {
	event.preventDefault();

	scale += event.deltaY * -0.01;

	// Restrict scale
	scale = Math.min(Math.max(0.125, scale), 4);

	// Apply scale transform
	el.style.transform = `scale(${scale})`;
	el.style.color = "purple";
	console.log(`click wheel`);
}

let scale = 1;
const el = document.querySelector(".intro p");
el.onwheel = zoom;

// 7. doubleClick
const double = document.querySelector("footer p");
double.addEventListener("dblclick", () => {
	double.style.transform = "scale(4)";
	double.style.transition = "all 0.2s";
	double.textContent = "Get To Da Fun CHOPPAAAA!!!!";
	console.log(`double clicked it`);
});

// 8. contextMenu
const noRightClick = document.querySelector(".content-destination");
noRightClick.addEventListener("contextmenu", e => {
	console.log(`no right click here`);
	e.preventDefault();
});

// 9. scroll
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
	console.log(`scrolling`);
}

window.addEventListener("scroll", function(e) {
	last_known_scroll_position = window.scrollY;

	if (!ticking) {
		window.requestAnimationFrame(function() {
			doSomething(last_known_scroll_position);
			ticking = false;
		});

		ticking = true;
	}
});

// 10. mouseOut
const btnChange = document.querySelectorAll(".btn").forEach(item => {
	item.addEventListener("mouseout", function(event) {
		console.log(`mousing out`);
		event.target.style.backgroundColor = "purple";
	});
});

// 11. stop propagation
const buttons = document.querySelectorAll(".btn");
const sec = document.querySelector(".content-pick");

function clickEvent(event) {
	event.stopPropagation();
	alert("a button was clicked");
}
function stopEvent() {
	alert("propagation stopped");
}

buttons.forEach(btn => {
	btn.addEventListener("click", clickEvent);
});

sec.addEventListener("click", stopEvent);
