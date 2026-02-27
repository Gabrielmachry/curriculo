function baixarPDF() {

    const elemento = document.body;

    const opt = {
        margin: 0.5,
        filename: 'Gabriel_Machry_Curriculo.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    // Esconde botões antes de gerar
    const botoes = document.querySelectorAll('.no-print');
    botoes.forEach(btn => btn.style.display = "none");

    html2pdf()
        .set(opt)
        .from(elemento)
        .save()
        .then(() => {
            // Mostra os botões novamente
            botoes.forEach(btn => btn.style.display = "inline-block");
        });

}
