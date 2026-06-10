import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationService, Destination, ItineraryDay } from 'src/app/services/destination/destination.service';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.page.html',
  styleUrls: ['./destination-detail.page.css'],
})
export class DestinationDetailPage implements OnInit {
  faPlaneDeparture = faPlaneDeparture;
  destination?: Destination;
  itinerary: ItineraryDay[] = [];

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService,
  ) {}

  ngOnInit(): void {
    const destinationId = this.route.snapshot.paramMap.get('id') ?? '';
    this.destination = this.destinationService.getDestinationById(destinationId);
    this.itinerary = this.destinationService.getItinerary(destinationId);
  }
}
