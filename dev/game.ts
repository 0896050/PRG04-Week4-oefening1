/// <reference path="chicken.ts"/>
/// <reference path="tree.ts" />
/// <reference path="bullet.ts" />

class Game {
    
    private trees:Array<Tree>;
 
    constructor() {
        this.trees = new Array<Tree>();
        
        // plaats trees in de array
        this.trees.push(new Tree(-420, 60));
        this.trees.push(new Tree(-420, 300));
        
        requestAnimationFrame(() => this.gameLoop());
    }
    
    private gameLoop(){
        // gebruik een for..of loop om de move functie van alle trees in de array aan te roepen
        for (let tree of this.trees)
        {
            tree.move();
        }
                
        requestAnimationFrame(() => this.gameLoop());
    }
} 



