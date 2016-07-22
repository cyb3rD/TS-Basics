/**
 * Interfaces
 */
interface IEngine {
  start(callback: (startStatus: boolean, engineType: string) => void): void;
  stop(callback: (startStatus: boolean, engineType: string) => void): void;
}

interface IAutoOptions {
  basePrice: number;
  engine: IEngine;
  make: string;
  model: string;
  // optional fields
  state?: string;
  year?: number;
}

interface ITruckOptions extends IAutoOptions {
  bedLength: number;
  fourByfour: boolean;
}

/**
 * Classes
 */

class Engine implements IEngine {
  constructor(public horsePower: number, public engineType: string) { }
  /**
   * Implenetation of the interface 
   */
  start(callback: (startStatus: boolean, engineType: string) => void) {
    setTimeout(() => {
      callback(true, this.engineType);
    }, 1000);
  }

  stop(callback: (startStatus: boolean, engineType: string) => void) {
    setTimeout(() => {
      callback(false, this.engineType);
    }, 1000);
  }

}

class Accessory {
  constructor(public acessoryNumber: number, public title: string) { }
}

/**
 * Base auto class
 */

class Auto {
  private _basePrice: number;
  private _engine: IEngine;
  make: string;
  model: string;
  accessoryList: Accessory[];
  // options: IAutoOptions;

  constructor(options: IAutoOptions) {
    // this.options = options; // As variant
    this.engine = options.engine;
    this.basePrice = options.basePrice;
    this.make = options.make;
    this.model = options.model;
  }

  calculateTotal(): number {
    var taxRate = .08;
    return this.basePrice + (taxRate * this.basePrice);
  }

  addAccesoires(...acessoires: Accessory[]) {
    for (let accessory of acessoires) {
      this.accessoryList = acessoires;
      console.log(`Accessory: ${accessory.acessoryNumber} - ${accessory.title}`);
    }
  }

  getAccesoryList(): Accessory[] {
    return this.accessoryList;
  }
  /**
   * Getters & Setters
   */
  get basePrice(): number {
    return this._basePrice
  }

  set basePrice(value: number) {
    if (value <= 0) throw "Price must be > 0";
    this._basePrice = value;
  }

  get engine(): IEngine {
    return this._engine;
  }

  set engine(value: IEngine) {
    if (value == undefined) throw "Please supply an engine.";
    this._engine = value;
  }

}

class Truck extends Auto {
  bedLength: number;
  fourByfour: boolean;

  constructor(options: ITruckOptions) {
    // MUST DO: Pass parameters to the Base Class constrcutor
    super(options);
    this.bedLength = options.bedLength;
    this.fourByfour = options.fourByfour;
  }
}

/**
 * Samples
 */

var myLaFerrariEngine = new Engine(789, "Tipo F140");;
var myCarOptions = {
  basePrice: 94000000,
  engine: myLaFerrariEngine,
  make: "Ferrari",
  model: "LaFerrari"
};
var myNewCar = new Auto(myCarOptions);

var myTruckEngine = new Engine(225, "Diesel");;
var myTruckOptions = {
  basePrice: 3500000,
  engine: myTruckEngine,
  make: "Volvo",
  model: "D5 AT 5S Momentum",
  bedLength: 4950,
  fourByfour: true

};
var myNewTruck = new Truck(myTruckOptions);

console.log(`Total price for my new car: ${myNewCar.calculateTotal()}`);

// Logout our truck object
console.log("My truck:");
for (let prop in myNewTruck)
  console.log(prop + ": " + typeof prop + " value: " + myNewTruck[prop]);
