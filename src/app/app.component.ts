import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  title = 'cinemaDemo';
  constructor (public authService: AuthService,private router:Router) {}

  
    
  onLogout(){
    this.authService.logout();
  }

}
