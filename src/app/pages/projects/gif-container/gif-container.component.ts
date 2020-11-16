import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'gif-container',
    templateUrl: './gif-container.component.html',
  })

  export class GifContainer {
    
    constructor(
      private activatedroute: ActivatedRoute
    ){}

    public gifUrl = '';
    public showSearch = true;

    public load = () => {
      this.showSearch = false
      this.gifUrl = this.activatedroute.queryParams['value']['url']
    }

    public back = () => {
      this.showSearch = true;
    }
  };