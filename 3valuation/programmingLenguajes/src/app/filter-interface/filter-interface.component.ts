import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterButtonComponent } from '../buttons/filter-button/filter-button.component';

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
  onFilterClicked() {
    
    console.log('YEARS:', this.birthYear, 'birthYear2:', this.deathYear);
    
  }
}
