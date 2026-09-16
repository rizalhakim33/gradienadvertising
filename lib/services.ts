export interface ServiceDetail {
  label: string;
  items: string[];
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  no: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  details: ServiceDetail[];
  faqs: ServiceFaq[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "huruf-timbul",
    no: "01",
    title: "Huruf Timbul",
    shortDesc:
      "Solusi signage elegan untuk toko, kantor, dan restoran agar brand terlihat profesional, rapi, dan mudah dikenali dari jarak jauh.",
    description:
      "Huruf timbul adalah jenis signage tiga dimensi yang dipasang pada fasad bangunan, papan nama, atau dinding. Memberikan kesan elegan dan profesional sehingga brand Anda mudah dikenali oleh pelanggan. Gradien Advertising menyediakan jasa pembuatan huruf timbul custom dengan material pilihan untuk toko, kantor, restoran, kafe, dan bangunan komersial di Bandung. Setiap huruf timbul dirancang sesuai identitas brand, diproduksi dengan presisi, dan dipasang oleh tim profesional.",
    image: "/images/hero.png",
    imageWidth: 1024,
    imageHeight: 1024,
    imageAlt: "Huruf timbul elegan untuk toko dan kantor",
    details: [
      {
        label: "Pilihan Material",
        items: ["Acrylic", "Stainless Steel", "Galvanis", "ACP"],
      },
      {
        label: "Pilihan Finishing",
        items: ["Cat Duco", "Chrome", "Brushed", "Painting"],
      },
      {
        label: "Pencahayaan",
        items: ["LED Backlight", "Frontlight", "Tanpa LED"],
      },
      {
        label: "Pemasangan",
        items: ["Outdoor", "Indoor", "Dinding", "Façade"],
      },
    ],
    faqs: [
      {
        question: "Apa itu huruf timbul?",
        answer:
          "Huruf timbul adalah signage tiga dimensi yang terbuat dari material seperti acrylic, stainless steel, atau galvanis. Huruf ini dipasang pada fasad bangunan atau papan nama untuk memberikan kesan elegan dan profesional.",
      },
      {
        question: "Apa perbedaan acrylic dan stainless?",
        answer:
          "Acrylic lebih ringan dan tersedia dalam berbagai warna, cocok untuk indoor dan outdoor. Stainless steel lebih tahan lama dan memberikan kesan premium, cocok untuk bangunan komersial yang menginginkan tampilan mewah.",
      },
      {
        question: "Apakah bisa menggunakan LED?",
        answer:
          "Ya. Kami menyediakan pilihan pencahayaan LED backlight dan frontlight yang membuat huruf timbul terlihat menonjol siang maupun malam hari.",
      },
      {
        question: "Apakah bisa custom ukuran dan desain?",
        answer:
          "Tentu bisa. Setiap huruf timbul kami buat sesuai dengan ukuran, font, warna, dan desain yang Anda inginkan. Tim desain kami akan membantu mewujudkan konsep Anda.",
      },
      {
        question: "Berapa harga huruf timbul?",
        answer:
          "Harga bergantung pada material, ukuran, kompleksitas desain, dan pilihan pencahayaan. Hubungi kami untuk konsultasi gratis dan penawaran harga sesuai kebutuhan Anda.",
      },
    ],
    metaTitle: "Jasa Huruf Timbul Bandung — Gradien",
    metaDescription:
      "Jasa pembuatan huruf timbul custom di Bandung. Material acrylic, stainless, galvanis. Desain, produksi, dan instalasi oleh tim profesional.",
  },
  {
    slug: "neon-box",
    no: "02",
    title: "Neon Box",
    shortDesc:
      "Media signage bercahaya yang efektif menarik perhatian siang maupun malam. Cocok untuk usaha kuliner, retail, dan lainnya.",
    description:
      "Neon box adalah signage bercahaya yang menggunakan lampu LED atau neon di dalam box akrilik. Efektif menarik perhatian pelanggan siang maupun malam hari. Cocok untuk restoran, kafe, retail, minimarket, dan berbagai jenis usaha lainnya. Gradien Advertising menyediakan jasa pembuatan neon box custom dengan desain sesuai logo atau tema bisnis Anda. Neon box kami menggunakan material berkualitas tinggi yang tahan cuaca untuk penggunaan outdoor.",
    image: "/images/neonbox.png",
    imageWidth: 1024,
    imageHeight: 1024,
    imageAlt: "Neon box akrilik outdoor tahan cuaca",
    details: [
      {
        label: "Material",
        items: ["Akrilik", "Vinyl", "Plat"],
      },
      {
        label: "Frame",
        items: ["Aluminium", "Besi"],
      },
      {
        label: "Pencahayaan",
        items: ["LED", "Neon"],
      },
      {
        label: "Ketahanan",
        items: ["Outdoor Tahan Cuaca", "Indoor"],
      },
    ],
    faqs: [
      {
        question: "Apa itu neon box?",
        answer:
          "Neon box adalah signage bercahaya yang terdiri dari box akrilik atau vinyl dengan lampu LED atau neon di dalamnya. Signage ini efektif menarik perhatian karena terlihat jelas siang maupun malam hari.",
      },
      {
        question: "Apa perbedaan neon box dan neon sign?",
        answer:
          "Neon box berbentuk kotak atau persegi panjang dengan pencahayaan merata di seluruh permukaan. Neon sign berbentuk custom seperti tulisan atau logo dengan pencahayaan mengikuti bentuk desain.",
      },
      {
        question: "Berapa daya listrik neon box?",
        answer:
          "Daya listrik tergantung ukuran dan jenis lampu yang digunakan. Neon box dengan LED umumnya hemat listrik, berkisar 20-60 watt tergantung ukuran.",
      },
      {
        question: "Apakah neon box tahan hujan?",
        answer:
          "Ya. Neon box outdoor kami dirancang tahan cuaca dengan material dan pemasangan yang memastikan ketahanan terhadap hujan dan panas.",
      },
      {
        question: "Berapa lama waktu pembuatan?",
        answer:
          "Waktu pembuatan bervariasi tergantung ukuran dan kompleksitas desain. Rata-rata 5-10 hari kerja setelah desain disetujui.",
      },
    ],
    metaTitle: "Jasa Neon Box Bandung — Gradien",
    metaDescription:
      "Jasa pembuatan neon box custom di Bandung. Akrilik, vinyl, LED. Tahan cuaca untuk outdoor. Desain, produksi, dan instalasi.",
  },
  {
    slug: "neon-sign",
    no: "03",
    title: "Neon Sign",
    shortDesc:
      "Elemen branding dan dekorasi interior untuk kafe, restoran, dan ruang komersial dengan suasana estetik dan berkarakter.",
    description:
      "Neon sign adalah lampu neon custom berbentuk tulisan atau logo yang digunakan untuk branding dan dekorasi interior. Cocok untuk kafe, restoran, bar, toko fashion, salon, dan ruang komersial yang ingin menciptakan suasana estetik dan berkarakter. Gradien Advertising menggunakan teknologi LED Neon Flex yang hemat listrik dan tahan lama. Setiap neon sign kami buat sesuai desain custom, mulai dari tulisan, logo, hingga bentuk unik sesuai keinginan Anda.",
    image: "/images/neonsign.png",
    imageWidth: 1024,
    imageHeight: 1024,
    imageAlt: "Lampu neon tulisan custom sebagai elemen branding interior",
    details: [
      {
        label: "Teknologi",
        items: ["LED Neon Flex"],
      },
      {
        label: "Penggunaan",
        items: ["Interior", "Branding", "Dekorasi"],
      },
      {
        label: "Custom",
        items: ["Tulisan", "Logo", "Bentuk"],
      },
      {
        label: "Warna",
        items: ["Merah", "Biru", "Hijau", "Putih", "Kuning", "Pink"],
      },
    ],
    faqs: [
      {
        question: "Apa itu neon sign?",
        answer:
          "Neon sign adalah lampu neon custom yang dibentuk menyerupai tulisan, logo, atau desain tertentu. Digunakan untuk branding dan dekorasi interior pada kafe, restoran, dan ruang komersial.",
      },
      {
        question: "Apakah neon sign hemat listrik?",
        answer:
          "Ya. Kami menggunakan teknologi LED Neon Flex yang jauh lebih hemat listrik dibandingkan neon tradisional. Daya yang dibutuhkan biasanya hanya 10-30 watt tergantung ukuran.",
      },
      {
        question: "Apakah bisa custom tulisan dan logo?",
        answer:
          "Tentu bisa. Kami membuat neon sign sesuai desain custom yang Anda inginkan, termasuk tulisan, logo, bentuk unik, dan berbagai warna.",
      },
      {
        question: "Berapa lama neon sign bisa bertahan?",
        answer:
          "Neon sign LED Neon Flex kami memiliki umur pemakaian hingga 50.000 jam atau sekitar 10-15 tahun penggunaan normal.",
      },
      {
        question: "Apakah neon sign hanya untuk indoor?",
        answer:
          "Neon sign umumnya digunakan untuk indoor. Untuk penggunaan outdoor, kami bisa memberikan perlindungan tambahan agar tetap aman dari cuaca.",
      },
    ],
    metaTitle: "Jasa Neon Sign Bandung — Gradien",
    metaDescription:
      "Jasa pembuatan neon sign custom di Bandung. LED Neon Flex hemat listrik. Custom tulisan, logo, bentuk. Untuk kafe, restoran, toko.",
  },
  {
    slug: "signage-toko",
    no: "04",
    title: "Signage Toko",
    shortDesc:
      "Identitas visual yang membantu usaha mudah dikenali dan terlihat profesional dengan desain dan pencahayaan yang tepat.",
    description:
      "Signage toko adalah papan identitas bisnis yang membantu usaha mudah dikenali dan terlihat profesional. Dengan desain dan pencahayaan yang tepat, signage mampu menarik perhatian serta memberi kesan pertama yang kuat kepada pelanggan. Gradien Advertising menyediakan jasa pembuatan signage toko dengan desain custom, material berkualitas, dan pemasangan rapi untuk berbagai jenis usaha di Bandung. Kami melayani papan nama toko, facade signage, dan signage outlet sesuai kebutuhan bisnis Anda.",
    image: "/images/signage.jpg",
    imageWidth: 1024,
    imageHeight: 1024,
    imageAlt: "Papan signage toko yang profesional",
    details: [
      {
        label: "Jenis",
        items: ["Papan Nama", "Facade Signage", "Signage Outlet"],
      },
      {
        label: "Material",
        items: ["Acrylic", "ACP", "Plat", "Kayu"],
      },
      {
        label: "Pencahayaan",
        items: ["LED", "Backlight", "Non-Lighting"],
      },
      {
        label: "Desain",
        items: ["Custom Sesuai Brand", "Konsultasi Gratis"],
      },
    ],
    faqs: [
      {
        question: "Apa itu signage toko?",
        answer:
          "Signage toko adalah papan nama atau identitas visual yang dipasang pada fasad toko untuk membantu usaha mudah dikenali oleh pelanggan. Signage ini mencakup papan nama, facade signage, dan berbagai jenis identitas bisnis lainnya.",
      },
      {
        question: "Apa bedanya signage toko dan neon box?",
        answer:
          "Signage toko adalah istilah umum untuk semua jenis identitas visual toko. Neon box adalah salah satu jenis signage toko yang memiliki pencahayaan di dalamnya.",
      },
      {
        question: "Material apa yang cocok untuk signage toko?",
        answer:
          "Tergantung kebutuhan. Acrylic cocok untuk tampilan elegan, ACP untuk ukuran besar, plat untuk ketahanan outdoor, dan kayu untuk kesan natural. Kami akan bantu memilih yang sesuai.",
      },
      {
        question: "Berapa ukuran signage toko yang ideal?",
        answer:
          "Ukuran ideal bergantung pada lebar fasad toko dan jarak pandang. Umumnya signage sebaiknya terlihat jelas dari jarak 5-10 meter. Konsultasikan dengan kami untuk ukuran yang tepat.",
      },
      {
        question: "Apakah Gradien melayani desain?",
        answer:
          "Ya. Tim desain kami siap membantu mewujudkan konsep signage toko sesuai identitas brand Anda. Konsultasi desain gratis.",
      },
    ],
    metaTitle: "Jasa Signage Toko Bandung — Gradien",
    metaDescription:
      "Jasa pembuatan signage toko profesional di Bandung. Papan nama, facade, custom desain. Material berkualitas, pemasangan rapi.",
  },
  {
    slug: "billboard",
    no: "05",
    title: "Billboard",
    shortDesc:
      "Media promosi berukuran besar yang meningkatkan awareness brand di area strategis dengan visibilitas tinggi.",
    description:
      "Billboard adalah media reklame berukuran besar yang dipasang di lokasi strategis dengan visibilitas tinggi. Billboard memastikan pesan promosi Anda terlihat oleh banyak orang, meningkatkan kesadaran brand secara signifikan. Gradien Advertising menyediakan jasa pembuatan dan pemasangan billboard untuk kebutuhan advertising dan promosi brand di Bandung dan sekitarnya. Kami menggunakan material tahan cuaca dan konstruksi kokoh untuk billboard yang awet dan efektif.",
    image: "/images/billboard.jpg",
    imageWidth: 1024,
    imageHeight: 683,
    imageAlt: "Billboard reklame di area strategis",
    details: [
      {
        label: "Ukuran",
        items: ["Custom Sesuai Kebutuhan", "Small", "Medium", "Large"],
      },
      {
        label: "Material",
        items: ["Plat", "Vinyl", "Besi"],
      },
      {
        label: "Konstruksi",
        items: ["Rangka Besi", "Tiang", "Outdoor Tahan Cuaca"],
      },
      {
        label: "Lokasi",
        items: ["Strategic", "High Visibility", "Traffic Area"],
      },
    ],
    faqs: [
      {
        question: "Apa itu billboard?",
        answer:
          "Billboard adalah media reklame berukuran besar yang dipasang di lokasi strategis seperti tepi jalan raya, area komersial, atau tempat dengan lalu lintas tinggi. Billboard dirancang untuk visibilitas maksimal.",
      },
      {
        question: "Berapa ukuran billboard yang tersedia?",
        answer:
          "Kami menyediakan billboard dengan ukuran custom sesuai kebutuhan. Mulai dari ukuran kecil hingga besar, disesuaikan dengan lokasi dan anggaran Anda.",
      },
      {
        question: "Apakah Gradien melayani pemasangan billboard?",
        answer:
          "Ya. Kami melayani pembuatan dan pemasangan billboard dari awal hingga selesai, termasuk konstruksi rangka dan tiang.",
      },
      {
        question: "Berapa lama waktu pembuatan billboard?",
        answer:
          "Waktu pembuatan tergantung ukuran dan kompleksitas. Rata-rata 7-14 hari kerja setelah desain dan spesifikasi disetujui.",
      },
      {
        question: "Apakah billboard tahan cuaca?",
        answer:
          "Ya. Billboard kami menggunakan material tahan cuaca dan konstruksi kokoh yang dirancang untuk bertahan dalam kondisi outdoor.",
      },
    ],
    metaTitle: "Jasa Billboard Bandung — Gradien",
    metaDescription:
      "Jasa pembuatan billboard di Bandung. Ukuran custom, material tahan cuaca. Desain, produksi, dan pemasangan oleh tim profesional.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
