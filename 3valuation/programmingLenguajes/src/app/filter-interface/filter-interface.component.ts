import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterButtonComponent } from '../buttons/filter-button/filter-button.component';
import { ApiService } from '../service/api.service';
import { Book, Result } from '../models/book.models';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-filter-interface',
  standalone: true,
  imports: [FilterButtonComponent, FormsModule],
  templateUrl: './filter-interface.component.html',
  styleUrl: './filter-interface.component.css'
})
export class FilterInterfaceComponent {
  
  birthYear: string = '';
  deathYear: string = '';

  data: Result[] = []; 

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
    
  }

  getData(): Result[] | string {

    try {
      this.apiService.getData().subscribe(data => {
        return this.data = data.results;
      })
      
    } catch (error) {
     
      console.log(error);      
    }
    
    return "Hubo un error de conexion con la API";
  }
  
  onFilterClicked() {

    try {
      
      console.log('YEARS:', this.birthYear, 'birthYear2:', this.deathYear);
      console.log(typeof this.birthYear);
    } catch (error) {
      
      console.log(error);
      
    }
    
  }
}