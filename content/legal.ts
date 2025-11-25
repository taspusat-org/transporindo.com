type LegalLanguage = "en" | "id";

type Section = {
  title: string;
  body: string[];
  list?: string[];
};

type LegalDocument = Record<
  LegalLanguage,
  {
    heroTitle: string;
    heroSubtitle: string;
    introduction: string[];
    sections: Section[];
    closing: string;
  }
>;

export const termsAndConditions: LegalDocument = {
  en: {
    heroTitle: "Terms and Conditions",
    heroSubtitle: "Updated: 21 November 2025",
    introduction: [
      "These terms govern the relationship between you and PT Transporindo Agung Sejahtera (“Transporindo”, “we”, “our”). By accessing or using our website, services, or related communication channels, you agree to comply with these terms."
    ],
    sections: [
      {
        title: "Use of Services",
        body: [
          "You agree to use our website and logistics services only for lawful purposes and in accordance with these terms.",
          "You must provide accurate, current, and complete information when requesting quotations, placing orders, or submitting inquiries."
        ]
      },
      {
        title: "Intellectual Property",
        body: [
          "All content, trademarks, and media appearing on Transporindo channels are owned or licensed by us. Any reproduction or redistribution requires prior written consent."
        ],
        list: [
          "Do not copy, republish, or exploit site content without approval.",
          "Do not remove proprietary notices from downloaded materials."
        ]
      },
      {
        title: "Prohibited Conduct",
        body: [
          "You agree not to interfere with site security, attempt unauthorized access, or submit content that is defamatory, infringing, or unlawful."
        ]
      },
      {
        title: "Quotations and Contracts",
        body: [
          "Rates, transit times, and capacities provided through the site or by email are indicative until confirmed in a formal service agreement or shipping instruction.",
          "Additional surcharges (fuel, congestion, customs) may apply based on prevailing regulations and operational conditions."
        ]
      },
      {
        title: "Limitation of Liability",
        body: [
          "To the maximum extent permitted by Indonesian law, Transporindo is not liable for indirect, incidental, or consequential damages arising from the use of our site or services.",
          "Our liability for cargo handling remains limited to the terms stated in the applicable transport contract or bill of lading."
        ]
      },
      {
        title: "Changes to Terms",
        body: [
          "We may update these terms at any time to reflect operational, legal, or regulatory changes. Continued use of the site constitutes acceptance of the updated terms."
        ]
      },
      {
        title: "Governing Law",
        body: [
          "These terms are governed by the laws of the Republic of Indonesia. Any dispute shall be settled amicably or, if necessary, through the competent courts in Jakarta."
        ]
      }
    ],
    closing: "If you have questions about these terms, contact legal@transporindo.id."
  },
  id: {
    heroTitle: "Syarat dan Ketentuan",
    heroSubtitle: "Pembaruan: 21 November 2025",
    introduction: [
      "Syarat ini mengatur hubungan antara Anda dan PT Transporindo Agung Sejahtera (“Transporindo”, “kami”). Dengan mengakses atau menggunakan situs web, layanan, maupun saluran komunikasi kami, Anda dianggap menyetujui seluruh syarat ini."
    ],
    sections: [
      {
        title: "Penggunaan Layanan",
        body: [
          "Anda setuju menggunakan situs dan layanan logistik kami hanya untuk tujuan yang sah serta mengikuti syarat ini.",
          "Anda wajib memberikan informasi yang akurat, mutakhir, dan lengkap saat meminta penawaran, melakukan pemesanan, maupun mengirimkan pertanyaan."
        ]
      },
      {
        title: "Kekayaan Intelektual",
        body: [
          "Seluruh konten, merek dagang, dan media pada kanal Transporindo dimiliki atau dilisensikan kepada kami. Reproduksi atau distribusi ulang memerlukan persetujuan tertulis sebelumnya."
        ],
        list: [
          "Dilarang menyalin, menerbitkan kembali, atau memanfaatkan konten situs tanpa izin.",
          "Dilarang menghapus pemberitahuan hak cipta pada bahan yang diunduh."
        ]
      },
      {
        title: "Perilaku yang Dilarang",
        body: [
          "Anda tidak boleh mengganggu keamanan situs, mencoba akses tanpa izin, atau mengunggah konten yang bersifat memfitnah, melanggar hak pihak lain, maupun bertentangan dengan hukum."
        ]
      },
      {
        title: "Penawaran dan Kontrak",
        body: [
          "Tarif, waktu tempuh, dan kapasitas yang ditampilkan di situs atau melalui email bersifat indikatif sampai dikonfirmasi dalam perjanjian layanan atau instruksi pengiriman resmi.",
          "Biaya tambahan (bahan bakar, kemacetan, kepabeanan) dapat berlaku sesuai regulasi dan kondisi operasional."
        ]
      },
      {
        title: "Batasan Tanggung Jawab",
        body: [
          "Sejauh diizinkan hukum Indonesia, Transporindo tidak bertanggung jawab atas kerugian tidak langsung, insidental, maupun konsekuensial akibat penggunaan situs atau layanan kami.",
          "Tanggung jawab kami atas penanganan kargo dibatasi oleh ketentuan dalam kontrak transportasi atau bill of lading yang berlaku."
        ]
      },
      {
        title: "Perubahan Syarat",
        body: [
          "Kami dapat memperbarui syarat ini kapan saja untuk menyesuaikan perubahan operasional atau regulasi. Penggunaan situs yang berkelanjutan dianggap sebagai persetujuan atas perubahan tersebut."
        ]
      },
      {
        title: "Hukum yang Berlaku",
        body: [
          "Syarat ini tunduk pada hukum Republik Indonesia. Sengketa akan diselesaikan secara musyawarah atau melalui pengadilan yang berwenang di Jakarta."
        ]
      }
    ],
    closing: "Untuk pertanyaan terkait syarat ini, hubungi legal@transporindo.id."
  }
};

