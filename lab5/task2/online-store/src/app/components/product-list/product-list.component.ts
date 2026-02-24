import { Component, input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  categoryId = input.required<number>();


  allProducts = signal<Product[]>([

    {
      id: 1, categoryId: 1, name: 'Apple iPhone 15 Pro 128GB', price: 545000, rating: 4.9, likes: 0,
      description: 'Natural Titanium, A17 Pro chip, ProMotion display.',
      images: ['https://avatars.mds.yandex.net/i?id=3f8e1e9ac3e85da1b80468daf5e24a52_l-12325594-images-thumbs&n=13'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/?c=511010000'
    },
    {
      id: 2, categoryId: 1, name: 'Samsung Galaxy S24 Ultra 256GB', price: 515000, rating: 4.8, likes: 0,
      description: 'Titanium Gray, Galaxy AI, 200MP camera.',
      images: ['https://avatars.mds.yandex.net/i?id=6cb475bfd081d2791f4bf8b894ed1c96132f1124-12371092-images-thumbs&n=13'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-256-gb-seryi-116043556/'
    },
    {
      id: 3, categoryId: 1, name: 'Xiaomi Redmi Note 14 8 ГБ/256 ГБ', price: 395000, rating: 4.7, likes: 0,
      description: 'Black, Leica Optics, Snapdragon 8 Gen 3.',
      images: ['https://avatars.mds.yandex.net/get-mpic/5235295/2a000001955262367acc5b4d71b437a5e65b/9hq'],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-8-gb-256-gb-chernyi-133574875/?c=511010000'
    },
    {
      id: 4, categoryId: 1, name: 'Google Pixel 8 8/128GB', price: 310000, rating: 4.6, likes: 0,
      description: 'Obsidian, Google Tensor G3, Amazing camera.',
      images: ['https://avatars.mds.yandex.net/get-mpic/16922484/2a0000019a197f7b3a3dee349170b2427f07/orig'],
      link: 'https://kaspi.kz/shop/p/google-pixel-8-8-gb-128-gb-chernyi-113847844/'
    },
    {
      id: 5, categoryId: 1, name: 'iPhone 13 128GB Midnight', price: 285000, rating: 4.9, likes: 0,
      description: 'The most popular iPhone, A15 Bionic.',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/64378122240030.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-102298404/'
    },
  





    {
      id: 6, categoryId: 2, name: 'MacBook Air 13 M2 8/256GB', price: 475000, rating: 4.9, likes: 0,
      description: 'Space Gray, M2 chip, Liquid Retina display.',
      images: ['https://avatars.mds.yandex.net/get-mpic/1539743/2a00000191d82ffb22cf62df374dfd4c55ba/orig'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mly33-105933794/'
    },
    {
      id: 7, categoryId: 2, name: 'ASUS TUF Gaming F15', price: 385000, rating: 4.7, likes: 0,
      description: 'Core i5-11400H, RTX 3050, 16GB RAM.',
      images: ['https://avatars.mds.yandex.net/i?id=6237f978da69e8c445156d7013d090e1_l-13223322-images-thumbs&n=13'],
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-fx506hf-hn038-90nr0hb4-m003v0-chernyi-111195648/'
    },
    {
      id: 8, categoryId: 2, name: 'Lenovo IdeaPad 3 15ITL6', price: 185000, rating: 4.5, likes: 0,
      description: 'Pentium Gold 7505, 8GB RAM, 256GB SSD.',
      images: ['https://ir.ozone.ru/s3/multimedia-0/c600/6454345992.jpg'],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h801q7ru-seryi-105655513/'
    },
    {
      id: 9, categoryId: 2, name: 'MacBook Pro 14 M3 Pro', price: 1150000, rating: 5.0, likes: 0,
      description: 'Space Black, 18GB RAM, 512GB SSD.',
      images: ['https://ir.ozone.ru/s3/multimedia-1-y/c1000/8164717306.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114385182/'
    },
    {
      id: 10, categoryId: 2, name: 'Acer Aspire 3 A315', price: 165000, rating: 4.4, likes: 0,
      description: 'Ryzen 3 7320U, 8GB RAM, 256GB SSD.',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1b/hc1/80389304909854.jpg'],
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-a315-24p-nx-kdeer-008-serebristyi-110091370/'
    },
  






    {
      id: 11, categoryId: 3, name: 'Sony PlayStation 5 Slim', price: 245000, rating: 4.9, likes: 0,
      description: 'Digital Edition, 1TB SSD, 4K Gaming.',
      images: ['https://ir.ozone.ru/s3/multimedia-1-9/c500/7012875861.jpg'],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=511010000'
    },
    {
      id: 12, categoryId: 3, name: 'Xbox Series S 512GB', price: 155000, rating: 4.8, likes: 0,
      description: 'Next-gen performance in the smallest Xbox.',
      images: ['https://i.ebayimg.com/images/g/Yu0AAOSweHVnDyfu/s-l1600.jpg'],
      link: 'https://kaspi.kz/shop/p/xbox-series-s-512gb-belyi-120000274/?c=511010000'
    },
    {
      id: 13, categoryId: 3, name: 'Nintendo Switch OLED Neon', price: 165000, rating: 4.9, likes: 0,
      description: '7-inch OLED screen, 64GB storage.',
      images: ['https://itpremium-images.storage.yandexcloud.net/resize_cache/110650/8d98eab21f83652e055a2f8c91f3543a/iblock/440/440d521d010db195c8d717848187aebf/01aa26e87344e2d202cdaad90f1f662d.jpg'],
      link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-neon-blue-neon-red-102573216/'
    },
    {
      id: 14, categoryId: 3, name: 'Sony DualSense Edge', price: 115000, rating: 4.8, likes: 0,
      description: 'Pro controller for PS5, customizable.',
      images: ['https://avatars.mds.yandex.net/i?id=0b244aa9280fedf543abcc5234afd7773384b20d-12752373-images-thumbs&n=13'],
      link: 'https://kaspi.kz/shop/p/sony-dualsense-edge-belyi-108529285/'
    },
    {
      id: 15, categoryId: 3, name: 'Steam Deck 512GB OLED', price: 345000, rating: 4.9, likes: 0,
      description: 'Portable PC gaming on the go.',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h95/h17/84513728692254.jpg'],
      link: 'https://kaspi.kz/shop/p/valve-steam-deck-oled-512-gb-chernyi-114704576/'
    },
  
    // --- 4-санат: Тұрмыстық техника (categoryId: 4) ---
    {
      id: 16, categoryId: 4, name: 'Dyson Airwrap HS05', price: 255000, rating: 4.9, likes: 0,
      description: 'Multi-styler Complete Long, Blue/Copper.',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h27/h48/65134114406430.jpg'],
      link: 'https://kaspi.kz/shop/p/dyson-airwrap-multi-styler-complete-long-hs05-sinii-mednyi-105943803/'
    },
    {
      id: 17, categoryId: 4, name: 'Xiaomi Mi Smart Air Fryer', price: 35000, rating: 4.8, likes: 0,
      description: '3.5L, Healthy cooking with less oil.',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h9c/h26/64104257126430.jpg'],
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-smart-air-fryer-maf02-belyi-102148113/'
    },
    {
      id: 18, categoryId: 4, name: 'Dyson V15 Detect Absolute', price: 345000, rating: 4.9, likes: 0,
      description: 'Powerful cordless vacuum with laser.',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h14/h13/64467000197150.jpg'],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv22-serebristyi-101783091/'
    },
    {
      id: 19, categoryId: 4, name: 'LG F2V3GS6W Washer', price: 185000, rating: 4.7, likes: 0,
      description: '8.5kg capacity, AI DD technology.',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h42/h9c/64121404162078.jpg'],
      link: 'https://kaspi.kz/shop/p/lg-f2v3gs6w-belyi-100293026/'
    },
    {
      id: 20, categoryId: 4, name: 'Samsung Bespoke Fridge', price: 425000, rating: 4.8, likes: 0,
      description: 'Bottom Mount Freezer, Customizable design.',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h9e/h49/64383431671838.jpg'],
      link: 'https://kaspi.kz/shop/p/samsung-rb38a7b6212-wt-belyi-101897368/'
    }
  ]);



  filteredProducts = computed(() => {
    return this.allProducts()  
      .filter(p => p.categoryId === this.categoryId());
  });



  onRemoveProduct(productId: number) {
    this.allProducts.update(prods => 
      prods.filter(p => p.id !== productId));
  }
}