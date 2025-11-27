"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import Image from "next/image";
import Footer from "@/app/components/client/Footer";

const inter = Inter({ subsets: ["latin"] });

// Translation content
const content = {
  en: {
    title: "Terms and Conditions",
    subtitle: "Welcome to Transporindo Agung Sejahtera",
    backButton: "Back to Home",
    sections: {
      intro: {
        text1:
          "These terms and conditions outline the rules and regulations for the use of Transporindo Agung Sejahtera's Website.",
        text2: "Transporindo Agung Sejahtera is located at:",
        address: "Jl. Gorontalo III No. 10 Tanjung Priok, Jakarta – 14400, Indonesia",
        text3:
          "By accessing this website we assume you accept these terms and conditions in full. Do not continue to use Transporindo Agung Sejahtera's website if you do not accept all of the terms and conditions stated on this page.",
      },
      terminology: {
        title: "Terminology",
        intro:
          "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements:",
        items: [
          '"Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company\'s terms and conditions.',
          '"The Company", "Ourselves", "We", "Our" and "Us", refer to our Company.',
          '"Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves.',
        ],
        closing:
          "All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services/products, in accordance with and subject to, prevailing law of Indonesia. Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.",
      },
      cookies: {
        title: "Cookies",
        text1:
          "We employ the use of cookies. By using Transporindo Agung Sejahtera's website you consent to the use of cookies in accordance with Transporindo Agung Sejahtera's privacy policy.",
        text2:
          "Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.",
      },
      license: {
        title: "License",
        text1:
          "Unless otherwise stated, Transporindo Agung Sejahtera and/or it's licensors own the intellectual property rights for all material on Transporindo Agung Sejahtera. All intellectual property rights are reserved. You may view and/or print pages from",
        text2: "for your own personal use subject to restrictions set in these terms and conditions.",
        mustNot: "You must not:",
        items: [
          "Republish material from https://transporindo.id",
          "Sell, rent or sub-license material from https://transporindo.id",
          "Reproduce, duplicate or copy material from https://transporindo.id",
          "Redistribute content from Transporindo Agung Sejahtera (unless content is specifically made for redistribution).",
        ],
      },
      hyperlinking: {
        title: "Hyperlinking to our Content",
        intro: "The following organizations may link to our Web site without prior written approval:",
        orgs1: [
          "Government agencies;",
          "Search engines;",
          "News organizations;",
          "Online directory distributors when they list us in the directory may link to our Web site in the same manner as they hyperlink to the Web sites of other listed businesses; and",
          "Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.",
        ],
        text1:
          "These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.",
        text2:
          "We may consider and approve in our sole discretion other link requests from the following types of organizations:",
        orgs2: [
          "Commonly-known consumer and/or business information sources such as Chambers of Commerce and Consumers Union;",
          "Dot.com community sites;",
          "Associations or other groups representing charities, including charity giving sites, online directory distributors;",
          "Internet portals;",
          "Accounting, law and consulting firms whose primary clients are businesses; and",
          "Educational institutions and trade associations.",
        ],
        boxText1:
          "If you are among the organizations listed above and are interested in linking to our website, you must notify us by sending an e-mail to",
        boxText2:
          "Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.",
        approvedTitle: "Approved organizations may hyperlink to our Web site as follows:",
        approvedItems: [
          "By use of our corporate name; or",
          "By use of the uniform resource locator (Web address) being linked to; or",
          "By use of any other description of our Web site or material being linked to that makes sense within the context and format of content on the linking party's site.",
        ],
        warning:
          "No use of Transporindo Agung Sejahtera's logo or other artwork will be allowed for linking absent a trademark license agreement.",
      },
      iframes: {
        title: "Iframes",
        text: "Without prior approval and express written permission, you may not create frames around our Web pages or use other techniques that alter in any way the visual presentation or appearance of our Web site.",
      },
      reservation: {
        title: "Reservation of Rights",
        text: "We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.",
      },
      removal: {
        title: "Removal of links from our website",
        text1:
          "If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you.",
        text2:
          "Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date.",
      },
      contentLiability: {
        title: "Content Liability",
        text: "We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.",
      },
      disclaimer: {
        title: "Disclaimer",
        text: "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill).",
      },
    },
  },
  id: {
    title: "Syarat dan Ketentuan",
    subtitle: "Selamat datang di Transporindo Agung Sejahtera",
    backButton: "Kembali ke Beranda",
    sections: {
      intro: {
        text1:
          "Syarat dan ketentuan ini menguraikan aturan dan regulasi untuk penggunaan situs web Transporindo Agung Sejahtera.",
        text2: "Transporindo Agung Sejahtera berlokasi di:",
        address: "Jl. Gorontalo III No. 10 Tanjung Priok, Jakarta – 14400, Indonesia",
        text3:
          "Dengan mengakses situs web ini, kami menganggap Anda menerima syarat dan ketentuan ini secara penuh. Jangan lanjutkan menggunakan situs web Transporindo Agung Sejahtera jika Anda tidak menerima semua syarat dan ketentuan yang tercantum di halaman ini.",
      },
      terminology: {
        title: "Terminologi",
        intro:
          "Terminologi berikut berlaku untuk Syarat dan Ketentuan ini, Pernyataan Privasi dan Pemberitahuan Penafian serta semua Perjanjian:",
        items: [
          '"Klien", "Anda" dan "Milik Anda" mengacu pada Anda, orang yang mengakses situs web ini dan menerima syarat dan ketentuan Perusahaan.',
          '"Perusahaan", "Kami", "Milik Kami" dan "Kita", mengacu pada Perusahaan kami.',
          '"Pihak", "Para Pihak", atau "Kita", mengacu pada Klien dan kami, atau Klien atau kami.',
        ],
        closing:
          "Semua istilah mengacu pada penawaran, penerimaan dan pertimbangan pembayaran yang diperlukan untuk melakukan proses bantuan kami kepada Klien dengan cara yang paling sesuai, baik melalui pertemuan formal dengan durasi tetap, atau cara lain apa pun, untuk tujuan khusus memenuhi kebutuhan Klien dalam hal penyediaan layanan/produk yang dinyatakan Perusahaan, sesuai dengan dan tunduk pada hukum yang berlaku di Indonesia. Penggunaan terminologi di atas atau kata-kata lain dalam bentuk tunggal, jamak, kapitalisasi dan/atau dia (laki-laki/perempuan) atau mereka, dianggap dapat dipertukarkan dan oleh karena itu mengacu pada hal yang sama.",
      },
      cookies: {
        title: "Cookie",
        text1:
          "Kami menggunakan cookie. Dengan menggunakan situs web Transporindo Agung Sejahtera, Anda menyetujui penggunaan cookie sesuai dengan kebijakan privasi Transporindo Agung Sejahtera.",
        text2:
          "Sebagian besar situs web interaktif modern menggunakan cookie untuk memungkinkan kami mengambil detail pengguna untuk setiap kunjungan. Cookie digunakan di beberapa area situs kami untuk mengaktifkan fungsi area ini dan kemudahan penggunaan bagi mereka yang berkunjung. Beberapa mitra afiliasi/periklanan kami juga dapat menggunakan cookie.",
      },
      license: {
        title: "Lisensi",
        text1:
          "Kecuali dinyatakan lain, Transporindo Agung Sejahtera dan/atau pemberi lisensinya memiliki hak kekayaan intelektual untuk semua materi di Transporindo Agung Sejahtera. Semua hak kekayaan intelektual dilindungi. Anda dapat melihat dan/atau mencetak halaman dari",
        text2:
          "untuk penggunaan pribadi Anda sendiri dengan tunduk pada batasan yang ditetapkan dalam syarat dan ketentuan ini.",
        mustNot: "Anda tidak boleh:",
        items: [
          "Mempublikasikan ulang materi dari https://transporindo.id",
          "Menjual, menyewakan atau mensublisensikan materi dari https://transporindo.id",
          "Mereproduksi, menduplikasi atau menyalin materi dari https://transporindo.id",
          "Mendistribusikan ulang konten dari Transporindo Agung Sejahtera (kecuali konten secara khusus dibuat untuk redistribusi).",
        ],
      },
      hyperlinking: {
        title: "Hyperlink ke Konten Kami",
        intro: "Organisasi berikut dapat membuat tautan ke situs Web kami tanpa persetujuan tertulis sebelumnya:",
        orgs1: [
          "Lembaga pemerintah;",
          "Mesin pencari;",
          "Organisasi berita;",
          "Distributor direktori online ketika mereka mencantumkan kami di direktori dapat membuat tautan ke situs Web kami dengan cara yang sama seperti mereka membuat hyperlink ke situs Web bisnis lain yang terdaftar; dan",
          "Bisnis Terakreditasi Sistemwide kecuali organisasi nirlaba yang meminta, pusat perbelanjaan amal, dan kelompok penggalangan dana amal yang tidak boleh membuat hyperlink ke situs Web kami.",
        ],
        text1:
          "Organisasi-organisasi ini dapat membuat tautan ke beranda kami, ke publikasi atau ke informasi situs Web lainnya selama tautan: (a) tidak menyesatkan dengan cara apa pun; (b) tidak secara salah menyiratkan sponsor, dukungan atau persetujuan dari pihak yang menautkan dan produk atau layanannya; dan (c) sesuai dengan konteks situs pihak yang menautkan.",
        text2:
          "Kami dapat mempertimbangkan dan menyetujui atas kebijakan kami sendiri permintaan tautan lain dari jenis organisasi berikut:",
        orgs2: [
          "Sumber informasi konsumen dan/atau bisnis yang dikenal umum seperti Kamar Dagang dan Serikat Konsumen;",
          "Situs komunitas dot.com;",
          "Asosiasi atau kelompok lain yang mewakili badan amal, termasuk situs pemberian amal, distributor direktori online;",
          "Portal internet;",
          "Firma akuntansi, hukum dan konsultasi yang klien utamanya adalah bisnis; dan",
          "Institusi pendidikan dan asosiasi perdagangan.",
        ],
        boxText1:
          "Jika Anda termasuk dalam organisasi yang tercantum di atas dan tertarik untuk membuat tautan ke situs web kami, Anda harus memberi tahu kami dengan mengirim email ke",
        boxText2:
          "Harap sertakan nama Anda, nama organisasi Anda, informasi kontak (seperti nomor telepon dan/atau alamat email) serta URL situs Anda, daftar URL yang ingin Anda gunakan untuk membuat tautan ke situs Web kami, dan daftar URL di situs kami yang ingin Anda tautkan. Tunggu 2-3 minggu untuk mendapat tanggapan.",
        approvedTitle: "Organisasi yang disetujui dapat membuat hyperlink ke situs Web kami sebagai berikut:",
        approvedItems: [
          "Dengan menggunakan nama perusahaan kami; atau",
          "Dengan menggunakan uniform resource locator (alamat Web) yang ditautkan; atau",
          "Dengan menggunakan deskripsi lain dari situs Web atau materi kami yang ditautkan yang masuk akal dalam konteks dan format konten di situs pihak yang menautkan.",
        ],
        warning:
          "Tidak diperbolehkan penggunaan logo atau karya seni lain dari Transporindo Agung Sejahtera untuk menautkan tanpa perjanjian lisensi merek dagang.",
      },
      iframes: {
        title: "Iframe",
        text: "Tanpa persetujuan sebelumnya dan izin tertulis, Anda tidak boleh membuat frame di sekitar halaman Web kami atau menggunakan teknik lain yang mengubah dengan cara apa pun presentasi visual atau tampilan situs Web kami.",
      },
      reservation: {
        title: "Hak yang Dilindungi",
        text: "Kami berhak kapan saja dan atas kebijakan kami sendiri untuk meminta Anda menghapus semua tautan atau tautan tertentu ke situs Web kami. Anda setuju untuk segera menghapus semua tautan ke situs Web kami atas permintaan tersebut. Kami juga berhak untuk mengubah syarat dan ketentuan ini dan kebijakan penautan kapan saja. Dengan terus menautkan ke situs Web kami, Anda setuju untuk terikat dan mematuhi syarat dan ketentuan penautkan ini.",
      },
      removal: {
        title: "Penghapusan tautan dari situs web kami",
        text1:
          "Jika Anda menemukan tautan apa pun di situs Web kami atau situs web tertaut yang tidak pantas karena alasan apa pun, Anda dapat menghubungi kami tentang hal ini. Kami akan mempertimbangkan permintaan untuk menghapus tautan tetapi tidak memiliki kewajiban untuk melakukannya atau untuk merespons Anda secara langsung.",
        text2:
          "Meskipun kami berusaha memastikan bahwa informasi di situs web ini benar, kami tidak menjamin kelengkapan atau akurasinya; kami juga tidak berkomitmen untuk memastikan bahwa situs web tetap tersedia atau bahwa materi di situs web tetap diperbarui.",
      },
      contentLiability: {
        title: "Tanggung Jawab Konten",
        text: "Kami tidak memiliki tanggung jawab atau kewajiban untuk konten apa pun yang muncul di situs Web Anda. Anda setuju untuk mengganti rugi dan membela kami terhadap semua klaim yang timbul dari atau berdasarkan situs Web Anda. Tidak ada tautan yang boleh muncul di halaman mana pun di situs Web Anda atau dalam konteks apa pun yang berisi konten atau materi yang dapat ditafsirkan sebagai memfitnah, cabul atau kriminal, atau yang melanggar, melanggar, atau menganjurkan pelanggaran atau pelanggaran lain dari hak pihak ketiga mana pun.",
      },
      disclaimer: {
        title: "Penafian",
        text: "Sejauh maksimum yang diizinkan oleh hukum yang berlaku, kami mengecualikan semua pernyataan, jaminan dan kondisi yang berkaitan dengan situs web kami dan penggunaan situs web ini (termasuk, tanpa batasan, jaminan apa pun yang tersirat oleh hukum sehubungan dengan kualitas yang memuaskan, kesesuaian untuk tujuan dan/atau penggunaan perawatan dan keterampilan yang wajar).",
      },
    },
  },
};

