var Chicken = (function () {
    function Chicken(x, y, tree) {
        this._div = document.createElement("bird");
        tree.div.appendChild(this._div);
        this.x = x;
        this.y = y;
        this.width = 67;
        this.height = 110;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    Object.defineProperty(Chicken.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    return Chicken;
}());
var Tree = (function () {
    function Tree(x, y) {
        this._div = document.createElement("tree");
        document.body.appendChild(this._div);
        this.speed = Math.random() * 4 + 1;
        this.width = 414;
        this.height = 86;
        this.x = x;
        this.y = y;
        var chickens = new Array();
        for (var index = 0; index < 4; index++) {
            chickens.push(new Chicken(index * 100, -63, this));
        }
    }
    Object.defineProperty(Tree.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.move = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth)
            this.x = -450;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Tree;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.trees = new Array();
        this.trees.push(new Tree(-420, 60));
        this.trees.push(new Tree(-420, 300));
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.trees; _i < _a.length; _i++) {
            var tree = _a[_i];
            tree.move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
var Bullet = (function () {
    function Bullet(x, y) {
        this.width = 22;
        this.height = 22;
        this.div = document.createElement("bullet");
        document.body.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.xspeed = -1;
        this.yspeed = 1;
        this.move();
    }
    Bullet.prototype.move = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Bullet;
}());
var Gun = (function () {
    function Gun(chicken) {
        this.div = document.createElement("gun");
        chicken.div.appendChild(this.div);
        this.x = 20;
        this.y = 40;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.fire();
    }
    Gun.prototype.fire = function () {
        var rect = this.div.getBoundingClientRect();
        console.log("plaats een kogel op " + rect.left + " , " + rect.top);
    };
    return Gun;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map