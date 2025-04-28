import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeService } from '../../services/cafe.service';

@Component({
  selector: 'app-cafe-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  cafes: any[] = [];
  totalOrigen: number = 0;
  totalBlend: number = 0;
  contarTipos() {
    this.totalOrigen = this.cafes.filter(cafe => cafe.tipo.toLowerCase() === 'origen').length;
    this.totalBlend = this.cafes.filter(cafe => cafe.tipo.toLowerCase() === 'blend').length;
  }

  constructor(private cafeService: CafeService) {}

  ngOnInit() {
    this.cafeService.getCafes().subscribe(data => {
      this.cafes = data;
      this.contarTipos();
    });
  }
}
