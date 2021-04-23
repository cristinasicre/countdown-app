import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CountdownService } from 'src/app/services/countdown.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  providers: [CountdownService],
})
export class CountdownComponent implements OnInit {
  public seconds: string;

  constructor(public  _countdownService: CountdownService) {
    this.seconds = '0';
    this.initialiseCounter();
  }

  ngOnInit(): void {}

  public startCountdown() {
    this._countdownService.startCountdown().subscribe(
      (response) => {
        if (response.seconds != undefined) {
          this.seconds = response.seconds;
          this.showModal('success', 'The countdown starts!', '');
          
        } else {
          this.showModal(
            'error',
            'Houston, we have a problem!',
            'There has been a problem, please try again.'
          );
        }
      },
      (error) => {
        this.showModal('error', 'Error!', error.error.message);
      }
    );
  }

   getTimeRemaining() {
    this._countdownService.getTimeRemaining().subscribe(
      (response) => {
        if (response.seconds != undefined) {
          this.seconds = response.seconds; 
        } else {
          this.showModal(
            'error',
            'Houston, we have a problem!',
            'There has been a problem, please try again.'
          );
        }
      }
    );
  }

  initialiseCounter(){
   
    interval(1000).subscribe(x => this.getTimeRemaining());
 
  }

   showModal(type: string, title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: type == 'success' ? 'success' : 'error',
      confirmButtonText: 'Ok',
    });
  }
}
