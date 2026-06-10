import { Component, HostListener } from '@angular/core';
import { faInstagram, faSquareFacebook, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.layout.html',
  styleUrls: ['./main.layout.css'],
})
export class MainLayout {
  faInstagram = faInstagram;
  faCalendar = faCalendar;
  faFacebook = faSquareFacebook;
  faWhatsapp = faWhatsappSquare;

  isSticky = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 100;
  }
}
