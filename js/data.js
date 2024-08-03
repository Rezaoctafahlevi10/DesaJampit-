document.addEventListener("DOMContentLoaded", function () {
	const ctx = document.getElementById('dataChart').getContext('2d');
	const yearSelect = document.getElementById('year-select');

	let chart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: [ 'Jumlah Laki - Laki', 'Jumlah Peremuan', 'Jumlah Jiwa'],
			datasets: [{
				label: 'Data Desa Jampit',
				data: [], 
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1,
				fill: false
			}]
		},
		options: {
			animation: {
				duration: 1000,
				easing: 'easeInOutQuad'
			},
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	});

	const updateChart = (year) => {
		// Contoh data, sesuaikan dengan data Anda
		const data = {
			2017: [65, 59, 80, 81, 56, 55, 40],
			2018: [28, 48, 40, 19, 86, 27, 90],
			2019: [18, 48, 77, 9, 100, 27, 40],
			2020: [65, 29, 20, 81, 56, 85, 100],
			2021: [45, 79, 60, 31, 76, 35, 20],
			2022: [25, 69, 90, 41, 56, 65, 80],
			2023: [601,810, 768, 1596],
			2024: [75, 49, 60, 21, 66, 45, 90]
		};

		chart.data.datasets[0].data = data[year];
		chart.update();
	};

	yearSelect.addEventListener('change', (e) => {
		const selectedYear = e.target.value;
		updateChart(selectedYear);
	});

	// Set data untuk tahun default (2017)
	updateChart(yearSelect.value);
});