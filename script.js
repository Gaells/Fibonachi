function generateFibonacci(n) {
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("gerar").addEventListener("click", function () {
    const num = parseInt(document.getElementById("num").value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (!isNaN(num)) {
        const fibonacciNumbers = generateFibonacci(num);

        for (let i = 0; i < num; i++) {
            const span = document.createElement("span");
            span.textContent = fibonacciNumbers[i];
            span.style.fontSize = `${24 - i/5}px`;
            span.style.backgroundColor = getRandomColor();
            resultado.appendChild(span);
        }
    }
});
