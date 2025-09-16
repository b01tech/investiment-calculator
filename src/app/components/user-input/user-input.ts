import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Calculator } from '../../services/calculator/calculator';
import { type OutputDataModel } from '../../core/models/output-data-model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.scss',
})
export class UserInput {
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');
  calculate = output<OutputDataModel[]>();
  calculatorService = inject(Calculator);

  onSubmit() {
    const result = this.calculatorService.calculate({
      initialInvestment: Number(this.initialInvestment()),
      annualInvestment: Number(this.annualInvestment()),
      expectedReturn: Number(this.expectedReturn()),
      duration: Number(this.duration()),
    });
    this.calculate.emit(result);
    console.log(result);
    this.resetForm();
  }
  private resetForm() {
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
