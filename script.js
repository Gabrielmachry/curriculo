function baixarPDF() {

    const elemento = document.querySelector(".container");

    // Salva cores atuais
    const originalBg = document.body.style.background;
    const originalColor = document.body.style.color;

    // Aplica modo impressão
    document.body.style.background = "#ffffff";
    document.body.style.color = "#000000";

    elemento.style.background = "#ffffff";
    elemento.style.color = "#000000";

    const botoes = document.querySelector(".no-print");
    if (botoes) botoes.style.display = "none";

    const opt = {
        margin:       0.3,
        filename:     'Gabriel_Machry_Curriculo.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(elemento).save().then(() => {

        // Restaura visual original
        document.body.style.background = originalBg;
        document.body.style.color = originalColor;
        elemento.style.background = "";
        elemento.style.color = "";
        if (botoes) botoes.style.display = "flex";

    });
}
