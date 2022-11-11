import { Component, OnInit } from '@angular/core';
import { Timezone } from 'src/app/model/timezone';
import { TimezoneService } from 'src/app/services/timezone.service';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {

  timezone = '';
  datatime?: Timezone;

  constructor(private timezoneService: TimezoneService) { }

  ngOnInit(): void {
  }

  consultarHora(){
  this.timezoneService.obterHora(`America/${this.timezone}`).subscribe(datatime => {
      this.datatime = datatime;
    });
  }

}
