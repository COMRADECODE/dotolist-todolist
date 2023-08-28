import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  textAreaValue: any;
  constructor(private dialogRef: MatDialogRef<PopUpComponent>) {}

  ngOnInit(): void {
  }

  onSave(){
    console.log("Value saved",this.textAreaValue);
    let dataToExport = this.textAreaValue;
    this.dialogRef.close(dataToExport); 
  }

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without sending any result
  
}
}