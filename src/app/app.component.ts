import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dotolist';
  selectedColor: string = 'transparent';
  constructor(public dialog: MatDialog) {}
  changeColor(color: string) {
    this.selectedColor = color;
  }
  openDialog(): void {
    // const dialogRef = this.dialog.open(PopUpComponent, {
    //   width: '500px',
    //   height:'500px'
    // }); 
    const dialogRef: MatDialogRef<PopUpComponent> = this.dialog.open(PopUpComponent,{
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      console.log(result);//returns undefined
      if(result){
        
      }
    });
  } 
}
