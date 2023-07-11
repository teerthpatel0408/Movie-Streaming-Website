import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { PremiumComponent } from './pages/premium/premium.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { OnsubscribeComponent } from './pages/onsubscribe/onsubscribe.component';
import { SportsComponent } from './pages/sports/sports.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'movie/:id',component:MovieDetailsComponent},
  {path:'premium',component:PremiumComponent},
  {path:'subscribe/:id',component:SubscribeComponent},
  {path:'onsubscribe',component:OnsubscribeComponent},
  {path:'sports',component:SportsComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
