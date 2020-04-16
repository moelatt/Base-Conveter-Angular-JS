import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  form;
  title = 'Base-Conveter-AngularJS';
  constructor(){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.form = new FormGroup({
      Binary : new FormControl(''),
      Decimal: new FormControl(''),
      Octal: new FormControl(''),
      Hexa: new FormControl(''),
    })
  }
  Binary_Change = function(new_value){
    if(new_value !== ''){
      this.form.patchValue({'Decimal' : parseInt(new_value, 2).toString(10)});
      this.form.patchValue({'Octal' : parseInt(new_value, 2).toString(8)});
      this.form.patchValue({'Hexa' : parseInt(new_value, 2).toString(16)})
    }
    else{
      this.form.patchValue({'Decimal': ''});
      this.form.patchValue({'Octal': ''});
      this.form.patchValue({'Hexa': ''})
    }
  }

  trigger = false;
  Decimal_Change = (input_value)=>{
    this.trigger = !this.trigger
    if(this.trigger){
      if(input_value !== ''){
        this.form.patchValue({Binary : parseInt(input_value, 10).toString(2)})
      }
      else{
        this.form.patchValue({Binary : ''});
      }
    }
    this.trigger = false;
  }
  octal_bol = false;
  Octal_Change(input_value){
    this.octal_bol = !this.octal_bol;
    if(this.octal_bol){
      if(input_value !== ''){
        this.form.patchValue({Decimal: parseInt(input_value, 8).toString(10)});
      }
      else{
        this.form.patchValue({Decimal: ''});
      }
    }
    this.octal_bol = false;
  }
  hexa_bol= false;
  Hexa_Change = function (input_value) {
    this.hexa_bol = !this.hexa_bol;
    if(this.hexa_bol){
      if(input_value !== ''){
        this.form.patchValue({Octal: parseInt(input_value, 16).toString(8)});
      }
      else{
        this.form.patchValue({Octal: ''});
      }
    }
  
    this.hexa_bol = false;
  }

}
