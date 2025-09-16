import { Component, input, signal } from '@angular/core';
import type { OutputDataModel } from '../../core/models/output-data-model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.scss',
})
export class InvestmentResults {
  results = input<OutputDataModel[]>([]);
}
