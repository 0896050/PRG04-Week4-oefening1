var Tree = (function () {
    function Tree(x, y) {
        this._div = document.createElement("tree");
        document.body.appendChild(this._div);
        this.speed = Math.random() * 4 + 1;
        this.width = 414;
        this.height = 86;
        this.x = x;
        this.y = y;
        this.chickens = new Array();
        for (var index = 0; index < 4; index++) {
            var i = Math.random();
            if (i >= 0 && i <= 0.75) {
                this.chickens.push(new Chicken(index * 100, -63, this));
            }
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
        if (this.x > window.innerWidth) {
            this.x = -450;
            for (var i_1 = 0; i_1 < this.chickens.length; i_1++) {
                this.div.removeChild(this.chickens[i_1].div);
            }
            this.chickens.splice(0, 4);
            console.log(this.chickens);
            for (var index = 0; index < 4; index++) {
                var i = Math.random();
                if (i >= 0 && i <= 0.75) {
                    this.chickens.push(new Chicken(index * 100, -63, this));
                }
            }
        }
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Tree;
}());
var Gun = (function () {
    function Gun(x, y, chicken) {
        this.div = document.createElement("gun");
        console.log(chicken);
        chicken.div.appendChild(this.div);
        this.x = 20;
        this.y = 40;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.fire();
    }
    Gun.prototype.fire = function () {
        var rect = this.div.getBoundingClientRect();
        console.log("plaats een kogel op " + rect.left + " , " + rect.top);
        this.bullets = new Array();
        this.bullets.push(new Bullet(rect.left, rect.top));
    };
    return Gun;
}());
var Chicken = (function () {
    function Chicken(x, y, tree) {
        var _this = this;
        this._div = document.createElement("bird");
        tree.div.appendChild(this._div);
        this.x = x;
        this.y = y;
        this.width = 67;
        this.height = 110;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this._div.addEventListener("click", function (e) { return _this.myGun(e); });
    }
    Object.defineProperty(Chicken.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    Chicken.prototype.myGun = function (e) {
        var gun = new Gun(0, 0, this);
    };
    return Chicken;
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
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map