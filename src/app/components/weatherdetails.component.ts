import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from '../model/weather';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.css']
})
export class WeatherdetailsComponent implements OnInit, OnDestroy {

  OPENWEATHER_API_KEY = environment.openWeatherApiKey

  private city: string = "Singapore"
  private country?: string
  private imageUrl?: string
  params = new Subscription

  model = new Weather("Singapore", 0,0,0,"",0,0)

  constructor(private weatherSvc: WeatherService, private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnDestroy(): void {
      
  }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(
        (params) => {
          this.city = params['city']
        }
      )

      this.getWeatherFromApi(this.city)
  }

  getWeatherFromApi(city:string){
    this.weatherSvc.getWeather(city, this.OPENWEATHER_API_KEY)
      .then((result)=> {
        this.model = new Weather(
          city,
          result.main.temp,
          result.main.pressure,
          result.main.humidity,
          result.weather[0].description,
          result.wind.speed,
          result.wind.degree
        )
      }).catch((err)=>{
        console.log(err);
        this.router.navigate([''])
      })
  }

}
