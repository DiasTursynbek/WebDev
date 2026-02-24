import { Component } from '@angular/core';
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
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro 256GB Black Titanium',
      description: 'Titanium design with A17 Pro chip, 48MP camera system, and USB-C connectivity. Experience the most powerful iPhone ever with ProMotion display and Action button.',
      price: 692990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/h72/86790451593246.jpg',
      images: [
        'https://p.turbosquid.com/ts-thumb/iL/aNBpHu/yd/d12/jpg/1695948226/1920x1080/fit_q87/1f9d21e440efbaba03bcb34c0618398102468a12/d12.jpg',
        "https://media.cnn.com/api/v1/images/stellar/prod/iphone-15-pro-prod-card-v2-cnnu.jpg?c=16x9&q=h_720,w_1280,c_fill"


      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138191/?c=511010000'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 256GB Titanium Black',
      description: 'Revolutionary S Pen experience with Galaxy AI. Features a 200MP camera and 5000mAh battery for all-day performance. The ultimate Android flagship.',
      price: 565985,
      rating: 4.7,
      image: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/436/354/417/226/169/100066351025b0.jpg',
      images: [
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/436/354/417/226/169/100066351025b0.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=511010000'
    },
    {
      id: 3,
      name: 'Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
      description: 'Supercharged by M2 chip, fanless design with up to 18 hours battery life. Thin and light laptop with Liquid Retina display and MagSafe charging.',
      price: 429990,
      rating: 4.9,
      image: 'https://avatars.mds.yandex.net/i?id=9b7d307ccad9469726a406a2bf06d068_l-2418036-images-thumbs&n=13',
      images: [
        'https://avatars.mds.yandex.net/i?id=9b7d307ccad9469726a406a2bf06d068_l-2418036-images-thumbs&n=13'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=511010000'
    },
    {
      id: 4,
      name: 'Sony PlayStation 5 pro',
      description: 'Next-gen gaming console with ultra-high speed SSD, ray tracing, and 4K gaming. Includes DualSense controller with haptic feedback and adaptive triggers.',
      price: 444100,
      rating: 4.9,
      image: 'https://ir.ozone.ru/s3/multimedia-1-r/7219108503.jpg',
      images: [
        'https://ir.ozone.ru/s3/multimedia-1-r/7219108503.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-pro-130061486/?c=511010000'
    },
    {
      id: 5,
      name: 'Apple iPad Pro 11" M5 256GB Wi-Fi Black',
      description: 'Thinnest Apple product ever with the breakthrough M4 chip, Ultra Retina XDR OLED display, and Apple Pencil Pro support. Perfect for creative professionals.',
      price: 583990,
      rating: 4.8,
      image: 'https://avatars.mds.yandex.net/get-mpic/15069559/2a0000019b3682df8f8b23ac27b15c28b7ed/orig',
      images: [
        'https://avatars.mds.yandex.net/get-mpic/15069559/2a0000019b3682df8f8b23ac27b15c28b7ed/orig'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2025-wi-fi-11-djuim-12-gb-256-gb-chernyi-149101422/?c=511010000'
    },
    {
      id: 6,
      name: 'Телевизор Samsung QE55Q7FAAUXCE 140 sm Black',
      description: 'Quantum Dot technology delivers vibrant colors and deep contrast. 4K AI Upscaling, Object Tracking Sound, and Gaming Hub for the ultimate entertainment experience.',
      price: 369990,
      rating: 4.6,
      image: 'https://avatars.mds.yandex.net/i?id=8283bcc44c97e365612a1c26b21d930d_sr-12420972-images-thumbs&n=13',
      images: [
        'https://avatars.mds.yandex.net/i?id=8283bcc44c97e365612a1c26b21d930d_sr-12420972-images-thumbs&n=13'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-qe55q7faauxce-140-sm-chernyi-145494890/?c=511010000'
    },
    {
      id: 7,
      name: 'Наушники Apple AirPods Pro 3 White',
      description: 'Active Noise Cancellation up to 2x more powerful. Adaptive Audio seamlessly blends ANC and Transparency mode. Up to 30 hours total battery with case.',
      price: 129246,
      rating: 4.8,
      image: 'https://avatars.mds.yandex.net/i?id=737b1b744da9f0cdb74cb2fa8ae2b19e_l-5299366-images-thumbs&n=13',
      images: [
        'https://avatars.mds.yandex.net/i?id=737b1b744da9f0cdb74cb2fa8ae2b19e_l-5299366-images-thumbs&n=13'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-3-belyi-145554533/?c=511010000'
    },
    {
      id: 8,
      name: 'Dyson V15 Detect Absolute SV47 silver',
      description: 'Laser detects microscopic dust invisible to the naked eye. HEPA filtration captures 99.97% of particles. Up to 60 minutes runtime with intelligent power management.',
      price: 339296,
      rating: 4.7,
      image: 'https://cdn1.ozone.ru/s3/multimedia-v/c600/6378729427.jpg',
      images: [
        'https://cdn1.ozone.ru/s3/multimedia-v/c600/6378729427.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=511010000'
    },
    
  ];
}
