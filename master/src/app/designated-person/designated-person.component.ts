import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-designated-person',
  templateUrl: './designated-person.component.html',
  styleUrls: ['./designated-person.component.css']
})
export class DesignatedPersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  errorMessage: string = "";

  createDesignatedPerson() {
    let designatedPerson = {
      error: "'NoneType' object has no attribute 'replace'"
    };
    this.errorMessage = designatedPerson.error;
  }

}