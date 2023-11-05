import { Component } from '@angular/core';
import { szablonZadan } from './szablonZadan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  aktywnosc1 = false
  kategoria = ''
  zadania:szablonZadan[]=[]
  showAndHide(){
    this.aktywnosc1 = !this.aktywnosc1
    this.trescZadania = ''
  }
  trescZadania = ''
  kat:string[] = ['Work', 'House', 'Hobby', 'Learning']
  usunWszystkie(){
    this.zadania = []
  }
  dodaj(){
    let noweZadanie:szablonZadan= {
      zadanie: this.trescZadania,
      kategoria: this.kategoria,
      priorytet: 0,
      zrobione: false
    }
    this.zadania.push(noweZadanie)
  }
  zmienPriorytet(z:szablonZadan, liczba:number){
    z.priorytet += liczba
  }
  sortowanie(z:szablonZadan){
    this.zadania.sort((x,y) => x.priorytet-y.priorytet)
  }
  skresl(x:szablonZadan){
    x.zrobione = !x.zrobione
  }
  usun(x:szablonZadan){
    this.zadania = this.zadania.filter((y)=> y!=x)
  }
}
