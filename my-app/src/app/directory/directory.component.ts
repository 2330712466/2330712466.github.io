import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from './../logging.service';
import { DataService } from './../data.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  // providers: [LoggingService]
  // providers: [Http]
})
export class DirectoryComponent implements OnInit {
  // person: string;
  // classes = {'blue':true,'red':false,'underline':false};
  // person = {
  //   name: "henRRy",
  // }
  people = [];
  constructor(private route: ActivatedRoute, private loggingService: LoggingService, private dataService: DataService) {
    // this.person = route.snapshot.params['person'];
  }
  logger() {
    this.loggingService.log();
  }
  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data) => this.people = data
    );
  }

}
