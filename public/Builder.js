"use strict";
class Computer {
    constructor() {
        this.RAM = "";
        this.SSD = "128Gb";
        this.CPU = "";
    }
    logStats() {
        console.log(`ram: ${this.RAM}', 'ssd: ${this.SSD}', 'cpu: ${this.CPU}`);
    }
}
class computerBuilder {
    constructor() {
        this.computer = new Computer();
    }
    setRAM(RAM) {
        this.computer.RAM = RAM;
        // reikalinga returninti, kad butu galima naudoti kelis metodus is karto
        return this;
    }
    setSSD(SSD) {
        this.computer.SSD = SSD;
        return this;
    }
    setCPU(CPU) {
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
