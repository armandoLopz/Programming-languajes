import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DataTablesModule } from "angular-datatables";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent,DataTablesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'programmingLenguajes';
}
