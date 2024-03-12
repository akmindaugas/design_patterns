"use strict";
class DVDPlayer {
    start() {
        console.log('DVD player started');
    }
    insertDVD() {
        console.log("DVD inserted");
    }
}
class Projector {
    start() {
        console.log('Projector started');
    }
}
class SoundSystem {
    setVolume() {
        this.setVolume(volume, number);
        console.log(`volume id ${volume}`);
    }
}
class HomeTheatre {
    constructor(dvdPlayer, projector, soundsystem) {
        this.dvdPlayer = dvdPlayer;
        this.projector = projector;
        this.soundsystem = soundsystem;
    }
    watchMovie() {
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
