import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  imageResult;
  constructor(private searchService: ImageService) { }

  ngOnInit() {
  }

  images(q: string){
    console.log(q)
    return this.searchService.getImage(q)
    .subscribe(data =>{
      console.log( data )
      this.imageResult = data;
      // console.log(this.imageResult)
    })
  }

}
