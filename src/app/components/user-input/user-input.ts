import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Calculator } from '../../services/calculator/calculator';

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
  calculate = output();
  calculatorService = inject(Calculator);

  onSubmit() {
    const result = this.calculatorService.calculate(
      Number(this.initialInvestment()),
      Number(this.annualInvestment()),
      Number(this.expectedReturn()),
      Number(this.duration())
    );
    console.log(result);
  }
}
