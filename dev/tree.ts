/// <reference path="chicken.ts" />

class Tree {
    
    private _div: HTMLElement;
    private x:number;
    private y:number;
    private width:number;
    private height:number;
    private speed:number;

    public get div(): HTMLElement {
		return this._div;
	}

    constructor(x:number, y:number) {
        this._div = document.createElement("tree");
        document.body.appendChild(this._div);
        
        this.speed = Math.random() * 4 + 1;
        this.width = 414;
        this.height = 86;
        this.x = x;
        this.y = y;

        // dit vlot heeft kippen nodig
        let chickens : Array<Chicken> = new Array();

        for (var index = 0; index < 4; index++)
        {
            chickens.push(new Chicken(index * 100, -63, this));
        }
    }
    
    public move():void {
        this.x += this.speed;
        if(this.x > window.innerWidth) this.x = -450;
        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}