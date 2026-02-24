import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = [
    { id: 1, name: 'Смартфондар' },
    { id: 2, name: 'Ноутбуктер' },
    { id: 3, name: 'Ойын приставкалары' },
    { id: 4, name: 'Тұрмыстық техника' }
  ];

  selectedCategoryId: number | null = null;

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }
}