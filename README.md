# Web Comic - Modern Web Comic Platform

Bu proje, modern web teknolojileri kullanılarak yeniden inşa edilmiş bir web çizgi roman platformudur. Türkçe içerikle hazırlanmış, responsive tasarım ve gelişmiş kullanıcı deneyimi sunar.

## 🚀 Özellikler

### Ana Sayfa (index.html)
- **Modern Parallax Efekti**: Kaydırma sırasında katmanlı görsel efektler
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Smooth Animasyonlar**: CSS ve JavaScript ile akıcı geçişler
- **Loading Screen**: Şık yükleme ekranı
- **Modern Navigation**: Sabit navigasyon çubuğu
- **Intersection Observer**: Performanslı scroll animasyonları

### Bölüm Sayfası (1.bölüm.html)
- **Fullscreen Modu**: Görseli tam ekran görüntüleme
- **Ses Kontrolü**: Ses açma/kapama özelliği
- **Paylaşım**: Sosyal medya paylaşım ve link kopyalama
- **Klavye Navigasyonu**: Ok tuşları ve kısayollar
- **Scene Navigation**: Sahne geçişleri için kontroller
- **Hover Efektleri**: İnteraktif kullanıcı deneyimi

## 🛠️ Teknolojiler

- **HTML5**: Semantic markup ve modern yapı
- **CSS3**: Flexbox, Grid, Animations, Transforms
- **JavaScript ES6+**: Modern JavaScript özellikleri
- **Font Awesome**: İkonlar için
- **Google Fonts**: Poppins font ailesi

## 📁 Dosya Yapısı

```
web-comic/
├── index.html              # Ana sayfa
├── 1.bölüm.html           # Bölüm sayfası
├── style.css              # Ana sayfa stilleri
├── 1.bölüm.css            # Bölüm sayfası stilleri
├── app.js                 # Ana sayfa JavaScript
├── 1.bölüm.js             # Bölüm sayfası JavaScript
├── README.md              # Proje dokümantasyonu
└── img/                   # Görsel dosyaları
    ├── bg.png
    ├── şehir güneş.png
    ├── zemin.png
    ├── çocuklar.png
    ├── çerçeve.png
    ├── bölüm 1.png
    └── 1.bölüm.jpg
```

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Ana Renk**: #030104 (Koyu arka plan)
- **Vurgu Renk**: #64b5f6 (Mavi vurgular)
- **Metin**: #ffffff (Beyaz)
- **Şeffaf Metin**: rgba(255, 255, 255, 0.7)

### Tipografi
- **Font Ailesi**: Poppins
- **Ağırlıklar**: 300, 400, 600, 700
- **Responsive Boyutlar**: clamp() fonksiyonu ile

### Animasyonlar
- **Parallax Scroll**: Katmanlı görsel efektler
- **Fade In**: Sayfa yükleme animasyonları
- **Hover Effects**: İnteraktif elementler
- **Ripple Effect**: Buton tıklama efektleri

## 🚀 Kurulum

1. Projeyi klonlayın:
```bash
git clone [repository-url]
cd web-comic
```

2. Dosyaları web sunucusuna yükleyin veya local server kullanın:
```bash
# Python ile
python -m http.server 8000

# Node.js ile
npx serve .
```

3. Tarayıcıda açın:
```
http://localhost:8000
```

## 📱 Responsive Tasarım

### Breakpoint'ler
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

### Özellikler
- **Flexible Grid**: CSS Grid ve Flexbox
- **Mobile Navigation**: Hamburger menü
- **Touch Friendly**: Dokunmatik cihazlar için optimize
- **Performance**: Lazy loading ve optimizasyonlar

## 🎮 Kullanıcı Etkileşimleri

### Klavye Kısayolları
- **Sol/Sağ Ok**: Sahne geçişi
- **Space**: Fullscreen modu
- **M**: Ses açma/kapama
- **Escape**: Fullscreen'den çıkış

### Mouse/Touch
- **Hover**: Element vurgulama
- **Click**: Navigasyon ve kontroller
- **Scroll**: Parallax efektler

## 🔧 Özelleştirme

### Yeni Bölüm Ekleme
1. `1.bölüm.html` dosyasını kopyalayın
2. Görsel dosyalarını `img/` klasörüne ekleyin
3. `1.bölüm.js` dosyasında `scenes` array'ini güncelleyin

### Renk Değişikliği
CSS dosyalarında CSS değişkenlerini kullanarak:
```css
:root {
    --primary-color: #64b5f6;
    --background-color: #030104;
    --text-color: #ffffff;
}
```

## 📈 Performans Optimizasyonları

- **Lazy Loading**: Görseller için
- **Debounced Events**: Scroll ve resize olayları
- **Intersection Observer**: Scroll animasyonları
- **CSS Transforms**: GPU hızlandırmalı animasyonlar
- **Minified Assets**: Üretim için

## 🌐 Tarayıcı Desteği

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit yapın (`git commit -m 'Add some AmazingFeature'`)
4. Push yapın (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📞 İletişim

Proje hakkında sorularınız için issue açabilirsiniz.

---

**Not**: Bu proje modern web standartlarına uygun olarak yeniden inşa edilmiştir. Orijinal projenin tüm özellikleri korunmuş ve geliştirilmiştir.