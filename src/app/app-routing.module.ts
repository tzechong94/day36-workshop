import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddcityComponent } from './components/addcity.component';
import { ListcityComponent } from './components/listcity.component';
import { WeatherdetailsComponent } from './components/weatherdetails.component';

const routes: Routes = [
  { path: '', component: ListcityComponent},
  { path: 'addcity', component: AddcityComponent },
  { path: 'weather/:city', component: WeatherdetailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
