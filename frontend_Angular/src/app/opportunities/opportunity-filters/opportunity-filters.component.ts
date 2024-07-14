import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'opportunity-filters',
  templateUrl: './opportunity-filters.component.html',
  styleUrls: ['./opportunity-filters.component.css']
})
export class OpportunityFiltersComponent implements OnInit {

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>()

  searchItem: string = ''
  constructor() { }

  ngOnInit() {
  }

  onSearch(text: string){
    this.searchEvent.emit(text)
  }
}
