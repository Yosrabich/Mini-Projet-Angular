import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherUniversiteComponent } from './afficher-universite.component';

describe('AfficherUniversiteComponent', () => {
  let component: AfficherUniversiteComponent;
  let fixture: ComponentFixture<AfficherUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherUniversiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
