import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DataTablesModule } from "angular-datatables";
import { FilterInterfaceComponent } from './filter-interface/filter-interface.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, DataTablesModule, FilterInterfaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'programmingLenguajes';
}
