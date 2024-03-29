const form = document.getElementById('form-confirm');
const inputA = document.getElementById('valor-a');
const inputB = document.getElementById('valor-b');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Previne o carregamento da página após o "submit"

    const valA = parseFloat(inputA.value);
    const valB = parseFloat(inputB.value);

    if (valB > valA) {
        // Formulário válido
        const successMessage = 'Valor B é maior que Valor A!';
        const containerSuccessMessage = document.querySelector('.success-message');
        containerSuccessMessage.innerHTML = successMessage;
        containerSuccessMessage.style.display = 'block';
        errorMessage.style.display = 'none';

        // Limpa os campos
        inputA.value = '';
        inputB.value = '';
    } else {
        // Formulário inválido
        errorMessage.style.display = 'block';
    }
});