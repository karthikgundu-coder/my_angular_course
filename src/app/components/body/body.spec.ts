import { ComponentFixture, TestBed } from '@angular/core/testing';

import { body } from './body';

describe('body', () => {
  let component: body;
  let fixture: ComponentFixture<body>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [body]
    })
    .compileComponents();

    fixture = TestBed.createComponent(body);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
