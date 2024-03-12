class DVDPlayer{
    start(){
        console.log('DVD player started');
    }

    insertDVD(){
        console.log("DVD inserted")
    }
}
class Projector{
    start(){
        console.log('Projector started');
    }

}

class SoundSystem{
    setVolume(){
        this.setVolume(volume: number);
        console.log(`volume id ${volume}`);
    }

}

class HomeTheatre{
    constructor(
        private dvdPlayer: DVDPlayer,
        private projector: Projector,
        private soundsystem: SoundSystem,
    ){

    }
    watchMovie(){
        this.dvdPlayer.insertDVD();
        this.dvdPlayer.start();
        this.projector.start();
        this.soundsystem.setVolume(35);
    }
}
const dvd = new DVDPlayer();
const projector = new Projector();
const soundsystem = new SoundSystem();

const homeTheater = new HomeTheatre(dvd, projector, soundsystem);

homeTheater.watchMovie();