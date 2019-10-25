import { By } from '@angular/platform-browser';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));

  it('correct dateStart should be valid', () => {
    console.log(navigator.userAgent);
    const inputDateStart = fixture.debugElement.query(By.css('[formControlName=dateStart]')).nativeElement;
    inputDateStart.value = 'valid';
    inputDateStart.dispatchEvent(new Event('input'));
    inputDateStart.dispatchEvent(new Event('change')); // redundant event, can be removed
    fixture.detectChanges();
    expect(inputDateStart.classList.contains('ng-invalid')).toBeFalsy('dateStart should be valid');
  });

});
