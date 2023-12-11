const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("sc-icn");

// Pencarian ketika ikon search diklik
searchIcon.addEventListener("click", function () {
  performSearch();
});

// Pencarian saat tombol "Enter" ditekan pada input
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

function performSearch() {
  const searchText = searchInput.value.trim().toLowerCase();
  const targetElement = document.getElementById(searchText);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

///////////////////////////////////////////////////////

function sendMessage() {
  const nama = document.getElementById("nama").value;
  const message = document.getElementById("message").value;

  if (nama && message) {
    alert(`Hello ${nama}, your message has been sent.`);
    document.getElementById("nama").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("message").value = "";

    console.log("Pesan anda berhasil terkirim :" + message);
  } else {
    alert("Mohon lengkapi semua kolom sebelum mengirim pesan:)");
  }
}
