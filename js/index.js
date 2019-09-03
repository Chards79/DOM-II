// Your code goes here
// 1.
const purpleLinks = document.querySelectorAll(".nav-link").forEach(item => {
	item.addEventListener("mouseover", () => {
		console.log(`click event for nav`);
		item.style.color = "purple";
	});
});

// 2.
const bigTitle = document.querySelector("h1");
bigTitle.addEventListener("mouseenter", () => {
	console.log(`h1 click event`);
	bigTitle.style.transform = "scale(6)";
	bigTitle.style.transition = "all 0.1s";
});

// 3.
const scaleDown = document.querySelector("h1");
scaleDown.addEventListener("mouseleave", () => {
	console.log(`h1 shrink`);
	scaleDown.style.transform = "scale(0.01)";
	scaleDown.style.transition = "all 2s";
});
