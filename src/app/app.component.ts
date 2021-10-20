import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mybank';

  extrato: any[];

  transferir($event: any){
    this.extrato.push($event);
  }
}
