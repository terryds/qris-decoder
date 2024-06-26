# How to decode QRIS (Quick Response Code Indonesian Standard)

1. Use QR to Text, such as "https://qrcoderaptor.com"
2. You will get the encoded text that has the information
3. Go to `examples/qris-decoder.js` to see how you could use this script

# Usage

```js
import { decodeFromString } from '@terryds/qris-decoder';

console.log(decodeFromString("00020101021126680016ID.CO.TELKOM.WWW011893600898026635207502150001952663520750303UMI51440014ID.CO.QRIS.WWW0215ID10211254059720303UMI5204549953033605502015802ID5906BIOLBE6011KAB. MALANG610565168622005091147938120703A03630404CB"))
```

will output

```js
{
  payload_format_indicator: '01',
  point_of_initiation_method: 'STATIC',
  merchant_information_26: {
    global_unique_identifier: 'ID.CO.TELKOM.WWW',
    merchant_pan: '936008980266352075',
    merchant_id: '000195266352075',
    merchant_criteria: 'UMI'
  },
  merchant_information_51: {
    global_unique_identifier: 'ID.CO.QRIS.WWW',
    merchant_id: 'ID1021125405972',
    merchant_criteria: 'UMI'
  },
  mcc: '5499',
  transaction_currency: 'RUPIAH',
  tip_indicator: 'INPUT_TIP',
  country_code: 'ID',
  merchant_name: 'BIOLBE',
  merchant_city: 'KAB. MALANG',
  merchant_postal_code: '65168',
  additional_data: { reference_label: '114793812', terminal_label: 'A03' },
  crc: '04CB'
}
```


# QRIS Glossarium & Informasi yang terkandung

1. MPM: Merchant Presented Mode

QR yang dikasih merchant untuk di-scan oleh customer utk pembayaran. Mode lainnya adalah CPM (Customer Presented Mode), dimana customer perlu memberikan merchant QR code nya utk di-scan oleh merchant

2. National Merchant ID (NMID)

Nomor Induk Toko yang secara resmi terdaftar di dalam sistem QRIS. Setiap kode QR yang dikeluarkan oleh bank atau PJSP berbeda dapat (dan seharusnya) merujuk kepada NMID yang sama bagi merchant tersebut. NMID dapat berubah sesuai lokasi merchant, seperti jaringan minimarket yang memiliki beberapa cabang.

3. Merchant PAN
Nomor Induk Acquirer yang terdaftar di dalam sistem QRIS. Informasi ini juga sering muncul pada kode QRIS Statis versi terkini (keluaran akhir 2021) yang mengandung teks “Dicetak Oleh: 936… (kode Merchant PAN)”. Acquirer sendiri adalah Penyelenggara Jasa Sistem Pembayaran (PJSP) yang merangkul para toko untuk menerima pembayaran menggunakan QRIS.

Daftar PJSP dapat dilihat di https://www.bi.go.id/PJSPQRIS/default.aspx 

4. Merchant ID 

Nomor induk merchant internal PJSP yang digunakan layaknya nomor rekening merchant pada sistem QRIS tersebut. Hal ini juga memudahkan beberapa PJSP aplikasi dompet elektronik untuk mengidentifikasi toko-toko tertentu yang mengeluarkan promosi atau diskon.

5. Nama Merchant beserta Kota dan Kode Pos lokasi merchant tersebut.

6. Kode Kategori Merchant yang menandakan jenis toko tersebut, seperti restoran, hotel, toko komputer, atau lainnya.

7. Kode Metode Akuisisi Merchant (Merchant Criteria) yang sering digunakan oleh para PJSP untuk mengidentifikasi merchant QRIS yang berasal dari golongan tertentu, terutama UMKM.

8. Nilai Checksum CRC yang digunakan untuk memvalidasi isi kode QRIS tersebut, dan untuk memastikan bahwa kode tersebut berhasil dipindai secara penuh.

# Special Thanks to

- https://uwrite.id/news/kenali-isi-kode-qris-anda-dengan-cara-ini
- https://www.linkedin.com/pulse/asyik-bermain-kode-qris-sandi-fajariadi/
- ChatGPT

# Contribute

Feel free to contribute or fork if you want to develop this further.
Lots of things that can be added:

- Decode right from the image
- Example codes with a simple frontend app