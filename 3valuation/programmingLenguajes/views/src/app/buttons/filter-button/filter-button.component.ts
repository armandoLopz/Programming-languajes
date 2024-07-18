import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  standalone: true,
  imports: [],
  templateUrl: './filter-button.component.html',
  styleUrl: './filter-button.component.css'
})
export class FilterButtonComponent {

@Output() filterClicked = new EventEmitter<void>();

onClick() {
  this.filterClicked.emit();
}
  
}
