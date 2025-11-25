"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import Image from "next/image";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// Translation content
const content = {
  en: {
    title: "Privacy Policy",
    subtitle: "Welcome to Transporindo Agung Sejahtera",
    backButton: "Back to Home",
    sections: {
      intro: {
        text: "This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.",
      },
      collection: {
        title: "What personal information do we collect from the people that visit our blog, website or app?",
        text: "When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number, credit card information or other details to help you with your experience.",
      },
      when: {
        title: "When do we collect information?",
        text: "We collect information from you when you place an order, subscribe to a newsletter, respond to a survey, fill out a form or enter information on our site.",
      },
      usage: {
        title: "How do we use your information?",
        intro:
          "We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:",
        items: [
          "To administer a contest, promotion, survey or other site feature.",
          "To quickly process your transactions.",
          "To send periodic emails regarding your order or other products and services.",
          "To follow up with them after correspondence (live chat, email or phone inquiries)",
        ],
      },
      protection: {
        title: "How do we protect your information?",
        text1:
          "Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.",
        text2:
          "We implement a variety of security measures when a user places an order to maintain the safety of your personal information.",
        text3:
          "All transactions are processed through a gateway provider and are not stored or processed on our servers.",
      },
      cookies: {
        title: "Do we use 'cookies'?",
        text1:
          "Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.",
        text2:
          "For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We use cookies to:",
        items: [
          "Help remember and process the items in the shopping cart.",
          "Understand and save user's preferences for future visits.",
          "Keep track of advertisements.",
          "Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.",
        ],
        text3:
          "You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.",
        text4: "If you turn cookies off, it won't affect the user's experience.",
      },
      thirdParty: {
        title: "Third-party Disclosure",
        text1:
          "We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.",
        text2:
          "We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.",
      },
      thirdPartyLinks: {
        title: "Third-Party Links",
        text: "Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.",
      },
      google: {
        title: "Google",
        text1:
          "Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users.",
        text2: "We have implemented the following:",
        items: ["Remarketing", "Google Display Network Impression Reporting", "Demographics and Interests Reporting"],
        text3:
          "We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.",
        optOutTitle: "Opting Out",
        optOutText:
          "Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on.",
      },
      fairPractices: {
        title: "Fair Information Practices",
        text: "The Fair Information Practices Principles form the backbone of privacy law and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.",
      },
      canSpam: {
        title: "CAN SPAM Act",
        text1:
          "The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them.",
        text2: "We collect your email address in order to:",
        items1: [
          "Send information, respond to inquiries, and/or other requests or questions",
          "Process orders and to send information and updates pertaining to orders.",
          "Send you additional information related to your product and/or service",
          "Market to our mailing list or continue to send emails to our clients after the original transaction has occurred.",
        ],
        text3: "To be in accordance with CANSPAM, we agree to the following:",
        items2: [
          "Not use false or misleading subjects or email addresses.",
          "Identify the message as an advertisement in some reasonable way.",
          "Include the physical address of our business or site headquarters.",
          "Monitor third-party email marketing services for compliance, if one is used.",
          "Honor opt-out/unsubscribe requests quickly.",
          "Allow users to unsubscribe by using the link at the bottom of each email.",
        ],
        text4:
          "If at any time you would like to unsubscribe from receiving future emails follow the instructions at the bottom of each email and we will promptly remove you from all correspondence.",
      },
      contact: {
        title: "Contacting Us",
        text: "If there are any questions regarding this privacy policy, you may contact us using the information below.",
        company: "Transporindo Agung Sejahtera",
        address: "Jl. Gorontalo III No. 10, Tanjung Priok – Jakarta Utara 14400, Indonesia",
      },
    },
  },
  id: {
    title: "Kebijakan Privasi",
    subtitle: "Selamat datang di Transporindo Agung Sejahtera",
    backButton: "Kembali ke Beranda",
    sections: {
      intro: {
        text: "Kebijakan privasi ini telah disusun untuk melayani mereka yang peduli tentang bagaimana 'Informasi Identitas Pribadi' (PII) mereka digunakan secara online. PII, sebagaimana dijelaskan dalam hukum privasi dan keamanan informasi, adalah informasi yang dapat digunakan sendiri atau dengan informasi lain untuk mengidentifikasi, menghubungi, atau menemukan seseorang, atau untuk mengidentifikasi individu dalam konteks tertentu. Harap baca kebijakan privasi kami dengan cermat untuk mendapatkan pemahaman yang jelas tentang bagaimana kami mengumpulkan, menggunakan, melindungi, atau menangani Informasi Identitas Pribadi Anda sesuai dengan situs web kami.",
      },
      collection: {
        title:
          "Informasi pribadi apa yang kami kumpulkan dari orang-orang yang mengunjungi blog, situs web, atau aplikasi kami?",
        text: "Saat memesan atau mendaftar di situs kami, sebagaimana mestinya, Anda mungkin diminta untuk memasukkan nama, alamat email, alamat surat, nomor telepon, informasi kartu kredit, atau detail lain untuk membantu pengalaman Anda.",
      },
      when: {
        title: "Kapan kami mengumpulkan informasi?",
        text: "Kami mengumpulkan informasi dari Anda ketika Anda melakukan pemesanan, berlangganan buletin, menanggapi survei, mengisi formulir, atau memasukkan informasi di situs kami.",
      },
      usage: {
        title: "Bagaimana kami menggunakan informasi Anda?",
        intro:
          "Kami dapat menggunakan informasi yang kami kumpulkan dari Anda saat Anda mendaftar, melakukan pembelian, mendaftar buletin kami, menanggapi survei atau komunikasi pemasaran, menjelajahi situs web, atau menggunakan fitur situs tertentu lainnya dengan cara berikut:",
        items: [
          "Untuk mengelola kontes, promosi, survei, atau fitur situs lainnya.",
          "Untuk memproses transaksi Anda dengan cepat.",
          "Untuk mengirim email berkala mengenai pesanan Anda atau produk dan layanan lainnya.",
          "Untuk menindaklanjuti setelah korespondensi (obrolan langsung, email, atau pertanyaan telepon)",
        ],
      },
      protection: {
        title: "Bagaimana kami melindungi informasi Anda?",
        text1:
          "Informasi pribadi Anda terkandung di balik jaringan yang aman dan hanya dapat diakses oleh sejumlah orang terbatas yang memiliki hak akses khusus ke sistem tersebut, dan diharuskan untuk menjaga kerahasiaan informasi. Selain itu, semua informasi sensitif/kredit yang Anda berikan dienkripsi melalui teknologi Secure Socket Layer (SSL).",
        text2:
          "Kami menerapkan berbagai langkah keamanan ketika pengguna melakukan pemesanan untuk menjaga keamanan informasi pribadi Anda.",
        text3: "Semua transaksi diproses melalui penyedia gateway dan tidak disimpan atau diproses di server kami.",
      },
      cookies: {
        title: "Apakah kami menggunakan 'cookie'?",
        text1:
          "Ya. Cookie adalah file kecil yang ditransfer oleh situs atau penyedia layanannya ke hard drive komputer Anda melalui browser Web Anda (jika Anda mengizinkan) yang memungkinkan sistem situs atau penyedia layanan untuk mengenali browser Anda dan menangkap serta mengingat informasi tertentu.",
        text2:
          "Misalnya, kami menggunakan cookie untuk membantu kami mengingat dan memproses item di keranjang belanja Anda. Cookie juga digunakan untuk membantu kami memahami preferensi Anda berdasarkan aktivitas situs sebelumnya atau saat ini, yang memungkinkan kami memberi Anda layanan yang lebih baik. Kami juga menggunakan cookie untuk membantu kami menyusun data agregat tentang lalu lintas situs dan interaksi situs sehingga kami dapat menawarkan pengalaman dan alat situs yang lebih baik di masa depan. Kami menggunakan cookie untuk:",
        items: [
          "Membantu mengingat dan memproses item di keranjang belanja.",
          "Memahami dan menyimpan preferensi pengguna untuk kunjungan mendatang.",
          "Melacak iklan.",
          "Menyusun data agregat tentang lalu lintas situs dan interaksi situs untuk menawarkan pengalaman dan alat situs yang lebih baik di masa depan. Kami juga dapat menggunakan layanan pihak ketiga tepercaya yang melacak informasi ini atas nama kami.",
        ],
        text3:
          "Anda dapat memilih agar komputer Anda memperingatkan Anda setiap kali cookie dikirim, atau Anda dapat memilih untuk menonaktifkan semua cookie. Anda melakukan ini melalui pengaturan browser Anda. Karena setiap browser sedikit berbeda, lihat Menu Bantuan browser Anda untuk mempelajari cara yang benar untuk memodifikasi cookie Anda.",
        text4: "Jika Anda menonaktifkan cookie, itu tidak akan memengaruhi pengalaman pengguna.",
      },
      thirdParty: {
        title: "Pengungkapan Pihak Ketiga",
        text1:
          "Kami tidak menjual, memperdagangkan, atau mentransfer Informasi Identitas Pribadi Anda ke pihak luar kecuali kami memberikan pemberitahuan terlebih dahulu kepada pengguna. Ini tidak termasuk mitra hosting situs web dan pihak lain yang membantu kami dalam mengoperasikan situs web kami, menjalankan bisnis kami, atau melayani pengguna kami, selama pihak-pihak tersebut setuju untuk menjaga kerahasiaan informasi ini.",
        text2:
          "Kami juga dapat merilis informasi ketika perilisannya sesuai untuk mematuhi hukum, menegakkan kebijakan situs kami, atau melindungi hak, properti, atau keselamatan kami atau orang lain. Namun, informasi pengunjung yang tidak dapat diidentifikasi secara pribadi dapat diberikan kepada pihak lain untuk tujuan pemasaran, periklanan, atau penggunaan lainnya.",
      },
      thirdPartyLinks: {
        title: "Tautan Pihak Ketiga",
        text: "Kadang-kadang, atas kebijakan kami, kami dapat menyertakan atau menawarkan produk atau layanan pihak ketiga di situs web kami. Situs pihak ketiga ini memiliki kebijakan privasi yang terpisah dan independen. Oleh karena itu, kami tidak memiliki tanggung jawab atau kewajiban atas konten dan aktivitas dari situs tertaut ini. Meskipun demikian, kami berupaya melindungi integritas situs kami dan menyambut umpan balik apa pun tentang situs-situs ini.",
      },
      google: {
        title: "Google",
        text1:
          "Persyaratan iklan Google dapat diringkas dengan Prinsip Periklanan Google. Prinsip-prinsip ini diterapkan untuk memberikan pengalaman positif bagi pengguna.",
        text2: "Kami telah menerapkan hal-hal berikut:",
        items: ["Remarketing", "Pelaporan Tayangan Jaringan Display Google", "Pelaporan Demografi dan Minat"],
        text3:
          "Kami, bersama dengan vendor pihak ketiga seperti Google, menggunakan cookie pihak pertama (seperti cookie Google Analytics) dan cookie pihak ketiga (seperti cookie DoubleClick) atau pengidentifikasi pihak ketiga lainnya bersama-sama untuk menyusun data mengenai interaksi pengguna dengan tayangan iklan dan fungsi layanan iklan lainnya yang berkaitan dengan situs web kami.",
        optOutTitle: "Memilih Keluar",
        optOutText:
          "Pengguna dapat mengatur preferensi tentang bagaimana Google beriklan kepada Anda menggunakan halaman Pengaturan Iklan Google. Atau, Anda dapat memilih keluar dengan mengunjungi halaman Network Advertising Initiative Opt Out atau dengan menggunakan add-on Browser Opt Out Google Analytics.",
      },
      fairPractices: {
        title: "Praktik Informasi yang Adil",
        text: "Prinsip Praktik Informasi yang Adil membentuk tulang punggung hukum privasi dan konsep yang mereka sertakan telah memainkan peran penting dalam pengembangan undang-undang perlindungan data di seluruh dunia. Memahami Prinsip Praktik Informasi yang Adil dan bagaimana mereka harus diterapkan sangat penting untuk mematuhi berbagai undang-undang privasi yang melindungi informasi pribadi.",
      },
      canSpam: {
        title: "Undang-Undang CAN SPAM",
        text1:
          "Undang-Undang CAN-SPAM adalah hukum yang menetapkan aturan untuk email komersial, menetapkan persyaratan untuk pesan komersial, memberi penerima hak untuk menghentikan pengiriman email kepada mereka.",
        text2: "Kami mengumpulkan alamat email Anda untuk:",
        items1: [
          "Mengirim informasi, menanggapi pertanyaan, dan/atau permintaan atau pertanyaan lainnya",
          "Memproses pesanan dan mengirim informasi dan pembaruan yang berkaitan dengan pesanan.",
          "Mengirimkan informasi tambahan terkait produk dan/atau layanan Anda",
          "Memasarkan ke daftar email kami atau terus mengirim email ke klien kami setelah transaksi asli terjadi.",
        ],
        text3: "Untuk mematuhi CANSPAM, kami setuju dengan hal-hal berikut:",
        items2: [
          "Tidak menggunakan subjek atau alamat email yang salah atau menyesatkan.",
          "Mengidentifikasi pesan sebagai iklan dengan cara yang wajar.",
          "Menyertakan alamat fisik bisnis atau kantor pusat situs kami.",
          "Memantau layanan pemasaran email pihak ketiga untuk kepatuhan, jika digunakan.",
          "Menghormati permintaan berhenti berlangganan/unsubscribe dengan cepat.",
          "Mengizinkan pengguna untuk berhenti berlangganan dengan menggunakan tautan di bagian bawah setiap email.",
        ],
        text4:
          "Jika Anda ingin berhenti berlangganan dari menerima email di masa mendatang, ikuti instruksi di bagian bawah setiap email dan kami akan segera menghapus Anda dari semua korespondensi.",
      },
      contact: {
        title: "Menghubungi Kami",
        text: "Jika ada pertanyaan mengenai kebijakan privasi ini, Anda dapat menghubungi kami menggunakan informasi di bawah ini.",
        company: "Transporindo Agung Sejahtera",
        address: "Jl. Gorontalo III No. 10, Tanjung Priok – Jakarta Utara 14400, Indonesia",
      },
    },
  },
};

