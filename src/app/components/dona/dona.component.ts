import { Component, Input, OnInit } from "@angular/core";
import { ChartType } from "chart.js";
import { MultiDataSet, Label, Color } from "ng2-charts";

@Component({
  selector: "app-dona",
  templateUrl: "./dona.component.html",
  styles: [],
})
export class DonaComponent implements OnInit {
  @Input() titulo: string = "Sin titulo";

  // Doughnut
  @Input("label") doughnutChartLabels: Label[] = ["label1", "label2", "label2"];
  @Input("data") doughnutChartData: MultiDataSet = [[350, 450, 100]];
  public doughnutChartType: ChartType = "doughnut";
  public colors: Color[] = [
    { backgroundColor: ["#9e120e", "#ff5800", "#009fee"] },
  ];

  constructor() {}

  ngOnInit(): void {}

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
