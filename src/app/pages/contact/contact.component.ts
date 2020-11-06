import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component'

@Component({
    selector: 'contact-page',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
  })

  export class ContactComponent implements OnInit {
    ngOnInit() {
      const outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.overflow = 'scroll'; // forcing scrollbar to appear
      //outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
      document.body.appendChild(outer);
    
      // Creating inner element and placing it in the container
      const inner = document.createElement('div');
      outer.appendChild(inner);
    
      // Calculating difference between container's full width and the child width
      const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
    
      // Removing temporary elements from the DOM
      outer.parentNode.removeChild(outer);
      
      var email = document.getElementById('email')
      email.style['padding-left'] = `${scrollbarWidth}px`;
    }
  };