export default function TermsAndConditions() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 my-4 tracking-tight">{t.title}</h1>
          <p className="text-slate-500 text-sm">{t.subtitle}</p>
        </div>

        {/* Content Wrapper */}
        <div className="space-y-8 text-slate-600 text-sm md:text-[15px] leading-relaxed">
          {/* Introduction */}
          <section>
            <p className="mb-4">{t.sections.intro.text1}</p>
            <p className="mb-4 font-medium text-slate-800">
              {t.sections.intro.text2}
              <br />
              {t.sections.intro.address}
            </p>
            <p>{t.sections.intro.text3}</p>
          </section>

          {/* Terminology */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.terminology.title}</h2>
            <p>{t.sections.terminology.intro}</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              {t.sections.terminology.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <p className="mt-4">{t.sections.terminology.closing}</p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.cookies.title}</h2>
            <p>{t.sections.cookies.text1}</p>
            <p className="mt-2">{t.sections.cookies.text2}</p>
          </section>

          {/* License */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.license.title}</h2>
            <p className="mb-4">
              {t.sections.license.text1}{" "}
              <a href="https://transporindo.id" className="text-blue-600 hover:underline">
                https://transporindo.id
              </a>{" "}
              {t.sections.license.text2}
            </p>
            <p className="font-semibold mb-2">{t.sections.license.mustNot}</p>
            <ul className="list-disc pl-5 space-y-2">
              {t.sections.license.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Hyperlinking */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.hyperlinking.title}</h2>
            <p className="mb-4">{t.sections.hyperlinking.intro}</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              {t.sections.hyperlinking.orgs1.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mb-4">{t.sections.hyperlinking.text1}</p>
            <p className="mb-4">{t.sections.hyperlinking.text2}</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              {t.sections.hyperlinking.orgs2.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-6">
              <p className="mb-4">
                {t.sections.hyperlinking.boxText1}{" "}
                <a href="mailto:calvin@transporindo.id" className="text-blue-600 font-medium hover:underline">
                  calvin@transporindo.id
                </a>
                .
              </p>
              <p>{t.sections.hyperlinking.boxText2}</p>
            </div>

            <p className="mb-2 font-semibold">{t.sections.hyperlinking.approvedTitle}</p>
            <ul className="list-disc pl-5 space-y-1">
              {t.sections.hyperlinking.approvedItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-red-500 text-xs font-medium uppercase tracking-wide">
              {t.sections.hyperlinking.warning}
            </p>
          </section>

          {/* Iframes */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.iframes.title}</h2>
            <p>{t.sections.iframes.text}</p>
          </section>

          {/* Reservation of Rights */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.reservation.title}</h2>
            <p>{t.sections.reservation.text}</p>
          </section>

          {/* Removal of links */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.removal.title}</h2>
            <p>{t.sections.removal.text1}</p>
            <p className="mt-2">{t.sections.removal.text2}</p>
          </section>

          {/* Content Liability */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.contentLiability.title}</h2>
            <p>{t.sections.contentLiability.text}</p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.sections.disclaimer.title}</h2>
            <p>{t.sections.disclaimer.text}</p>
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
