// Dados fictícios para os gráficos
const dataPie = {
    labels: ["Aula Paraná", "Google Classroom", "Redes Sociais"],
    datasets: [{
        data: [50, 30, 20], // Porcentagens de uso
        backgroundColor: ["#00796b", "#004d40", "#26a69a"]
    }]
};

const dataBar = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
    datasets: [{
        label: "Usuários Ativos (em milhares)",
        data: [15, 20, 30, 25, 35],
        backgroundColor: "#00796b"
    }]
};

// Gráfico de Pizza
const pieChartCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieChartCtx, {
    type: 'pie',
    data: dataPie
});

// Gráfico de Barra
const barChartCtx = document.getElementById('barChart').getContext('2d');
new Chart(barChartCtx, {
    type: 'bar',
    data: dataBar,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});