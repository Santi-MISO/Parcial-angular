import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeListComponent } from './cafe-list.component';
import { provideHttpClient} from '@angular/common/http';
import { Cafe } from '../../models/cafe.model';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeListComponent],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Simular 3 cafés
    component.cafes = [
      new Cafe(1, 'Café 1', 'origen', 'región 1', 'sabor 1',100, 'imagen 1'),
      new Cafe(2, 'Café 2', 'blend', 'región 2', 'sabor 2', 200, 'imagen 2'),
      new Cafe(3, 'Café 3', 'origen', 'región 3', 'sabor 3', 300, 'imagen 3')
    ];

    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería crear una tabla con 3 filas de datos', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const rows = compiled.querySelectorAll('tbody tr');

    expect(rows.length).toBe(3);
  });
});