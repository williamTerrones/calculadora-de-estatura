function calcularEstatura() {

    const loadingDiv = document.getElementById('loading');
    const resultDiv = document.getElementById('result');
    const estaturaElement = document.getElementById('estaturaResultado');
    const inputEstatura = document.getElementById('estatura').value;

    if (!inputEstatura) {
        alert('Por favor, ingresa tu estatura.');
        return;
    }

    loadingDiv.style.display = 'block';
    resultDiv.style.display = 'none';

    setTimeout(() => {

        loadingDiv.style.display = 'none';
        resultDiv.style.display = 'block';

        estaturaElement.textContent = `${inputEstatura} cm`;
    }, 4000);

}