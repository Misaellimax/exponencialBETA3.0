document.getElementById('plotButton').addEventListener('click', function () {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const cValue = parseFloat(document.getElementById('c').value);
    const dValue = parseFloat(document.getElementById('d').value);
    const xMin = parseFloat(document.getElementById('xMin').value);
    const xMax = parseFloat(document.getElementById('xMax').value);
    const lineColor = document.getElementById('lineColor').value;
    const lineWidth = parseInt(document.getElementById('lineWidth').value, 10);

    const cSign = document.querySelector('input[name="cSign"]:checked').value;
    const dSign = document.querySelector('input[name="dSign"]:checked').value;

    const c = (cSign === "+") ? cValue : -cValue;
    const d = (dSign === "+") ? dValue : -dValue;

    if (a <= 0 || a === 1) {
        alert("O valor de 'a' deve ser maior que 0 e diferente de 1.");
        return;
    }
    if (b === 0) {
        alert("O valor de 'b' deve ser diferente de 0.");
        return;
    }

    const xValues = [];
    const yValues = [];
    const step = (xMax - xMin) / 100;

    for (let x = xMin; x <= xMax; x += step) {
        const y = Math.pow(a, b * x + c) + d;
        xValues.push(x);
        yValues.push(y);
    }

    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [{
                label: `Gráfico de ${a}^(${b}x + ${c}) + ${d}`,
                data: yValues,
                borderColor: lineColor,
                borderWidth: lineWidth,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    beginAtZero: false
                }
            }
        }
    });
});
