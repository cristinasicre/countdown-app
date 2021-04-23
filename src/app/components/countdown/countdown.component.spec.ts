import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountdownComponent } from './countdown.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('CountdownComponent', () => {
  let component: CountdownComponent;
  let fixture: ComponentFixture<CountdownComponent>;
  
  
  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ CountdownComponent ],
      imports:[ HttpClientModule], 
      providers:[HttpClientModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('#getObservableValue should return value from observable',
  //   (done: DoneFn) => {
  //   service.getTimeRemaining().subscribe(value => {
  //     expect(value).toBe('observable value');
  //     done();
  //   });
  // });

  


});
