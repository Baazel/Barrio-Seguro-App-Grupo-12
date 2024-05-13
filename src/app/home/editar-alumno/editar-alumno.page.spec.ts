import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarAlumnoPage } from './editar-alumno.page';

describe('EditarAlumnoPage', () => {
  let component: EditarAlumnoPage;
  let fixture: ComponentFixture<EditarAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
