var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Classes
 */
var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    /**
     * Implenetation of the interface
     */
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
/**
 * Base auto class
 */
var Auto = (function () {
    // options: IAutoOptions;
    function Auto(options) {
        // this.options = options; // As variant
        this.engine = options.engine;
        this.basePrice = options.basePrice;
        this.make = options.make;
        this.model = options.model;
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
        /**
         * Getters & Setters
         */
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
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck(options) {
        // MUST DO: Pass parameters to the Base Class constrcutor
        _super.call(this, options);
        this.bedLength = options.bedLength;
        this.fourByfour = options.fourByfour;
    }
    return Truck;
}(Auto));
/**
 * Samples
 */
var myLaFerrariEngine = new Engine(789, "Tipo F140");
;
var myCarOptions = {
    basePrice: 94000000,
    engine: myLaFerrariEngine,
    make: "Ferrari",
    model: "LaFerrari"
};
var myNewCar = new Auto(myCarOptions);
var myTruckEngine = new Engine(225, "Diesel");
;
var myTruckOptions = {
    basePrice: 3500000,
    engine: myTruckEngine,
    make: "Volvo",
    model: "D5 AT 5S Momentum",
    bedLength: 4950,
    fourByfour: true
};
var myNewTruck = new Truck(myTruckOptions);
console.log("Total price for my new car: " + myNewCar.calculateTotal());
// Logout our truck object
console.log("My truck:");
for (var prop in myNewTruck)
    console.log(prop + ": " + typeof prop + " value: " + myNewTruck[prop]);
//# sourceMappingURL=classes.js.map