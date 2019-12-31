import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ivybug';



  public handleMouseDownInner(event: Event): void {
    console.log("inner");
    event.stopPropagation();
  }

  public handleMouseDownOuter(event: Event): void {
    console.log("outer");
  }
}
