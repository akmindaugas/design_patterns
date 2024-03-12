class Computer {
  RAM: string = "";
  SSD: string = "128Gb";
  CPU: string = "";

  logStats() {
    console.log(`ram: ${this.RAM}', 'ssd: ${this.SSD}', 'cpu: ${this.CPU}`);
  }
}

class computerBuilder {
  private computer: Computer = new Computer();

  setRAM(RAM: string) {
    this.computer.RAM = RAM;
    // reikalinga returninti, kad butu galima naudoti kelis metodus is karto
    return this;
  }

  setSSD(SSD: string) {
    this.computer.SSD = SSD;
    return this;
  }

  setCPU(CPU: string) {
    this.computer.CPU = CPU;
    return this;
  }
  // taip pat privaloma eilute,
  build() {
    return this.computer;
  }
}

const computer = new computerBuilder()
  .setSSD("1T")
  .setRAM("2Gb")
  .setCPU("M3")
  .build();
