function calcularResultados() {
    const form = document.getElementById('cocienteTricerebralForm');
    let sumSq = 0;
    let sumTr = 0;
    let sumCi = 0;

    // Sumar para la columna "cuadrado"
    form.querySelectorAll('input[name$="_sq"]:not(:disabled)').forEach(input => {
        const value = parseInt(input.value, 10);
        if (value >= 1 && value <= 5) { // Validar rango
            sumSq += value;
        } else if (input.value !== "") { // Si hay algo pero no es válido
            // Opcional: alertar o marcar el input
            console.warn(`Valor inválido en ${input.name}: ${input.value}`);
        }
    });

    // Sumar para la columna "triángulo"
    form.querySelectorAll('input[name$="_tr"]:not(:disabled)').forEach(input => {
        const value = parseInt(input.value, 10);
        if (value >= 1 && value <= 5) { // Validar rango
            sumTr += value;
        } else if (input.value !== "") {
            console.warn(`Valor inválido en ${input.name}: ${input.value}`);
        }
    });

    // Sumar para la columna "círculo"
    form.querySelectorAll('input[name$="_ci"]:not(:disabled)').forEach(input => {
        const value = parseInt(input.value, 10);
        if (value >= 1 && value <= 5) { // Validar rango
            sumCi += value;
        } else if (input.value !== "") {
            console.warn(`Valor inválido en ${input.name}: ${input.value}`);
        }
    });

    document.getElementById('sum_sq').textContent = sumSq;
    document.getElementById('sum_tr').textContent = sumTr;
    document.getElementById('sum_ci').textContent = sumCi;
}

// Opcional: Calcular dinámicamente mientras se escribe y se pierde el foco
// document.querySelectorAll('.score-input').forEach(input => {
//     input.addEventListener('change', calcularResultados); // 'change' es mejor que 'input' para type=number si no quieres recalcular a medio escribir
// });