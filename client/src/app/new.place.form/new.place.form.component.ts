import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
// import { FileUploader } from "ng2-file-upload";



@Component({
  selector: 'app-new.place.form',
  templateUrl: './new.place.form.component.html',
  styleUrls: ['./new.place.form.component.css']
})
export class NewPlaceFormComponent {

  categories = [
    "Bares y restaurantes",
    "Centros educativos",
    "Centros deportivos",
    "Centros médicos",
    "Comercios",
    "Centros de ocio",
    "Mayores",
    "Otros"
  ];

  urls = [
    "bares-restaurantes",
    "centros-educativos",
    "centros-deportivos",
    "centros-medicos",
    "comercios",
    "centros-de-ocio",
    "mayores",
    "otros"
  ];

  // newPlace = {
  //   name: '',
  //   category: '',
  //   description: '',
  //   };


  place: any;
  url: any;
  feedback: string;

  constructor(public placeService: PlacesService) { }

  submit(name, description, url) {
    console.log("llamando")
    this.place = this.placeService.create({ name, description, url }).subscribe();
  
    };

 
    // submit() {
  //   this.uploader.onBuildItemForm = (item, form) => {
  //     form.append('name', this.newPlace.name);
  //     form.append('category', this.newPlace.category);
  //     form.append('description', this.newPlace.description);
  //   };

  //   this.uploader.uploadAll();
  // }


  ngOnInit() {
    // this.uploader.onSuccessItem = (item, response) => {
    //   this.feedback = JSON.parse(response).message;
    // };

    // this.uploader.onErrorItem = (item, response, status, headers) => {
    //   this.feedback = JSON.parse(response).message;
    // };
  }
}


