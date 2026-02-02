function verEcard() {
  alert("Mostrando la eCard del estudiante...");
}

function enviarEmail() {
  const email = prompt("Ingrese el correo electrónico:");
  if (email) {
    alert("La eCard fue enviada a: " + email);
  }
}

function descargarPDF() {
  alert("Simulación de descarga de la eCard en PDF");
}

function togglePDF() {
  const viewer = document.getElementById("pdfViewer");
  const button = document.getElementById("btnVerEcard");

  if (viewer.style.display === "none" || viewer.style.display === "") {
    // ABRIR
    viewer.src = "bazan.pdf";   // tu PDF
    viewer.style.display = "block";
    button.textContent = "Cerrar eCard";
  } else {
    // CERRAR
    viewer.style.display = "none";
    viewer.src = "";            // limpia el PDF
    button.textContent = "Ver eCard";

    button.scrollIntoView({ behavior: "smooth" });

  }
}
