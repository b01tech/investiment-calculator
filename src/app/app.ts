import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { UserInput } from './components/user-input/user-input';
import { type OutputDataModel } from './core/models/output-data-model';
import { InvestmentResults } from './components/investment-results/investment-results';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserInput, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('investment-calculator');
  protected readonly results = signal<OutputDataModel[]>([]);
  protected handleCalculate(data: OutputDataModel[]) {
    this.results.set(data);
  }
}
