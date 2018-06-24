import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggingService } from './../logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers: [LoggingService]
})
export class HomeComponent implements OnInit {
  // temBind = "ccc";
  // person = {
  //   name: "Henry",
  //   color: "yellow"
  // }
  @Input() person;
  @Output() onYell = new EventEmitter();

  constructor(private loggingService: LoggingService) { }
  logger() {
    this.loggingService.log();
  }
  ngOnInit() {
  }
  // clickMe() {
  //   alert("I like pizza")
  // }
  // fireYellEvent(){
  //   this.onYell.emit();
  // }

}