export const privacyPolicy: LegalDocument = {
  en: {
    heroTitle: "Privacy Policy",
    heroSubtitle: "Updated: 21 November 2025",
    introduction: [
      "This privacy policy explains how Transporindo collects, uses, discloses, and protects personal data obtained through our website, quotation forms, customer portals, and offline touchpoints."
    ],
    sections: [
      {
        title: "Data We Collect",
        body: [
          "Identity and contact details: name, company, email, phone number, tax ID.",
          "Logistics information: shipment origin/destination, commodity details, customs documents.",
          "Technical data: IP address, browser type, device identifiers, interaction logs."
        ]
      },
      {
        title: "Purpose of Processing",
        body: [
          "To respond to inquiries, provide quotations, and execute transportation services.",
          "To comply with legal obligations such as customs declarations and tax reporting.",
          "To improve user experience, enhance security, and optimize operational analytics."
        ]
      },
      {
        title: "Legal Basis",
        body: [
          "We rely on contractual necessity, legitimate interest in providing logistics solutions, and compliance with Indonesian regulations. Where required, we obtain explicit consent."
        ]
      },
      {
        title: "Data Sharing",
        body: [
          "We share data only with trusted partners such as carriers, port operators, customs brokers, IT vendors, and authorities when needed to deliver the requested service.",
          "All partners are bound by confidentiality and data protection obligations."
        ]
      },
      {
        title: "International Transfers",
        body: [
          "When shipments require cross-border handling, data may be transferred outside Indonesia. We ensure an adequate level of protection consistent with applicable laws."
        ]
      },
      {
        title: "Data Retention",
        body: [
          "We retain personal data only for as long as necessary to fulfill the purposes above or to meet regulatory retention requirements."
        ]
      },
      {
        title: "Your Rights",
        body: [
          "You may request access, correction, deletion, or restriction of your personal data. Submit requests to privacy@transporindo.id, and we will respond within 30 days where feasible."
        ]
      },
      {
        title: "Security",
        body: [
          "We apply administrative, technical, and physical safeguards to protect personal data, including access controls, encryption in transit, and employee training."
        ]
      },
      {
        title: "Updates",
        body: [
          "We may revise this policy periodically. Significant changes will be announced on our website with a new effective date."
        ]
      }
    ],
    closing: "Contact privacy@transporindo.id or visit our Jakarta office for privacy inquiries."
  },
  id: {
    heroTitle: "Kebijakan Privasi",
    heroSubtitle: "Pembaruan: 21 November 2025",
    introduction: [
      "Kebijakan privasi ini menjelaskan cara Transporindo mengumpulkan, menggunakan, mengungkapkan, dan melindungi data pribadi yang diperoleh melalui situs web, formulir penawaran, portal pelanggan, serta titik kontak offline."
    ],
    sections: [
      {
        title: "Data yang Dikumpulkan",
        body: [
          "Data identitas dan kontak: nama, perusahaan, email, nomor telepon, NPWP.",
          "Informasi logistik: asal/tujuan pengiriman, detail komoditas, dokumen kepabeanan.",
          "Data teknis: alamat IP, jenis peramban, identitas perangkat, log interaksi."
        ]
      },
      {
        title: "Tujuan Pemrosesan",
        body: [
          "Menanggapi pertanyaan, memberikan penawaran, dan menjalankan layanan transportasi.",
          "Memenuhi kewajiban hukum seperti deklarasi bea cukai dan pelaporan pajak.",
          "Meningkatkan pengalaman pengguna, memperkuat keamanan, dan mengoptimalkan analitik operasional."
        ]
      },
      {
        title: "Dasar Hukum",
        body: [
          "Kami bergantung pada kebutuhan kontraktual, kepentingan sah dalam menyediakan solusi logistik, dan kepatuhan terhadap regulasi Indonesia. Jika diwajibkan, kami meminta persetujuan eksplisit."
        ]
      },
      {
        title: "Berbagi Data",
        body: [
          "Data hanya dibagikan dengan mitra tepercaya seperti operator kapal, operator pelabuhan, agen bea cukai, penyedia TI, dan otoritas terkait untuk melaksanakan layanan yang diminta.",
          "Seluruh mitra terikat kewajiban kerahasiaan dan perlindungan data."
        ]
      },
      {
        title: "Transfer Internasional",
        body: [
          "Ketika pengiriman membutuhkan penanganan lintas batas, data dapat dipindahkan ke luar Indonesia. Kami memastikan tingkat perlindungan yang memadai sesuai hukum yang berlaku."
        ]
      },
      {
        title: "Retensi Data",
        body: [
          "Data pribadi disimpan hanya selama diperlukan untuk memenuhi tujuan di atas atau untuk memenuhi kewajiban retensi regulasi."
        ]
      },
      {
        title: "Hak Anda",
        body: [
          "Anda dapat meminta akses, perbaikan, penghapusan, atau pembatasan data pribadi. Kirim permintaan ke privacy@transporindo.id dan kami akan merespons dalam 30 hari sejauh memungkinkan."
        ]
      },
      {
        title: "Keamanan",
        body: [
          "Kami menerapkan kontrol administratif, teknis, dan fisik untuk melindungi data pribadi, termasuk kontrol akses, enkripsi saat transit, dan pelatihan karyawan."
        ]
      },
      {
        title: "Pembaruan",
        body: [
          "Kami dapat memperbarui kebijakan ini secara berkala. Perubahan signifikan akan diumumkan di situs web kami dengan mencantumkan tanggal berlaku yang baru."
        ]
      }
    ],
    closing: "Hubungi privacy@transporindo.id atau kunjungi kantor kami di Jakarta untuk pertanyaan privasi."
  }
};

export type { LegalLanguage, Section, LegalDocument };

