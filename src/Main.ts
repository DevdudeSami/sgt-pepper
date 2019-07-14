/// <reference path="SgtPepper.ts" />

window.onload = function() {
	let sgt = new SgtPepper("sgt")

	sgt.root = sgt.root
		.backgroundColour("red")
		.box(b => b.box())
		.box()

	sgt.root.render()
}