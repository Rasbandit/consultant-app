import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-fixed-expenses',
  templateUrl: './fixed-expenses.component.html',
  styleUrls: ['./fixed-expenses.component.css']
})
export class FixedExpensesComponent {

  expenseForm: FormGroup;

  checkboxes = ['Flight', 'Mileage', 'Rental' ]

  constructor(private formBuilder: FormBuilder) {
    // this.expenseForm = new FormGroup({
    //   // 'flight': new FormControl(default value, validator (this can be an array of validators), asynchronous validator ),
    //   // 'flight': new FormControl(200, Validators.required),
    //   // 'mileage': new FormControl('', Validators.required),
    //   // 'rental': new FormControl('', Validators.required),
    //   //to group things:
    //   userData: new FormGroup ({
    //     'flight': new FormControl(200, Validators.required),
    //     'mileage': new FormControl('', Validators.required),
    //   }),
    //
    //   'rental': new FormControl('', Validators.required),
    //   'checkbox': new FormControl(['flight']),
    //   'hobbies': new FormArray([
    //     new FormControl('Cooking', Validators.required)
    //   ])
    // });
//same as above, just using formbuilder
    this.expenseForm = formBuilder.group({
        'userData': formBuilder.group({
          'flight': [200, Validators.required],
          'mileage': ['', Validators.required],
        }),

        'rental': ['', Validators.required],
        'checkbox': ['flight'],
        'hobbies': formBuilder.array([
        ['Cooking', [Validators.required, this.exampleValidator], this.asyncExampleValidator]
        ])
      });

      // this.expenseForm.valueChanges.subscribe(
      //   (data: any) => console.log(data)
      // );
      // this.expenseForm.statusChanges.subscribe(
      //   (data: any) => console.log(data)
      // );
  }

  onAddHobby() {
    (<FormArray>this.expenseForm.controls['hobbies']).push(new FormControl('', [Validators.required, this.exampleValidator], this.asyncExampleValidator))
  }

  onSubmit() {
    console.log(this.expenseForm)
  }

  reset() {
    this.expenseForm.reset();
  }
exampleValidator(control: FormControl): {[s: string]: boolean} {
  if (control.value === 'Example') {
    return {example: true};
  }
  return null;
}

asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
  const promise = new Promise<any>(
    (resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Example') {
          resolve({'invalid': true});
        } else {
          resolve(null);
        }
      }, 1500);
    }
  );
  return promise;
}

  // for heavy lifting forms, use onInit() {}
  // myForm.find... is deprecated
  // use .controls['key']
}
