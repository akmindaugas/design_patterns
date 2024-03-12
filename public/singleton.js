"use strict";
// Singletone turi buti pasiekiamas visoje aplikacijoje ir negali buti keiciamas
class Singleton {
    constructor() { }
    //   be "static nebutu galima kreiptis tiesiogiai i klase metoda"
    static getInstance() {
        // jeigu neegzistuoja, sukuriame nauja Singletone
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        // jeigu Singleton egzistuoja, ji is karto graziname
        return Singleton.instance;
    }
    logMessage() {
        console.log("message log");
    }
}
const logger = Singleton.getInstance();
const logger2 = Singleton.getInstance();
const logger3 = Singleton.getInstance();
// nebegalime sukurti naujo instance Singleton, kadangi mums reikalinga tik viena clase, prieinama visoje aplikacijoje. Padareme privatu konstruktoriu ir kuriant nauja instance mes klaida.
// const logger = new Singleton();
logger.logMessage();
