import { Injectable } from '@angular/core';

export interface Destination {
  id: string;
  title: string;
  type: string;
  duration: string;
  priceFrom: string;
  img: string;
  description: string;
  bookUrl?: string;
}

export interface ItineraryDay {
  number: number;
  title: string;
  description: string;
}

interface Itinerary {
  destinationId: string;
  days: ItineraryDay[];
}

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  private destinations: Destination[] = [
    {
      id: '1',
      title: 'Costa Rica — Volcano & Pacific',
      type: 'Family',
      duration: '8 nights',
      priceFrom: 'from $6,900',
      img: 'assets/img/destinations/poas.png',
      description:
        'A journey of two halves: misty volcano mornings and private hot springs in the rainforest, then turquoise water and white sand on the Papagayo coast. Designed for families who want adventure by day and effortless luxury by night. Stays: Nayara Tented Camp (Arenal) and Four Seasons Península Papagayo.',
    },
    {
      id: '2',
      title: 'Santorini Privé',
      type: 'Couples',
      duration: '6 nights',
      priceFrom: 'from $5,200',
      img: 'assets/img/destinations/santorini.jpg',
      description:
        'Whitewashed villas perched over the caldera, private sunset cruises, and candlelit dinners above the Aegean. A refined escape for couples who want romance with nothing left to chance. Stay: a caldera-view villa with a private infinity pool.',
    },
    {
      id: '3',
      title: 'Maldives — Private Atoll',
      type: 'Honeymoon',
      duration: '7 nights',
      priceFrom: 'from $9,800',
      img: 'assets/img/destinations/maldives.jpg',
      description:
        'Your own overwater villa above a turquoise lagoon, a floating breakfast, a sandbank dinner under the stars, and a spa suspended over the reef. The ultimate honeymoon, where the only schedule is the tide.',
    },
  ];

  private itineraries: Itinerary[] = [
    {
      destinationId: '1',
      days: [
        {
          number: 1,
          title: 'Arrival at Arenal',
          description:
            'Private transfer from San José; check in to a rainforest tented suite; evening soak in natural hot springs.',
        },
        {
          number: 2,
          title: 'The Volcano',
          description:
            'Guided hanging-bridges walk through the canopy with a private naturalist; sloth and toucan spotting.',
        },
        {
          number: 3,
          title: 'Waterfalls & Wildlife',
          description:
            'La Fortuna waterfall, a chocolate-farm visit, and a gentle family rafting float.',
        },
        {
          number: 4,
          title: 'To the Pacific',
          description:
            'Scenic transfer to Península Papagayo; check in to your beachfront resort.',
        },
        {
          number: 5,
          title: 'Sea & Spa',
          description:
            'Free morning on the beach; an afternoon family spa ritual.',
        },
        {
          number: 6,
          title: 'Private Catamaran',
          description:
            'Sunset sail with snorkeling, dolphins, and dinner on board.',
        },
        {
          number: 7,
          title: 'Choose Your Adventure',
          description:
            'Zipline canopy tour or a guided kayak through the mangroves.',
        },
        {
          number: 8,
          title: 'Departure',
          description:
            'Leisurely breakfast and a private transfer to the airport.',
        },
      ],
    },
    {
      destinationId: '2',
      days: [
        {
          number: 1,
          title: 'Arrival in Santorini',
          description:
            'Private transfer to your caldera-view villa; welcome wine and a slow first sunset.',
        },
        {
          number: 2,
          title: 'Oia & the Caldera',
          description:
            'Private walking tour of Oia’s blue domes; the famous sunset from a reserved terrace.',
        },
        {
          number: 3,
          title: 'Private Sunset Cruise',
          description:
            'Catamaran along the volcanic coast with swimming at the hot springs and dinner aboard.',
        },
        {
          number: 4,
          title: 'Wine Country',
          description:
            'Tasting at cliffside Assyrtiko vineyards; a long lunch with sea views.',
        },
        {
          number: 5,
          title: 'At Leisure',
          description:
            'A free day for the villa pool, a couples spa treatment, or a hidden beach.',
        },
        {
          number: 6,
          title: 'Departure',
          description:
            'Breakfast on the terrace and a private transfer to the airport.',
        },
      ],
    },
    {
      destinationId: '3',
      days: [
        {
          number: 1,
          title: 'Seaplane to the Atoll',
          description:
            'Scenic seaplane flight to your private island; a champagne welcome at your overwater villa.',
        },
        {
          number: 2,
          title: 'Floating Breakfast',
          description:
            'Breakfast served in your pool, then a lazy day on your private deck above the lagoon.',
        },
        {
          number: 3,
          title: 'Reef & Marine Life',
          description:
            'Guided snorkeling with reef sharks and turtles; a private marine-biologist briefing.',
        },
        {
          number: 4,
          title: 'Overwater Spa',
          description: 'A couples ritual in a spa suspended above the reef.',
        },
        {
          number: 5,
          title: 'Sandbank Picnic',
          description:
            'A private speedboat to a deserted sandbank for a champagne picnic.',
        },
        {
          number: 6,
          title: 'Dinner Under the Stars',
          description: 'A barefoot dinner on the beach, just the two of you.',
        },
        {
          number: 7,
          title: 'Departure',
          description: 'A final swim, then your seaplane back to Malé.',
        },
      ],
    },
  ];

  constructor() {}

  getDestinations(): Destination[] {
    return this.destinations;
  }

  getDestinationById(id: string): Destination | undefined {
    return this.destinations.find((destination) => destination.id === id);
  }

  getItinerary(destinationId: string): ItineraryDay[] {
    const data = this.itineraries.find(
      (i) => i.destinationId === destinationId,
    );
    return data ? data.days : [];
  }
}
