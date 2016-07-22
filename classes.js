var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    Engine.prototype.start = function (callback) {
        var _this = this;
        setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    Engine.prototype.stop = function (callback) {
        var _this = this;
        setTimeout(function () {
            callback(false, _this.engineType);
        }, 1000);
    };
    return Engine;
}());
var Accessory = (function () {
    function Accessory(acessoryNumber, title) {
        this.acessoryNumber = acessoryNumber;
        this.title = title;
    }
    return Accessory;
}());
var Auto = (function () {
    function Auto(basePrice, engine, make, model) {
        this.engine = engine;
        this.basePrice = basePrice;
        this.make = make;
        this.model = model;
    }
    Auto.prototype.calculateTotal = function () {
        var taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice);
    };
    Auto.prototype.addAccesoires = function () {
        var acessoires = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            acessoires[_i - 0] = arguments[_i];
        }
        for (var _a = 0, acessoires_1 = acessoires; _a < acessoires_1.length; _a++) {
            var accessory = acessoires_1[_a];
            this.accessoryList = acessoires;
            console.log("Accessory: " + accessory.acessoryNumber + " - " + accessory.title);
        }
    };
    Auto.prototype.getAccesoryList = function () {
        return this.accessoryList;
    };
    Object.defineProperty(Auto.prototype, "basePrice", {
        get: function () {
            return this._basePrice;
        },
        set: function (value) {
            if (value <= 0)
                throw "Price must be > 0";
            this._basePrice = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw "Please supply an engine.";
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    return Auto;
}());
var myLaFerrariEngine = new Engine(789, "Tipo F140");
var myCar = new Auto(94000000, myLaFerrariEngine, "Ferrari", "LaFerrari");
console.log("Total price for my car: " + myCar.calculateTotal());
//# sourceMappingURL=classes.js.map