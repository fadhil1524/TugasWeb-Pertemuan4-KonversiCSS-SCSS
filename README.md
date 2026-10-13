# Konversi CSS ke SCSS — Landing Page Muhammad Fadhil

CSS inline di `index.html` dipecah menjadi SCSS modular (pola 7-1 versi ringkas).

## Struktur
```
scss/
├── abstracts/   _variables.scss  _mixins.scss
├── base/        _root.scss  _reset.scss
├── layout/      _header.scss  _footer.scss
├── components/  _buttons _card _chips _form _timeline _contact-list
├── pages/       _pages _beranda _tentang _kontak
└── style.scss   (titik masuk, hanya @use)
css/style.css    (hasil kompilasi)
js/main.js       (script dari index.html)
images/fadhil.jpg
```

## Fitur SCSS yang dipakai
- **Variables**: font, radius, shadow, breakpoint, warna titik jendela
- **Map + @each**: tema dark/light dibuat otomatis dari `$themes`
- **Mixins**: `flex`, `grid-cols`, `mono`, `circle`, `pill`, `focus-ring`, `mobile`, `theme-vars`
- **Nesting & `&`**: hover, `.is-active`, `::before`, `:nth-child`
- **@for**: warna 3 titik di titlebar
- **@use / partials**: tanpa `@import`

## Menjalankan
```bash
npm install
npm run sass         # kompilasi sekali
npm run sass:watch   # kompilasi otomatis saat file berubah
```
