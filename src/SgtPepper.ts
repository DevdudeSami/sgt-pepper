class SgtPepper {
	public root: Box

	constructor(private id: string) {
		this.root = new Box(document.getElementById(this.id)!)
	}
}