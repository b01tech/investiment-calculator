import { Injectable } from '@angular/core';
import { type InputDataModel } from '../../core/models/input-data-model';
import { type OutputDataModel } from '../../core/models/output-data-model';

@Injectable({
  providedIn: 'root',
})
export class Calculator {
  calculate(data: InputDataModel) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    const annualData: OutputDataModel[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return annualData;
  }
}
