class Box {
	public children: Box[] = []
	protected properties: {[id: string]: string} = {}

	constructor(private el?: HTMLElement) {
	}

	render() {
		for(const child of this.children) {
			const childEl = document.createElement("div")
			this.el!.appendChild(childEl)
			child.el = childEl
			child.render()
		}
		
		if(this.el) {
			this.el.style.backgroundColor = this.properties["backgroundColor"]
		}
	}

	box(childInit?: (childBox: Box) => void) : Box {
		const b = new Box()
		const res = this.copy()
		res.children.push(b)
		if(childInit) childInit(b)
		return res
	}

	backgroundColour(c: string) : Box {
		const res = this.copy()
		res.properties["backgroundColor"] = c
		return res
	}

	private copy() : Box {
		const res = new Box(this.el)
		res.children = this.children
		res.properties = this.properties
		return res
	}
}