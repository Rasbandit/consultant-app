import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs/Rx';


import { ExpenseService } from './expense.service';

@Component({
  selector: 'app-fixed-expenses',
  templateUrl: './fixed-expenses.component.html',
  styleUrls: ['./fixed-expenses.component.css']
})
export class FixedExpensesComponent implements OnInit {

  expenseForm: FormGroup;



  constructor(private formBuilder: FormBuilder,
  private expenseService: ExpenseService) {
      // 'flight': new FormControl(default value, validator (this can be an array of validators), asynchronous validator ),

//same as above, just using formbuilder
    this.expenseForm = formBuilder.group({
        'flight': ['', Validators.required],
        'gas': ['', Validators.required],
        'rental': ['', Validators.required],
        'travel': '',
      });

      // this.expenseForm.valueChanges.subscribe(
      //   (data: any) => console.log(data)
      // );
      // this.expenseForm.statusChanges.subscribe(
      //   (data: any) => console.log(data)
      // );
  }

ngOnInit() {
  this.onFetch();
}

onFetch() {
  this.expenseService.fetchData();
}
// onSubmit() {
//   this.expenseService.updateExpense().subscribe(
//     data => console.log(data,
//     error => console.error(error))
//   );
// }

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
