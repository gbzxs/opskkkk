function abrirPresente() {
    document.getElementById("pagina1").classList.remove("ativa");
    document.getElementById("pagina2").classList.add("ativa");

    const musica = document.getElementById("musica");
    musica.play();

    iniciarChuva();
}

function iniciarChuva() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💗";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}