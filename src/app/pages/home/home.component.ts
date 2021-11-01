import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (
    
    public service: InfoPageService
  ){ }
  
  ngOnInit(): void {
  }

}
