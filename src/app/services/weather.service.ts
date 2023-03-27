import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../model/city';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  countries = [
    { country: 'Singapore', city: 'Singapore'},
    { country: 'United Kingdom', city: 'London'},
    { country: 'Malaysia', city: 'Kuala Lumpur'},
    { country: 'China', city: 'Beijing'},
    { country: 'India', city: 'New Delhi'},

  ]


  imageBasedCity = [
    { city: 'Singapore', imageUrl: 'https://travellersworldwide.com/wp-content/uploads/2022/07/shutterstock_610935047.jpg.webp'},
    { city: 'United Kingdom', imageUrl: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg'},
    { city: 'Malaysia', imageUrl: 'https://res.klook.com/image/upload/q_85/c_fill,w_750/v1596013079/blog/o2zrlskgigrutrdp89ga.jpg'},
    { city: 'China', imageUrl: 'https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop'},
    { city: 'India', imageUrl: 'https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200'},
  ]


  constructor(private httpClient: HttpClient) { }

  getWeather(city: string, apiKey: string): Promise<any> {
    const params = new HttpParams()
      .set("q", city)
      .set("appid", apiKey)

    return lastValueFrom(this.httpClient
        .get(environment.openWeatherApiUrl, { params })
    )
  }

  addCity(city: City) {
    this.countries.push({ 
      country: city.country,
      city: city.city
  })
    this.countries.sort((a,b) => (a.country > b.country)? 1: -1)
    this.imageBasedCity.push({city: city.city, imageUrl: city.imageUrl})
  }

  getCityUrl(city: string) {
    this.imageBasedCity.find(v => v.city == city)
    return
  }
}
