import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  currentImageIndex = 0;
  showShareMenu = false;

  get currentImage(): string {
    return this.product.images[this.currentImageIndex];
  }

  get stars(): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < Math.round(this.product.rating));
  }

  ngOnInit(): void {}

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }

  prevImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  toggleShareMenu(): void {
    this.showShareMenu = !this.showShareMenu;
  }

  shareOnWhatsApp(): void {
    const url = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + this.product.link)}`;
    window.open(url, '_blank');
    this.showShareMenu = false;
  }

  shareOnTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
    this.showShareMenu = false;
  }
}
