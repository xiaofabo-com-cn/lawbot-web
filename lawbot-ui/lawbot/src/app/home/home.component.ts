import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  swiperIndex = 0;
  swiperConfig = {
    autoplay: true,
    pagination: true,
    centeredSlides: true,
    // autoHeight: true,
    // height: 1000,
  };
  projectRectList = [];
  $$productItem = null;
  constructor() {}

  ngOnInit() {
    this.$$productItem = document.querySelectorAll('.product-wrap .product-item')
  }

  onIndexChange(index) {}

  handleClick() {
    let item = this.$$productItem[this.swiperIndex]
    if(item) {
      window.scrollTo(0, item.offsetTop - 20)
    }
  }

}
