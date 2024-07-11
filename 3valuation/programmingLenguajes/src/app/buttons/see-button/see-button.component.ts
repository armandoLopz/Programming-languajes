import { Component,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-see-button',
  templateUrl: './see-button.component.html',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  styleUrl: './see-button.component.css'
})
export class SeeButtonComponent {
  @Input() book: any;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(ViewDialogComponent, {
      data: this.book,
      height:'400px'
    });
  }

}



