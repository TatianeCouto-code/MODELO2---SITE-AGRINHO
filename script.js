document.addEventListener("DOMContentLoaded", () => {
    // === LOGICA DE ALTO CONTRASTE ===
    const contrastToggle = document.querySelector(".contrast-toggle");
    
    // Verifica se o usuário já tinha ativado o contraste antes
    if (localStorage.getItem("high-contrast") === "true") {
        document.body.classList.add("high-contrast");
    }

    if (contrastToggle) {
        contrastToggle.addEventListener("click", () => {
            // Alterna a classe no body
            const isHighContrast = document.body.classList.toggle("high-contrast");
            // Salva a escolha do usuário
            localStorage.setItem("high-contrast", isHighContrast);
        });
    }

    // === LÓGICA DE AUMENTO DE FONTE ===
    const fontIncrease = document.querySelector(".font-increase");
    const fontDecrease = document.querySelector(".font-decrease");
    
    // Pega o tamanho atual do HTML (definido como 16px no seu CSS) ou recupera do localStorage
    let currentSize = parseInt(localStorage.getItem("font-size")) || 16;
    
    // Aplica o tamanho salvo ao carregar a página
    document.documentElement.style.fontSize = `${currentSize}px`;

    if (fontIncrease) {
        fontIncrease.addEventListener("click", () => {
            if (currentSize < 24) { // Limite máximo de segurança
                currentSize += 2;
                document.documentElement.style.fontSize = `${currentSize}px`;
                localStorage.setItem("font-size", currentSize);
            }
        });
    }

    if (fontDecrease) {
        fontDecrease.addEventListener("click", () => {
            if (currentSize > 12) { // Limite mínimo de segurança
                currentSize -= 2;
                document.documentElement.style.fontSize = `${currentSize}px`;
                localStorage.setItem("font-size", currentSize);
            }
        });
    }
});
