import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss'],
  imports: [IonTitle, BaseChartDirective],
  standalone: true,
})
export class LineGraphComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'line'> | undefined;
  @Input() title = '';
  @Input() chartData: number[] = [];
  @Input() labels: string[] = [];

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  public lineChartType = 'line' as const;

  public lineChartData: ChartData<'line'> = {
    labels: this.labels,
    datasets: [
      { data: [] },
    ],
  };
  constructor() { }

  ngOnInit() {
    this.setLineChartData();
  }

  private setLineChartData(): void {
    this.lineChartData = {
      labels: this.labels,
      datasets: [
        { data: this.chartData },
      ],
    };

  }



}
