document.getElementById("cetak-pdf").onclick = function () {
  var element = document.getElementById("all-formulir");
  var opt = {
    margin: [0.5, 1, 0.5, 0.5],
    filename: "formulir_klaim_rawat_jalan.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  html2pdf().from(element).set(opt).save();
};

const data = [
  {
    no: 1,
    tanggal: "12/09/2024",
    nama: "Nabila Wijayanti",
    statusPasien: "dirawat",
    diagnosa: "dbd",
    jumlah: 1500000,
  },
  {
    no: 2,
    tanggal: "12/09/2024",
    nama: "Mustika Prakasa",
    statusPasien: "dirawat",
    diagnosa: "pusing",
    jumlah: 500000,
  },
  {
    no: 3,
    tanggal: "12/09/2024",
    nama: "Tira Halimah",
    statusPasien: "dirawat",
    diagnosa: "diare",
    jumlah: 800000,
  },
];

const dataList1 = document.getElementById("data-list1");
const dataList2 = document.getElementById("data-list2");
function mappingData(n) {
  data.map((d) => {
    const row = document.createElement("tr");

    Object.entries(d).forEach(([key, value]) => {
      const cell = document.createElement("td");
      if (key === "jumlah") {
        cell.textContent = `Rp ${value.toLocaleString("id-ID")}`; // Format ke mata uang Indonesia
      } else {
        cell.textContent = value;
      }
      row.appendChild(cell);
    });

    n.appendChild(row);
  });
}

mappingData(dataList1);
mappingData(dataList2);

const totalJumlah = data.reduce((total, item) => {
  return total + item.jumlah;
}, 0);

const total1 = document.getElementById("total-jumlah1");
total1.textContent = `Rp ${totalJumlah.toLocaleString("id-ID")}`;

const total2 = document.getElementById("total-jumlah2");
total2.textContent = `Rp ${totalJumlah.toLocaleString("id-ID")}`;

const printCetak = document.getElementById("cetak-print");
printCetak.addEventListener("click", () => {
  window.print();
});
