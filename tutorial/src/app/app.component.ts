import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allData: any;
  title = '';
  errormessage = '';

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.getReq().subscribe((data: any) => {
      this.allData = data;
    });
  }

  onAdd() {
    if (this.title != '') {
      this.service.postReq({ 'title': this.title }).subscribe((data: any) => {
        if (data.message == 'Success') {
          this.title = '';
          this.errormessage = '';
          this.ngOnInit();
        }
      });
    } else {
      this.errormessage = 'Enter the title'
    }
  }
}
