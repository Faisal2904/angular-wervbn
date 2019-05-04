import { Component,ElementRef,ViewChild } from '@angular/core';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  @ViewChild('f') formObj:NgForm;
  name = 'Angular';
  defaultQues='pet';
  answer='';
  genders=['male','female'];


  suggestaUserName(){
    console.log("in dghasgdasg");
    const suggestedUserName='superUser';

    //this.formObj.form.setValue({samae object as form object}) to set whole form value
    this.formObj.form.patchValue({ userData:{username:suggestedUserName}})  ;
      //to set part of form with value value

  }

  // onSubmit(formData:NgForm){

  //   console.log("form submitted",formData);
  // }

  onSubmit(){
    console.log(this.formObj.value.userData.username) //accessing the form values
    console.log(this.formObj.value.userData.email) //accessing the form values
    this.formObj.reset();

  }
}
