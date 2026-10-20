import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-r-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Kenali Saya Lebih Jauh sebagai Adityas</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">hi, aku adityas</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya merupakan lulusan S1 Informatika Universitas Teknokrat
            Indonesia dengan IPK 3,54. Memiliki pemahaman dasar jaringan
            komputer, troubleshooting perangkat keras dan perangkat lunak, serta
            pengelolaan sistem dan data. Memiliki pengalaman dalam mendukung
            kegiatan operasional, administrasi, dokumentasi, dan penggunaan
            teknologi informasi. Saya adalah pribadi yang teliti, disiplin,
            bertanggung jawab, mampu bekerja secara mandiri maupun dalam tim,
            serta memiliki motivasi tinggi untuk terus mengembangkan kemampuan
            di bidang IT Network dan Technical Support.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="https://drive.google.com/drive/folders/1Rk4VZLlzUZ0tzemQDOn1C-cgJyMVQskr?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-900 p-4 rounded-2xl hover:bg-rose-800"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>

        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-2s"
          loading="lazy"
        />
      </div>
      {/* tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Halo, perkenalkan saya Aditya Saputra, seorang lulusan Informatika
            yang memiliki minat dan keahlian di bidang Web Development, UI/UX
            Design, dan Digital Creative. Saya memiliki ketertarikan dalam
            membangun website yang fungsional, responsif, dan mudah digunakan,
            serta merancang antarmuka yang menarik dengan memperhatikan
            pengalaman pengguna. Selain itu, saya juga memiliki kemampuan dalam
            editing foto dan video, desain grafis, serta 3D modeling. Saya terus
            mengembangkan keterampilan di bidang teknologi dan kreatif, termasuk
            HTML, CSS, JavaScript, React, Laravel, dan MySQL, untuk menghasilkan
            solusi digital yang inovatif, kreatif, dan bermanfaat.
          </p>
          <div className=" flex items-center justify-between">
            <img
              src={DataImage.TitleImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  10<span className="text-sky-700">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-sky-700">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Berikut ini beberapa tools yang sering saya gunakan dalam
            pengembangan proyek:
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tools) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tools.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tools.dad}
                data-aos-once="true"
              >
                <img
                  src={tools.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tools.nama}</h4>
                  <p className="opacity-50">{tools.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* tentang */}

      {/* proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          proyek
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          berikut hasil proyek yang telah saya kerjakan
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="Proyek gambar" loading="lazy" />
              <h1 className="text-2xl font-bold mb-2">{proyek.nama}</h1>
              <p className="text-base/loose mb-4 opacity-50">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <p
                    className="py-1 px-3 border border-zinc-600 bg-zinc-800 rounded-md font-semibold"
                    key={index}
                  >
                    {tool}
                  </p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href={proyek.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-700 p-3 rounded-lg block border border-zinc-600 hover:bg-sky-900"
                >
                  Lihat Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* proyek */}

      {/* kontak */}

      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Let's Connect!
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Saya terbuka untuk peluang kerja, kolaborasi, dan proyek di bidang
          teknologi informasi maupun industri kreatif.
        </p>
        <form
          action="https://formsubmit.co/adityasaputraa717@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-bold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama"
                className="border border-zinc-700 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email"
                className="border border-zinc-700 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="pesan">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                className="border border-zinc-700 p-2 rounded-md"
                placeholder="Masukkan Pesan"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-sky-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-sky-900"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* close kontak */}
    </>
  );
}

export default App;
