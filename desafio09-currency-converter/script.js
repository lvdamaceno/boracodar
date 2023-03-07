var ctx = document.getElementById('myChart').getContext("2d");
var gradientFill = ctx.createLinearGradient(0, 25, 0, 300);
gradientFill.addColorStop(0, "rgba(124, 58, 237, 0.5)");
gradientFill.addColorStop(1, "rgba(124, 58, 237, 0)");


var xValues = ['30/01', '31/01', '01/02', '02/02', '03/02', '06/02', '07/02', '08/02', '09/02', '10/02', '13/02', '14/02', '15/02'];
var yValues = [5.0953, 5.0987, 5.0715, 4.9895, 5.1024, 5.1757, 5.1689, 5.2030, 5.2309, 5.2520, 5.1828, 5.1501, 5.2237];



new Chart('myChart', {
  type: 'line',
  data: {
    labels: xValues,
    datasets: [
      {
        fill: true,
        backgroundColor: gradientFill,

        lineTension: 0,
        // backgroundColor: '#7C3AED',
        borderColor: '#7C3AED',
        data: yValues,

      },
    ],
  },
  options: {
    legend: { display: false },
    elements: {
      point: {
        borderWidth: 0,
        radius: 1,
        backgroundColor: 'transparent'
      }
    },
    scales: {
      yAxes: [{
        ticks: { display: true, stepSize: 0.1 },
        gridLines: {
          drawBorder: false,

        },

      }],
      xAxes: [{
        ticks: { display: false, },
        gridLines: {
          display: false,
        },

      }]
    },
  },

});