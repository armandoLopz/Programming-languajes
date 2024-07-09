import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterButtonComponent } from '../buttons/filter-button/filter-button.component';
import { ApiService } from '../service/api.service';
import { Result } from '../models/book.models';

@Component({
  selector: 'app-filter-interface',
  standalone: true,
  imports: [FilterButtonComponent, FormsModule],
  templateUrl: './filter-interface.component.html',
  styleUrl: './filter-interface.component.css'
})
export class FilterInterfaceComponent {
  
  birthYear: number = 0;
  deathYear: number = 0;

  dataBook: Result[] = []; 
  filteredData: Result[] = [];
  @Output() filteredDataEmitted : EventEmitter<Result[]>;

  constructor(private apiService: ApiService) { 

    this.filteredDataEmitted = new EventEmitter;
  }

  ngOnInit() {
    this.getData();
  }

  getData(){

    this.apiService.getData().subscribe(data => {

      this.dataBook = data.results;

    })
  }
  
  onFilterClicked() {
    
    this.filteredData = [];
    
    this.dataBook.filter(result => {

      if (result.authors[0].birth_year != null  && result.authors[0].death_year != null) {
        
        if (result.authors[0].birth_year >= this.birthYear &&  result.authors[0].death_year <= this.deathYear) {
          
          this.filteredData.push(result);
          
        }
      }
      
    });
    
    this.filteredDataEmitted.emit(this.filteredData);
  }
}
