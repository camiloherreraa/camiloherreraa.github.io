// Manejar el evento clic del botón después de que la página se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón
    var btnGenerarPdf = document.getElementById('btn-generar-pdf');

    // Manejar el evento clic del botón
    btnGenerarPdf.addEventListener('click', function() {
      // Configurar las opciones para el PDF
      var options = {
        filename: 'pagina.pdf',  // Nombre del archivo PDF
        html2canvas: {},          // Opciones para html2canvas
        jsPDF: {}                 // Opciones para jsPDF
      };

      // Seleccionar el contenido que se va a convertir a PDF
      var contenido = document.getElementsByTagName('body')[0];

      // Generar el PDF
      html2pdf()
        .from(contenido)
        .set(options)
        .save();
    });
  });