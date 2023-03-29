import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { db } from '../db';
import { City } from '../model/city';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit{

  form!: FormGroup

  constructor(private fb: FormBuilder) {}

  newCity!: City
  newCityData = new Subject<City>

  ngOnInit(): void {
      this.form = this.createForm()
  }

  createForm() {
    return this.fb.group({
      country: this.fb.control<string>('', [Validators.required]),
      city: this.fb.control<string>('', [Validators.required]),
      imageUrl: this.fb.control<string>('', [Validators.required])  
      }
    )
  }

  // addCity() {
  //   this.newCity = this.form.value as City
  // }

  async addCity() {
    const cityData = this.form.value as City
    await db.cityList.add({
      country: cityData.country,
      city: cityData.city,
      imageUrl: cityData.imageUrl
    })
  }
}
