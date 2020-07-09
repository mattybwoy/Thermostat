class Thermostat {

  constructor() {
    this.default = 20;
    this.temperature = this.default;
    this.minimumTemp = 10;
    this.powerSaver = true;
    this.maximumTemp = 25  
  };

  up() {
    if (this.powerSaver == false && this.maximumTemp <= this.temperature) {throw new Error("Maximum temperature exceeded!!");}
    else if (this.powerSaver == true && this.maximumTemp <= this.temperature) {throw new Error("Maximum temperature exceeded!");}
    this.temperature++;
    return this.temperature;
  };

  down() {
    if (this.minimumTemp >= this.temperature) {throw new Error("Minimum temperature exceeded");}
    this.temperature--;
    return this.temperature;
  };

  powerSaverOff() {
    this.maximumTemp = 32
    return this.powerSaver = false 
  };

  reset() {
    this.temperature = this.default;
  };
  
  currentUsage() {
    if (this.temperature < 18) {
      return 'low-usage';
    }
    else if (this.temperature >= 18 && this.temperature <= 25 ) { 
      return 'medium-usage';
    }
    else { 
      return 'high-usage';
    };
  }

}
