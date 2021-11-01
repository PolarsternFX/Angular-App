import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor (
    
    public service: InfoPageService
  ){ }
  
  ngOnInit(): void {
  }

}
