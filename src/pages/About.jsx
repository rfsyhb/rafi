import React from 'react';

function About() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row p-8 gap-8 md:gap-20">
        <div>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            Selamat datang di ABC Food, sebuah startup di industri kuliner yang
            didirikan untuk membawa hidangan lezat dan sehat ke setiap orang.
            Perjalanan kami dimulai dengan semangat terhadap makanan dan
            keinginan untuk berbagi semangat tersebut dengan dunia. Kami
            berkomitmen untuk memberikan kualitas terbaik dan kepuasan
            pelanggan, memastikan bahwa setiap hidangan yang kami sajikan adalah
            pengalaman yang menyenangkan.
          </p>
          <p className="mb-4">
            <strong>Sejarah Kami:</strong> ABC Food didirikan pada tahun 2020
            oleh sekelompok teman yang memiliki gairah yang sama terhadap
            kuliner. Dengan latar belakang yang beragam dalam kuliner dan
            bisnis, kami menyatukan keahlian kami untuk menciptakan sesuatu yang
            istimewa. Dalam waktu singkat, kami berhasil membuka beberapa cabang
            dan mendapatkan pengakuan atas kualitas dan kreativitas hidangan
            kami.
          </p>
        </div>
        <img
          src="https://i.pinimg.com/736x/54/8f/ca/548fca45c8e94af319375e421a1aadf1.jpg"
          alt="Menu Item 1"
          className="w-full md:w-[40%] h-[25rem] object-cover rounded mb-4 hover:shadow-xl"
        />
      </div>
      <div className="flex flex-col md:flex-row mb-4 gap-8 px-2">
        <p className="p-4 rounded-md outline w-full md:w-[30%]">
          <strong>Visi Kami:</strong> Menjadi penyedia hidangan gourmet
          terkemuka yang dikenal karena inovasi dan kualitas. Kami bercita-cita
          untuk menciptakan pengalaman bersantap yang tak terlupakan bagi setiap
          pelanggan, menginspirasi mereka untuk menjelajahi dunia kuliner dengan
          cara yang baru dan menyenangkan.
        </p>
        <p className="p-4 rounded-md outline outline-2 w-full md:w-[70%]">
          <strong>Misi Kami:</strong> Untuk mencapai visi kami, kami berkomitmen
          untuk:
          <ul className="list-disc ml-6">
            <li>
              Menggunakan bahan-bahan berkualitas tinggi yang segar dan sehat.
            </li>
            <li>
              Mengembangkan resep-resep inovatif yang menggabungkan cita rasa
              lokal dan internasional.
            </li>
            <li>
              Memberikan layanan pelanggan yang luar biasa dan memastikan
              kepuasan pelanggan di setiap langkah.
            </li>
            <li>
              Menyediakan lingkungan kerja yang mendukung bagi karyawan kami,
              mendorong kreativitas dan pengembangan profesional.
            </li>
          </ul>
        </p>
      </div>

      <p>
        Bergabunglah dengan kami dalam perjalanan kuliner ini dan temukan
        kebahagiaan menikmati makanan yang luar biasa bersama ABC Food. Kami
        berharap dapat melayani Anda dan membuat setiap hidangan menjadi
        pengalaman yang berharga.
      </p>
    </div>
  );
}

export default About;
