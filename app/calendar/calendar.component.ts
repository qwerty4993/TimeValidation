import { Component, OnInit } from "@angular/core";
import { CalendarModule } from "primeng/primeng";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html"
})
export class CalendarComponent implements OnInit {
  fromDate: Date;
  toDate: Date;
  fromDateMax: Date;
  toDateMax: Date;
  constructor() {}

  ngOnInit() {
    this.fromDateMax = new Date(Date.now() + 12096e5); // 2 weeks from now
    this.toDateMax = new Date(
      new Date().setFullYear(new Date().getFullYear() + 1)
    ); // one year from now
  }
  doSomething(event) {
    console.log(this.fromDate);
    this.toDateMax = new Date(
      new Date().setHours(this.fromDate.getHours() - 24)
    );
  }
}
