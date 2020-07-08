class Thermostat {

  constructor() {
    this.default = 20;
    this.temperature = this.default;
    this.minimumTemp = 10;
  }
  up() {
    this.temperature++;
    return this.temperature;
  }

  down() {
    if (this.minimumTemp > this.temperature) {throw new Error("Minimum temperature exceeded");}
    this.temperature--;
    return this.temperature;
  }
}
