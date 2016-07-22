interface IEngine {
  start(callback: (startStatus: boolean, engineType: string) => void): void;
  stop(callback: (startStatus: boolean, engineType: string) => void): void;
}

class Engine implements IEngine {
  constructor(public horsePower: number, public engineType: string) { }

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


class Auto {
  private _basePrice: number;
  private _engine: Engine;
  make: string;
  model: string;
  accessoryList: Accessory[];

  constructor(basePrice: number, engine: Engine, make: string, model: string) {
    this.engine = engine;
    this.basePrice = basePrice;
    this.make = make;
    this.model = model;
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

  get basePrice(): number {
    return this._basePrice
  }

  set basePrice(value: number) {
    if (value <= 0) throw "Price must be > 0";
    this._basePrice = value;
  }

  get engine(): Engine {
    return this._engine;
  }

  set engine(value: Engine) {
    if (value == undefined) throw "Please supply an engine.";
    this._engine = value;
  }
}

var myLaFerrariEngine = new Engine(789, "Tipo F140");
var myCar = new Auto(94000000, myLaFerrariEngine, "Ferrari", "LaFerrari");

console.log(`Total price for my car: ${myCar.calculateTotal()}`);