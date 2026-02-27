function baixarPDF() {

    const element = document.querySelector(".page");

    // Salva cores originais
    const originalBodyBg = document.body.style.background;
    const originalBodyColor = document.body.style.color;

    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");

    const originalSidebarBg = sidebar.style.background;
    const originalMainBg = main.style.background;

    // Aplica modo branco temporário
    document.body.style.background = "#ffffff";
    document.body.style.color = "#000000";

    sidebar.style.background = "#ffffff";
    sidebar.style.color = "#000000";

    main.style.background = "#ffffff";
    main.style.color = "#000000";

    // Esconde botões
    const botoes = document.querySelectorAll('.no-print');
    botoes.forEach(btn => btn.style.display = "none");

    const opt = {
        margin: 5,
        filename: 'Gabriel_Machry_Curriculo.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {

            // Restaura cores originais
            document.body.style.background = originalBodyBg;
            document.body.style.color = originalBodyColor;

            sidebar.style.background = originalSidebarBg;
            main.style.background = originalMainBg;

            botoes.forEach(btn => btn.style.display = "inline-block");
        });
}
