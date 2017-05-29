/// <reference path="chicken.ts"/>
/// <reference path="tree.ts" />
/// <reference path="bullet.ts" />
/// <reference path="game.ts"/>

class Gun {
    
    private div: HTMLElement;
    private x:number;
    private y:number;
    private bullets:Array<Bullet>;
    private g:Game;

    constructor(x:number, y:number, chicken:Chicken) {
        this.div = document.createElement("gun");
        console.log(chicken);
        chicken.div.appendChild(this.div);

        this.x = 20;
        this.y = 40;
        
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";

        this.fire();
    }

    public fire():void {
        // de globale positie van de gun kan je uitrekenen met getBoundingRect
        let rect:ClientRect = this.div.getBoundingClientRect();      
        console.log("plaats een kogel op " + rect.left + " , " + rect.top);

        // maak hier een bullet en voeg die toe aan de bullets array van de game
        // ...

        this.bullets = new Array<Bullet>();
        this.bullets.push(new Bullet(rect.left, rect.top));
        
    }

}