import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true, //өз бетінші жұмыс жасау
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input({ required: true }) product!: Product;
  

  @Output() remove = new EventEmitter<number>();


  currentImageIndex: number = 0;


  get currentImage(): string {
    if (this.product && this.product.images && this.product.images.length > 0) {
      return this.product.images[this.currentImageIndex];
    }
    return '';
  }


  selectImage(index: number): void {
    this.currentImageIndex = index;
  }


  onLike(): void {
    this.product.likes++;
  }


  onRemove(): void {
    this.remove.emit(this.product.id);
  }
}