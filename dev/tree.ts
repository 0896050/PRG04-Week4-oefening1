/// <reference path="chicken.ts" />

class Tree {
    
    private _div: HTMLElement;
    private x:number;
    private y:number;
    private width:number;
    private height:number;
    private speed:number;
    private chickens:Array<Chicken>;

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
        this.chickens = new Array<Chicken>();
        
        for (var index = 0; index < 4; index++)
        {
           var i = Math.random();

            if (i >= 0 && i <= 0.75)
            {
            this.chickens.push(new Chicken(index * 100, -63, this));
            }
        }
    }
    
    public move():void {
        this.x += this.speed;

        if(this.x > window.innerWidth) 
        {
            this.x = -450;
            for(let i = 0; i < this.chickens.length; i++)
            {
                this.div.removeChild(this.chickens[i].div);
            }

            this.chickens.splice(0, 4);
            console.log(this.chickens);
            for (var index = 0; index < 4; index++)
            {
                var i = Math.random();

                if (i >= 0 && i <= 0.75)
                {
                    this.chickens.push(new Chicken(index * 100, -63, this));
                }
            }
        }

        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}