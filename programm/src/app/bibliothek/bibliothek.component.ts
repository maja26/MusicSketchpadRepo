import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { SoundFontPlayer, INoteSequence } from '@magenta/music/es6';
import * as mm from '@magenta/music/es6'
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bibliothek',
  templateUrl: './bibliothek.component.html',
  styleUrls: ['./bibliothek.component.scss']
})
export class BibliothekComponent implements OnInit {
  public melodies
  private sequence: INoteSequence
  private soundfont_player: SoundFontPlayer
  show: boolean;
  public imgWidth = 0
  //(<HTMLInputElement>document.getElementById("nomelody"));

  constructor(public router: Router, private httpService: HttpService, private data: DataService) {
    this.soundfont_player = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus');
  }

  ngOnInit() {
    this.httpService.findAllMelodies().subscribe((res) => { this.melodies = res; this.displayMelodies() })
    //this.show = true;
  }

  ngAfterViewInit(){
    let height = window.innerHeight
    console.log(height)
    
    let w = document.getElementById("melodyList").clientWidth
    console.log("w: ", w)
    this.imgWidth = (w-20)/5
    console.log(this.imgWidth)
  }

  displayMelodies() {
    console.log(this.melodies)
    if (this.melodies == null || this.melodies == 0) {
      this.show = true;
      //(<HTMLInputElement>document.getElementById("nomelody")).style.visibility='visible';
    } else {
      this.show = false;
      //(<HTMLInputElement>document.getElementById("nomelody")).style.visibility='hidden';
    }
  }

  playMelody(melody) {
    let players = []
    let index = 0
    melody.melody.forEach(track => {
      players.push(new SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus'))
      players[index].loadSamples(track)
      index++
    });
    for (let i = 0; i < melody.melody.length; i++) {
      players[i].start(melody.melody[i])
    }
  }

  openEditMode(melody) {
    this.data.edit = true
    this.data.editMelody = melody
    this.router.navigate(['/editMelody'])
  }

}


