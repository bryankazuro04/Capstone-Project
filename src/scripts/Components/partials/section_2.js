class DestionationRecommendation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container">
      <div class="row mb-4 pt-4 mt-0">
        <div class="col text-center">
          <h2 class="fw-bold">Rekomendasi Destinasi Wisata</h2>
        </div>
      </div>

      <div class="row mb-4 g-4">
        <div class="col-lg-4">
          <div class="card">
            <img class="card-img-top card-1" src="./media/Pantai_Amai.jpg" alt="Pantai_Amai" />

            <div class="card-body">
              <h4 class="card-title"><b>Pantai Amai</b></h4>

              <p class="card-text text-justify">
                Pantai ini memang cukup jauh dari keramaian kota Jayapura, namun itulah yang membuatnya sering kali di kunjungi oleh para wisatawan yang menginginkan ketenangan..
              </p>

              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <a href="./page/PantaiAmai.html" class="btn btn-danger justify-content-end">Read More</a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card">
            <img
              class="card-img-top card-1"
              src="./media/Pulau_Rubiah.jpg"
              alt="Pulau_Rubiah"
            />

            <div class="card-body">
              <h4 class="card-title"><b>Pulau Rubiah</b></h4>

              <p class="card-text">
                Pulau Rubiah dapat dikatakan sebagai tempat surganya taman
                laut bagi para wisatawan yang hobi menyelam. Nama pulau
                Rubiah sendiri diambil dari nama seorang yang bernama Cut
                Nyak Rubiah yang makamnya dapat Andatemukan di pulau
                tersebut.Wisata Pulau Rubiah saat ini merupakan sebuah
                pulau yang tidak berpenghuni. Walau begitu jangan
                khawatir, di pulau ini Anda masih menemukan sebuah warung
                kecil yang menjual makanan dan minuman yang bisa Anda
                beli. Pulau ini selalu ramai dikunjungi oleh wisatawan,
                baik wisatawan domestik maupun wisatawan mancanegara
                terlebih jika hari libur.
              </p>

              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <a
                  href="./page/PulauRubiah.html"
                  class="btn btn-danger justify-content-end"
                  >Read More</a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card">
            <img
              class="card-img-top card-1"
              src="./media/Bukit_Kelam.jpg"
              alt="Bukit_Kelam"
            />

            <div class="card-body">
              <h4 class="card-title"><b>Bukit Kelam</b></h4>

              <p class="card-text">
                Nama Bukit Kelam memang telah lama masyhur di kalangan
                peneliti botani. Salah satu penyebabnya bukit batu ini
                menjadi rumah bagi 14 spesies kantong semar yang berbeda,
                salah satunya yang endemik dan terancam punah adalah jenis
                Nepenthes clipeata. Sangat sulit menjangkau tumbuhan
                kantong semar yang hidup di sini, karena mereka biasanya
                berada di sisi tebing vertikal pada ketinggian antara 500
                dan 800 meter. Selain Kantong Semar, Bukit Kelam juga
                menjadi hunian bagi tanaman anggrek hitam, beruang madu,
                trenggiling, sampai burung walet. Tentu saja ada cerita
                rakyat yang menyelimuti eksistensi Bukit Kelam, sama
                seperti yang terjadi pada Gunung Tangkuban Perahu di Jawa
                Barat.
              </p>

              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <a
                  href="./page/BukitKelam.html"
                  class="btn btn-danger justify-content-end"
                  >Read More</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("destination-recommendation", DestionationRecommendation);