export default function PrivacyPolicy() {
  const pathname = usePathname();
  const isIndonesian = pathname?.startsWith("/id");
  const lang = isIndonesian ? "id" : "en";
  const t = content[lang];

  return (
    <main className={`min-h-screen bg-slate-50 pt-20 md:pt-12 ${inter.className}`}>
      <motion.div
        className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        {/* Header */}
        <div className="mb-10 border-b border-slate-100 pb-8">
          <Image src="/Logo-Transporindo.png" alt="Transporindo Logo" height={450} width={350} />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 tracking-tight">{t.title}</h1>
          <p className="text-slate-500 text-sm">{t.subtitle}</p>
        </div>

        {/* Content Wrapper */}
        <div className="space-y-8 text-slate-600 text-sm md:text-[15px] leading-relaxed">
          {/* Introduction */}
          <section>
            <p>{t.sections.intro.text}</p>
          </section>

          {/* Collection */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.collection.title}</h2>
            <p>{t.sections.collection.text}</p>
          </section>

          {/* When */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.when.title}</h2>
            <p>{t.sections.when.text}</p>
          </section>

          {/* Usage */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.usage.title}</h2>
            <p className="mb-4">{t.sections.usage.intro}</p>
            <ul className="list-disc pl-5 space-y-2">
              {t.sections.usage.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Protection */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.protection.title}</h2>
            <p className="mb-4">{t.sections.protection.text1}</p>
            <p className="mb-4">{t.sections.protection.text2}</p>
            <p>{t.sections.protection.text3}</p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.cookies.title}</h2>
            <p className="mb-4">{t.sections.cookies.text1}</p>
            <p className="mb-4">{t.sections.cookies.text2}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {t.sections.cookies.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mb-4">{t.sections.cookies.text3}</p>
            <p>{t.sections.cookies.text4}</p>
          </section>

          {/* Third-party Disclosure */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.thirdParty.title}</h2>
            <p className="mb-4">{t.sections.thirdParty.text1}</p>
            <p>{t.sections.thirdParty.text2}</p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.thirdPartyLinks.title}</h2>
            <p>{t.sections.thirdPartyLinks.text}</p>
          </section>

          {/* Google */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.google.title}</h2>
            <p className="mb-4">{t.sections.google.text1}</p>
            <p className="mb-2 font-semibold">{t.sections.google.text2}</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              {t.sections.google.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mb-6">{t.sections.google.text3}</p>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">{t.sections.google.optOutTitle}</h3>
              <p>{t.sections.google.optOutText}</p>
            </div>
          </section>

          {/* Fair Information Practices */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.fairPractices.title}</h2>
            <p>{t.sections.fairPractices.text}</p>
          </section>

          {/* CAN SPAM Act */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.canSpam.title}</h2>
            <p className="mb-4">{t.sections.canSpam.text1}</p>
            <p className="mb-2 font-semibold">{t.sections.canSpam.text2}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {t.sections.canSpam.items1.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mb-2 font-semibold">{t.sections.canSpam.text3}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {t.sections.canSpam.items2.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{t.sections.canSpam.text4}</p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.contact.title}</h2>
            <p className="mb-4">{t.sections.contact.text}</p>
            <p className="font-medium text-slate-800">
              {t.sections.contact.company}
              <br />
              {t.sections.contact.address}
            </p>
          </section>
        </div>

        {/* Footer / Back Button */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center">
          <Link href={isIndonesian ? "/id" : "/en"}>
            <button className="text-sm font-medium text-slate-400 hover:text-red-500 transition-colors cursor-pointer">
              &larr; {t.backButton}
            </button>
          </Link>
        </div>
      </motion.div>
      <Footer />
    </main>
  );
}
