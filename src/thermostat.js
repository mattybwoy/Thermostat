class Thermostat {

  constructor() {
    this.default = 20;
    this.temperature = this.default;
  }
  up() {
    this.temperature++;
    return this.temperature;
  }

  down() {
    this.temperature--;
    return this.temperature;
  }
}

