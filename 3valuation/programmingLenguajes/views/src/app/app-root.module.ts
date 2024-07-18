import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { SeeButtonComponent} from './buttons/see-button/see-button.component';
import { ViewDialogComponent } from './buttons/see-button/view-dialog/view-dialog.component';
import { DowloandButtonComponent } from './buttons/dowloand-button/dowloand-button.component';

@NgModule({
  declarations: [
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    TableComponent ,
    DowloandButtonComponent,
    SeeButtonComponent,
    AppComponent,
    ViewDialogComponent,

  ],
  providers: [],
 

})
export class AppModule { }
