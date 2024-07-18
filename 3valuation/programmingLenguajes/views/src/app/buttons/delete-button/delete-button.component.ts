
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-button',
  template: `<button mat-button (click)="onDelete()">Eliminar</button>`,
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  styleUrl: './delete-button.component.css'
})
export class DeleteButtonComponent {
  @Input() index!: number;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.index);
  }
}
