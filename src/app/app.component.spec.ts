import { By } from '@angular/platform-browser';
import { TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

describe('AppComponent', () => {

  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));

  it('correct dateStart should be valid', () => {
    const inputDateStart = fixture.debugElement.query(By.css('[formControlName=dateStart]')).nativeElement;
    inputDateStart.value = '14.12.1996';
    inputDateStart.dispatchEvent(new Event('input'));
    inputDateStart.dispatchEvent(new Event('change')); // redundant event, can be removed
    fixture.detectChanges();
    expect(inputDateStart.classList.contains('ng-invalid')).toBeFalsy('dateStart should be valid');
  });

});
