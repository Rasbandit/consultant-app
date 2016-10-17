import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Expense } from './expense';

@Injectable()
export class ExpenseService {
expensesChanged = new EventEmitter<Expense[]>();

private expenses: Expense[] = [];

  constructor(private http: Http) { }

  updateExpense() {
    const body = JSON.stringify(this.expenses);
    const headers = new Headers ({
      'Content-Type': 'application/json'
    })
    this.http.put("https://maxfieldgroup-87132.firebaseio.com/expenses.json", body, {headers: headers});
  }

  fetchData() {
    return this.http.get("https://maxfieldgroup-87132.firebaseio.com/expenses.json")
      .map((response: Response) => response.json())
      .subscribe(
        (data: Expense[]) => {
          this.expenses = data;
          this.expensesChanged.emit(this.expenses);
        }
      );
  }

}
