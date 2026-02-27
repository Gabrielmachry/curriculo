function baixarPDF() {

    const elemento = document.body;

    const botoes = document.querySelectorAll(".no-print");

    // Esconde botões
    botoes.forEach(btn => btn.style.display = "none");

    // Salva fundo original
    const originalBg = document.body.style.background;
    const originalColor = document.body.style.color;

    // Aplica modo branco
    document.body.style.background = "#ffffff";
    document.body.style.color = "#000000";

    const opt = {
        margin: 0.3,
        filename: 'Gabriel_Machry_Curriculo.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(elemento).save().then(() => {

        // Restaura visual
        document.body.style.background = originalBg;
        document.body.style.color = originalColor;

        botoes.forEach(btn => btn.style.display = "inline-block");

    });
}
