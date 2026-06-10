import { Component, Input, OnInit } from '@angular/core';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  faArrowCircleLeft = faArrowCircleLeft;
  faArrowCircleRight = faArrowCircleRight;


  @Input( ) images: carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 4000; //Default to 3s

  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide) {
      this.autoSlideImages();
    }
  }

  //Changes slide in every 3s
  autoSlideImages(): void {
    setInterval(() =>{
      this.onNextClick();
    }, this.slideInterval);
  }

  //sets index of image on dot/indicator click
  selectedImage(index: number): void{
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length -1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void{
    if(this.selectedIndex === this.images.length -1) {
      this.selectedIndex =0;
    }else{
      this.selectedIndex++;
    }
  }
}
