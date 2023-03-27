import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { City } from '../model/city';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-listcity',
  templateUrl: './listcity.component.html',
  styleUrls: ['./listcity.component.css']
})
export class ListcityComponent implements OnInit, OnChanges {

  cities: any
  constructor(private weatherSvc: WeatherService){}

  @Input()
  newCity!: City

  ngOnInit(): void {
      this.cities = this.weatherSvc.countries
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes['newCity'].currentValue != changes['newCity'].previousValue) {
      this.newCity = changes['newCity'].currentValue
      this.weatherSvc.addCity(this.newCity)
    }
  }
}
