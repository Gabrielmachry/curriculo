function baixarPDF() {

    const element = document.querySelector(".page");

    const opt = {
        margin: 5,
        filename: 'Gabriel_Machry_Curriculo.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    const botoes = document.querySelectorAll('.no-print');
    botoes.forEach(btn => btn.style.display = "none");

    html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
            botoes.forEach(btn => btn.style.display = "inline-block");
        });
}
