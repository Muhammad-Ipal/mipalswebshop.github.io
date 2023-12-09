// Mengambil elemen input dan ikon search
const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("sc-icn");

// Menangani pencarian ketika ikon search diklik
searchIcon.addEventListener("click", function () {
  const searchText = searchInput.value.trim().toLowerCase();
  performSearch(searchText);
});

function performSearch(text) {
  const targetElement = document.getElementById(text);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  } else {
    console.log("ID tidak ditemukan");
  }
}

///////////////////////////////////////////////////////

function clearFields() {
  let inputs = document.querySelectorAll(".contact-input");
  inputs.forEach(function (input) {
    input.value = "";
  });

  let textarea = document.querySelector(".textarea");
  textarea.value = "";

  alert("Pesan Terkirim");
}

///////////////////////////////////////////////////////
