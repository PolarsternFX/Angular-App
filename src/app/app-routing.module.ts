
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './pages/home/home.component';
import { PortfolioComponent} from './pages/portfolio/portfolio.component';
import { AboutComponent} from './pages/about/about.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
  imports: [RouterModule.forRoot (routes, {scrollPositionRestoration: 'enabled'})], /* Página desde Top */
  exports: [RouterModule]
})



export class AppRoutingModule { }
