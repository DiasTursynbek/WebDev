# Online Store — Kaspi.kz Products

Angular 17 application displaying a catalog of real products from kaspi.kz.

## Features

- ✅ 12 real kaspi.kz products with links
- ✅ Image gallery with thumbnails & prev/next navigation
- ✅ Star rating display
- ✅ Share via WhatsApp & Telegram
- ✅ Responsive CSS Grid layout (1–3 columns)
- ✅ Standalone components (Angular 17+)
- ✅ Strong TypeScript typing with Product interface

## Project Structure

```
src/
  app/
    models/
      product.model.ts          # Product interface
    components/
      product-list/             # Displays product grid
      product-card/             # Individual product card with gallery & share
    app.component.ts / html / css
    app.config.ts
    app.routes.ts
  main.ts
  index.html
  styles.css
```

## Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   ng serve
   ```

3. Open browser at `http://localhost:4200`

## Technologies

- Angular 17 (standalone components)
- TypeScript
- CSS Grid & Flexbox
- Angular directives: `*ngFor`, `*ngIf`
- Angular bindings: `[property]`, `(event)`, `{{ interpolation }}`
