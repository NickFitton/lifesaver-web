import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifterHomeComponent } from './gifter-home.component';

describe('GifterHomeComponent', () => {
  let component: GifterHomeComponent;
  let fixture: ComponentFixture<GifterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
