# Uzay Gemisi Arama Uygulaması

![ana sayfa](https://user-images.githubusercontent.com/99799385/235220164-24d366f0-9316-481f-9899-32f0a6319a70.png)


## Sitenin Çalıştırılması

İlk olarak, geliştirici sunucuyu çalıştırın:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Sonucu görmek için tarayıcınızda [http://localhost:3000](http://localhost:3000) linkini açın.

## Özellikler

+ Context API kullanılarak geliştirildi.
+ Projede Next.js ve React kullanıldı.
+ Başlangıçta bütün uzay gemileri ana sayfada bulunur.
+ "Load More" butonu ile daha fazla uzay gemisi yüklenir.
+ Arama çubuğunda Star Wars evreninden her türlü uzay gemisi isim veya modeline göre filtrelenebilir.
+ Daha detaylı bir veriye ulaşmak istenildiğine uzay gemisi kartlarına tıklanarak geminin detay sayfasına gidilir.
+ Detay sayfasından " <- " butonu ile bir önceki sayfaya geçilir.
+ Sol üstteki kask logosu ana sayfa butonu olarak tasarlanmıştır.

## Kullanılan API'lar

+ SWAPI kullanılarak geliştirildi.

## Kullanılan Kütüphaneler

+ Axios
+ Chakra UI
+ React-Icons

### Ana Sayfa Butonu (Kask Logosu) Canlı Gösterim

Detay sayfasından "Ana Sayfa" butonu ile ana sayfaya geçiş yapılır :

![home-button](https://user-images.githubusercontent.com/99799385/235221718-d8aabfd8-6869-4e77-bfb3-117bf1612a38.gif)

### Filtreleme İşlemi ve Geri Butonu Canlı Gösterim

Ana sayfadan filtreleme işlemi yapılarak detay sayfasına gidilir. Detay sayfasından bir önceki sayfaya "Geri" butonu ile geçiş yapılır :

![back-button](https://user-images.githubusercontent.com/99799385/235222319-dc9ce615-3f88-4204-b975-cda10e2f3b1d.gif)
