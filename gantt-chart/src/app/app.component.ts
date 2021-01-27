import { Component, OnInit } from '@angular/core';
import * as highcharts from 'highcharts/highcharts-gantt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  MS_PER_DAY = 1000 * 60 * 60 * 24;
  datanew: {
    name: string;
    start: number;
    end: number;
    completed: { amount: number; fill: string };
  }[];
  charts = highcharts;
  data: {
    name: string;
    start: string;
    end: string;
    completed: { amount: number; fill: string };
  }[];

  constructor() {}

  /**
   * format the start date for gantt chart
   * @param date start Date
   * @returns start date as a number
   */
  dateFormattingStartDate(date: string): number {
    const a = new Date(date);
    return Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  }

  /**
   * format the end date for gantt chart
   * @param date end date
   * @returns end date as a number
   */
  dateFormattingEndDate(date: string): number {
    const a = new Date(date);
    return Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()) + 80000000;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /**
   * creating the gantt chart using highcharts library
   * @returns void
   */
  createChart(): void {
    this.charts.ganttChart('container', {
      yAxis: {
        uniqueNames: false,
      },
      plotOptions: {
        gantt: {
          dataLabels: {
            enabled: false,
          },
        },
      },
      chart: {
        plotBackgroundColor: '#f5f5f5',
      },
      series: [
        {
          type: 'gantt',
          name: '',
          data: this.datanew || [],
        },
      ],
    });
  }
}
