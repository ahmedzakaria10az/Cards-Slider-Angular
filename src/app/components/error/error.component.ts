import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [RouterModule],
  standalone:true,
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

  constructor (private router:Router){}
MoveTo(){
  this.router.navigateByUrl('/')
}

}