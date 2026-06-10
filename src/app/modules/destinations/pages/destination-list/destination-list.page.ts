import { Component, OnInit } from '@angular/core';
import { DestinationService, Destination } from 'src/app/services/destination/destination.service';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.page.html',
  styleUrls: ['./destination-list.page.css']
})
export class DestinationListPage implements OnInit {
  destinations: Destination[] = [];

  constructor(private destinationService: DestinationService) { }

  ngOnInit(): void {
    this.destinations = this.destinationService.getDestinations();
  }
}
