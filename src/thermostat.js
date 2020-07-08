class Thermostat {

  constructor() {
    this.default = 20;
    this.temperature = this.default;
    this.minimumTemp = 10;
    this.powerSaver = true ? this.maximumTemp = 25 : this.maximumTemp = 32
  };

  up() {
    if (this.powerSaver = false && this.maximumTemp < this.temperature) {throw new Error("Maximum temperature exceeded!!");}
    // if (this.powerSaverOff() && this.maximumTemp < this.temperature) {throw new Error("Maximum temperature exceeded!!");}
    else if (this.powerSaver = true && this.maximumTemp < this.temperature) {throw new Error("Maximum temperature exceeded!");}
    this.temperature++;
    return this.temperature;
  };

  down() {
    if (this.minimumTemp > this.temperature) {throw new Error("Minimum temperature exceeded");}
    this.temperature--;
    return this.temperature;
  };

  powerSaverOff() {
    return this.powerSaver = false
  }; 
}
