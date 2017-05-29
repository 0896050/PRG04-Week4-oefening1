/// <reference path="tree.ts"/>
/// <reference path="gun.ts" />

class Chicken {
    
    private _div: HTMLElement;
    private x:number;
    private y:number;
    private width:number;
    private height:number;

    public get div(): HTMLElement {
		return this._div;
	}

    constructor(x:number, y:number, tree:Tree) {
        this._div = document.createElement("bird");
        tree.div.appendChild(this._div);
                
        this.x = x;
        this.y = y;
        this.width = 67;
        this.height = 110;
        
        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px)";

        this._div.addEventListener("click", (e: MouseEvent) => this.myGun(e));

        
        // maak hier een click listener
        // de click event handler moet een gun toevoegen
        // als de kip al een gun heeft, dan moet de fire() functie van de gun worden aangeroepen
    }

    private myGun(e: MouseEvent)
        {         
            let gun = new Gun(0, 0, this);
        }
}