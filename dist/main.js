/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 892:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
$(function () {
  /* ChartJS */
  'use strict';

  if ($("#mixed-chart").length) {
    var chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        type: 'line',
        label: 'Revenue',
        data: ["23", "33", "32", "65", "21", "45", "35"],
        backgroundColor: ChartColor[2],
        borderColor: ChartColor[2],
        borderWidth: 3,
        fill: false
      }, {
        type: 'bar',
        label: 'Standard',
        data: ["53", "28", "19", "29", "30", "51", "55"],
        backgroundColor: ChartColor[0],
        borderColor: ChartColor[0],
        borderWidth: 2
      }, {
        type: 'bar',
        label: 'Extended',
        data: ["34", "16", "46", "54", "42", "31", "49"],
        backgroundColor: ChartColor[1],
        borderColor: ChartColor[1]
      }]
    };
    var MixedChartCanvas = document.getElementById('mixed-chart').getContext('2d');
    lineChart = new Chart(MixedChartCanvas, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Revenue and number of lincences sold'
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              fontColor: '#212229',
              stepSize: 50,
              min: 0,
              max: 150,
              autoSkip: true,
              autoSkipPadding: 15,
              maxRotation: 0,
              maxTicksLimit: 10
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Number of Sales',
              fontSize: 12,
              lineHeight: 2
            },
            ticks: {
              fontColor: '#212229',
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 20,
              min: 0,
              max: 100
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        legendCallback: function legendCallback(chart) {
          var text = [];
          text.push('<div class="chartjs-legend d-flex justify-content-center mt-4"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            console.log(chart.data.datasets[i]); // see what's inside the obj.
            text.push('<li>');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        }
      }
    });
    document.getElementById('mixed-chart-legend').innerHTML = lineChart.generateLegend();
  }
  if ($("#lineChart").length) {
    var lineData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      datasets: [{
        data: [0, 205, 75, 150, 100, 150, 50, 100, 80],
        backgroundColor: ChartColor[0],
        borderColor: ChartColor[0],
        borderWidth: 3,
        fill: 'false',
        label: "Sales"
      }]
    };
    var lineOptions = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        filler: {
          propagate: false
        }
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month',
            fontSize: 12,
            lineHeight: 2
          },
          ticks: {
            fontColor: '#212229',
            stepSize: 50,
            min: 0,
            max: 150,
            autoSkip: true,
            autoSkipPadding: 15,
            maxRotation: 0,
            maxTicksLimit: 10
          },
          gridLines: {
            display: false,
            drawBorder: false,
            color: 'transparent',
            zeroLineColor: '#eeeeee'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Number of sales',
            fontSize: 12,
            lineHeight: 2
          },
          ticks: {
            fontColor: '#212229',
            display: true,
            autoSkip: false,
            maxRotation: 0,
            stepSize: 100,
            min: 0,
            max: 300
          },
          gridLines: {
            drawBorder: false
          }
        }]
      },
      legend: {
        display: false
      },
      legendCallback: function legendCallback(chart) {
        var text = [];
        text.push('<div class="chartjs-legend"><ul>');
        for (var i = 0; i < chart.data.datasets.length; i++) {
          console.log(chart.data.datasets[i]); // see what's inside the obj.
          text.push('<li>');
          text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
          text.push(chart.data.datasets[i].label);
          text.push('</li>');
        }
        text.push('</ul></div>');
        return text.join("");
      },
      elements: {
        line: {
          tension: 0
        },
        point: {
          radius: 0
        }
      }
    };
    var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: lineData,
      options: lineOptions
    });
    document.getElementById('line-traffic-legend').innerHTML = lineChart.generateLegend();
  }
  if ($("#areaChart").length) {
    var gradientStrokeFill_1 = lineChartCanvas.createLinearGradient(1, 2, 1, 280);
    gradientStrokeFill_1.addColorStop(0, "rgba(20, 88, 232, 0.37)");
    gradientStrokeFill_1.addColorStop(1, "rgba(255,255,255,0.4)");
    var lineData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      datasets: [{
        data: [0, 205, 75, 150, 100, 150, 50, 100, 80],
        backgroundColor: gradientStrokeFill_1,
        borderColor: ChartColor[0],
        borderWidth: 3,
        fill: true,
        label: "Marketing"
      }]
    };
    var lineOptions = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        filler: {
          propagate: false
        }
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month',
            fontSize: 12,
            lineHeight: 2
          },
          ticks: {
            autoSkip: true,
            autoSkipPadding: 35,
            maxRotation: 0,
            maxTicksLimit: 10,
            fontColor: '#212229'
          },
          gridLines: {
            display: false,
            drawBorder: false,
            color: 'transparent',
            zeroLineColor: '#eeeeee'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Number of user',
            fontSize: 12,
            lineHeight: 2
          },
          ticks: {
            display: true,
            autoSkip: false,
            maxRotation: 0,
            stepSize: 100,
            min: 0,
            max: 300
          },
          gridLines: {
            drawBorder: false
          }
        }]
      },
      legend: {
        display: false
      },
      legendCallback: function legendCallback(chart) {
        var text = [];
        text.push('<div class="chartjs-legend"><ul>');
        for (var i = 0; i < chart.data.datasets.length; i++) {
          console.log(chart.data.datasets[i]); // see what's inside the obj.
          text.push('<li>');
          text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
          text.push(chart.data.datasets[i].label);
          text.push('</li>');
        }
        text.push('</ul></div>');
        return text.join("");
      },
      elements: {
        line: {
          tension: 0
        },
        point: {
          radius: 0
        }
      }
    };
    var lineChartCanvas = $("#areaChart").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: lineData,
      options: lineOptions
    });
    document.getElementById('area-traffic-legend').innerHTML = lineChart.generateLegend();
  }
  if ($("#barChart").length) {
    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: 'Profit',
          data: [15, 28, 14, 22, 38, 30, 40, 70, 85, 50, 23, 20],
          backgroundColor: ChartColor[0],
          borderColor: ChartColor[0],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Sales by year',
              fontSize: 12,
              lineHeight: 2
            },
            ticks: {
              fontColor: '#bfccda',
              stepSize: 50,
              min: 0,
              max: 150,
              autoSkip: true,
              autoSkipPadding: 15,
              maxRotation: 0,
              maxTicksLimit: 10
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'revenue by sales',
              fontSize: 12,
              lineHeight: 2
            },
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              fontColor: '#bfccda',
              stepSize: 50,
              min: 0,
              max: 150
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        legendCallback: function legendCallback(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            console.log(chart.data.datasets[i]); // see what's inside the obj.
            text.push('<li>');
            text.push('<span style="background-color:' + chart.data.datasets[i].backgroundColor + '">' + '</span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          point: {
            radius: 0
          }
        }
      }
    });
    document.getElementById('bar-traffic-legend').innerHTML = barChart.generateLegend();
  }
  if ($("#stackedbarChart").length) {
    var _options;
    var stackedbarChartCanvas = $("#stackedbarChart").get(0).getContext("2d");
    var stackedbarChart = new Chart(stackedbarChartCanvas, {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: "Desktop",
          backgroundColor: ChartColor[0],
          borderColor: ChartColor[0],
          borderWidth: 1,
          data: [55, 45, 44, 54, 38, 40, 50]
        }, {
          label: "Mobile",
          backgroundColor: ChartColor[1],
          borderColor: ChartColor[1],
          borderWidth: 1,
          data: [34, 20, 54, 34, 65, 40, 35]
        }]
      },
      options: (_options = {
        responsive: true,
        maintainAspectRatio: true,
        legend: false,
        categoryPercentage: 0.5,
        stacked: true,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'User by time',
              fontSize: 12,
              lineHeight: 2
            },
            ticks: {
              fontColor: '#bfccda',
              stepSize: 50,
              min: 0,
              max: 150,
              autoSkip: true,
              autoSkipPadding: 15,
              maxRotation: 0,
              maxTicksLimit: 10
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Number of users',
              fontSize: 12,
              lineHeight: 2
            },
            ticks: {
              fontColor: '#bfccda',
              stepSize: 50,
              min: 0,
              max: 150,
              autoSkip: true,
              autoSkipPadding: 15,
              maxRotation: 0,
              maxTicksLimit: 10
            },
            gridLines: {
              drawBorder: false
            }
          }]
        }
      }, _defineProperty(_options, "legend", {
        display: false
      }), _defineProperty(_options, "legendCallback", function legendCallback(chart) {
        var text = [];
        text.push('<div class="chartjs-legend"><ul>');
        for (var i = 0; i < chart.data.datasets.length; i++) {
          console.log(chart.data.datasets[i]); // see what's inside the obj.
          text.push('<li>');
          text.push('<span style="background-color:' + chart.data.datasets[i].backgroundColor + '">' + '</span>');
          text.push(chart.data.datasets[i].label);
          text.push('</li>');
        }
        text.push('</ul></div>');
        return text.join("");
      }), _defineProperty(_options, "elements", {
        point: {
          radius: 0
        }
      }), _options)
    });
    document.getElementById('stacked-bar-traffic-legend').innerHTML = stackedbarChart.generateLegend();
  }
  if ($("#radarChart").length) {
    var marksCanvas = document.getElementById("radarChart");
    var marksData = {
      labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
      datasets: [{
        label: "Student A",
        backgroundColor: ChartColor[0],
        borderColor: ChartColor[0],
        borderWidth: 0,
        fill: true,
        radius: 6,
        pointRadius: 5,
        pointBorderWidth: 0,
        pointBackgroundColor: ChartColor[4],
        pointHoverRadius: 10,
        data: [54, 45, 60, 70, 54, 75]
      }, {
        label: "Student B",
        backgroundColor: ChartColor[1],
        borderColor: ChartColor[1],
        borderWidth: 0,
        fill: true,
        radius: 6,
        pointRadius: 5,
        pointBorderWidth: 0,
        pointBackgroundColor: ChartColor[1],
        pointHoverRadius: 10,
        data: [65, 75, 70, 80, 60, 80]
      }]
    };
    var chartOptions = {
      scale: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 100,
          stepSize: 20,
          display: false
        },
        pointLabels: {
          fontSize: 14
        }
      },
      legend: false,
      legendCallback: function legendCallback(chart) {
        var text = [];
        text.push('<div class="chartjs-legend"><ul>');
        for (var i = 0; i < chart.data.datasets.length; i++) {
          console.log(chart.data.datasets[i]); // see what's inside the obj.
          text.push('<li>');
          text.push('<span style="background-color:' + chart.data.datasets[i].backgroundColor + '">' + '</span>');
          text.push(chart.data.datasets[i].label);
          text.push('</li>');
        }
        text.push('</ul></div>');
        return text.join("");
      }
    };
    var radarChart = new Chart(marksCanvas, {
      type: 'radar',
      data: marksData,
      options: chartOptions
    });
    document.getElementById('radar-chart-legend').innerHTML = radarChart.generateLegend();
  }
  if ($("#doughnutChart").length) {
    var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
    var doughnutPieData = {
      datasets: [{
        data: [20, 80, 83],
        backgroundColor: [ChartColor[0], ChartColor[1], ChartColor[2]],
        borderColor: [ChartColor[0], ChartColor[1], ChartColor[2]]
      }],
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ['Sales', 'Profit', 'Return']
    };
    var doughnutPieOptions = {
      cutoutPercentage: 75,
      animationEasing: "easeOutBounce",
      animateRotate: true,
      animateScale: false,
      responsive: true,
      maintainAspectRatio: true,
      showScale: true,
      legend: false,
      legendCallback: function legendCallback(chart) {
        var text = [];
        text.push('<div class="chartjs-legend"><ul>');
        for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
          text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
          text.push('</span>');
          if (chart.data.labels[i]) {
            text.push(chart.data.labels[i]);
          }
          text.push('</li>');
        }
        text.push('</div></ul>');
        return text.join("");
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      }
    };
    var doughnutChart = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: doughnutPieData,
      options: doughnutPieOptions
    });
    document.getElementById('doughnut-chart-legend').innerHTML = doughnutChart.generateLegend();
  }
  if ($("#pieChart").length) {
    var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: {
        datasets: [{
          data: [30, 40, 30],
          backgroundColor: [ChartColor[0], ChartColor[1], ChartColor[2]],
          borderColor: [ChartColor[0], ChartColor[1], ChartColor[2]]
        }],
        labels: ['Sales', 'Profit', 'Return']
      },
      options: {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        legend: {
          display: false
        },
        legendCallback: function legendCallback(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
            text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
            text.push('</span>');
            if (chart.data.labels[i]) {
              text.push(chart.data.labels[i]);
            }
            text.push('</li>');
          }
          text.push('</div></ul>');
          return text.join("");
        }
      }
    });
    document.getElementById('pie-chart-legend').innerHTML = pieChart.generateLegend();
  }
  if ($('#scatterChart').length) {
    var _options2;
    var options = {
      type: 'bubble',
      data: {
        datasets: [{
          label: 'John',
          data: [{
            x: 3,
            y: 10,
            r: 5
          }],
          backgroundColor: ChartColor[0],
          borderColor: ChartColor[0],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[0]
        }, {
          label: 'Paul',
          data: [{
            x: 2,
            y: 2,
            r: 10
          }],
          backgroundColor: ChartColor[1],
          borderColor: ChartColor[1],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[1]
        }, {
          label: 'Paul',
          data: [{
            x: 12,
            y: 32,
            r: 13
          }],
          backgroundColor: ChartColor[2],
          borderColor: ChartColor[2],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[2]
        }, {
          label: 'Paul',
          data: [{
            x: 29,
            y: 52,
            r: 5
          }],
          backgroundColor: ChartColor[0],
          borderColor: ChartColor[0],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[0]
        }, {
          label: 'Paul',
          data: [{
            x: 49,
            y: 62,
            r: 5
          }],
          backgroundColor: ChartColor[1],
          borderColor: ChartColor[1],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[1]
        }, {
          label: 'Paul',
          data: [{
            x: 22,
            y: 22,
            r: 5
          }],
          backgroundColor: ChartColor[2],
          borderColor: ChartColor[2],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[2]
        }, {
          label: 'Paul',
          data: [{
            x: 23,
            y: 25,
            r: 5
          }],
          backgroundColor: ChartColor[1],
          borderColor: ChartColor[1],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[1]
        }, {
          label: 'Paul',
          data: [{
            x: 12,
            y: 10,
            r: 5
          }],
          backgroundColor: ChartColor[1],
          borderColor: ChartColor[1],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[1]
        }, {
          label: 'Paul',
          data: [{
            x: 34,
            y: 23,
            r: 5
          }],
          backgroundColor: ChartColor[1],
          borderColor: ChartColor[1],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[1]
        }, {
          label: 'Paul',
          data: [{
            x: 30,
            y: 20,
            r: 10
          }],
          backgroundColor: ChartColor[1],
          borderColor: ChartColor[1],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[1]
        }, {
          label: 'Paul',
          data: [{
            x: 12,
            y: 17,
            r: 5
          }],
          backgroundColor: ChartColor[1],
          borderColor: ChartColor[1],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[1]
        }, {
          label: 'Paul',
          data: [{
            x: 32,
            y: 37,
            r: 5
          }],
          backgroundColor: ChartColor[0],
          borderColor: ChartColor[0],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[0]
        }, {
          label: 'Paul',
          data: [{
            x: 52,
            y: 57,
            r: 5
          }],
          backgroundColor: ChartColor[0],
          borderColor: ChartColor[0],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[0]
        }, {
          label: 'Paul',
          data: [{
            x: 77,
            y: 40,
            r: 5
          }],
          backgroundColor: ChartColor[0],
          borderColor: ChartColor[0],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[0]
        }, {
          label: 'Paul',
          data: [{
            x: 67,
            y: 40,
            r: 5
          }],
          backgroundColor: ChartColor[0],
          borderColor: ChartColor[0],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[0]
        }, {
          label: 'Paul',
          data: [{
            x: 47,
            y: 20,
            r: 10
          }],
          backgroundColor: ChartColor[0],
          borderColor: ChartColor[0],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[0]
        }, {
          label: 'Paul',
          data: [{
            x: 77,
            y: 10,
            r: 5
          }],
          backgroundColor: ChartColor[0],
          borderColor: ChartColor[0],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[0]
        }, {
          label: 'Paul',
          data: [{
            x: 57,
            y: 10,
            r: 10
          }],
          backgroundColor: ChartColor[0],
          borderColor: ChartColor[0],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[0]
        }, {
          label: 'Paul',
          data: [{
            x: 57,
            y: 40,
            r: 5
          }],
          backgroundColor: ChartColor[3],
          borderColor: ChartColor[3],
          borderWidth: 0,
          hoverBackgroundColor: ChartColor[3]
        }]
      },
      options: (_options2 = {
        legend: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              color: '#fff'
            },
            ticks: {
              autoSkip: true,
              autoSkipPadding: 45,
              maxRotation: 0,
              maxTicksLimit: 10,
              fontColor: '#212229'
            }
          }],
          yAxes: [{
            gridLines: {
              color: '#eff2ff',
              display: true
            },
            ticks: {
              beginAtZero: true,
              stepSize: 25,
              max: 100,
              fontColor: '#212229'
            }
          }]
        }
      }, _defineProperty(_options2, "legend", {
        display: false
      }), _defineProperty(_options2, "legendCallback", function legendCallback(chart) {
        var text = [];
        text.push('<div class="chartjs-legend"><ul>');
        for (var i = 0; i < chart.data.datasets.length; i++) {
          console.log(chart.data.datasets[i]); // see what's inside the obj.
          text.push('<li>');
          text.push('<span style="background-color:' + chart.data.datasets[i].backgroundColor + '">' + '</span>');
          text.push(chart.data.datasets[i].label);
          text.push('</li>');
        }
        text.push('</ul></div>');
        return text.join("");
      }), _options2)
    };
    var ctx = document.getElementById('scatterChart').getContext('2d');
    new Chart(ctx, options);
    document.getElementById('scatter-chart-legend').innerHTML = barChart.generateLegend();
  }
});

/***/ }),

/***/ 385:
/***/ (() => {

var ChartColor = (/* unused pure expression or super */ null && (["#5D62B4", "#54C3BE", "#EF726F", "#F9C446", "rgb(93.0, 98.0, 180.0)", "#21B7EC", "#04BCCC"]));
var primaryColor = getComputedStyle(document.body).getPropertyValue('--primary');
var secondaryColor = getComputedStyle(document.body).getPropertyValue('--secondary');
var successColor = getComputedStyle(document.body).getPropertyValue('--success');
var warningColor = getComputedStyle(document.body).getPropertyValue('--warning');
var dangerColor = getComputedStyle(document.body).getPropertyValue('--danger');
var infoColor = getComputedStyle(document.body).getPropertyValue('--info');
var darkColor = getComputedStyle(document.body).getPropertyValue('--dark');
var lightColor = getComputedStyle(document.body).getPropertyValue('--light');
(function ($) {
  'use strict';

  $(function () {
    var body = $('body');
    var contentWrapper = $('.content-wrapper');
    var scroller = $('.container-scroller');
    var footer = $('.footer');
    var sidebar = $('#sidebar');

    //Add active class to nav-link based on url dynamically
    //Active class can be hard coded directly in html file also as required
    if (!$('#sidebar').hasClass("dynamic-active-class-disabled")) {
      var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
      $('#sidebar >.nav > li:not(.not-navigation-link) a').each(function () {
        var $this = $(this);
        if (current === "") {
          //for root url
          if ($this.attr('href').indexOf("index.html") !== -1) {
            $(this).parents('.nav-item').last().addClass('active');
            if ($(this).parents('.sub-menu').length) {
              $(this).addClass('active');
            }
          }
        } else {
          //for other url
          if ($this.attr('href').indexOf(current) !== -1) {
            $(this).parents('.nav-item').last().addClass('active');
            if ($(this).parents('.sub-menu').length) {
              $(this).addClass('active');
            }
            if (current !== "index.html") {
              $(this).parents('.nav-item').last().find(".nav-link").attr("aria-expanded", "true");
              if ($(this).parents('.sub-menu').length) {
                $(this).closest('.collapse').addClass('show');
              }
            }
          }
        }
      });
    }

    //Close other submenu in sidebar on opening any
    $("#sidebar > .nav > .nav-item > a[data-toggle='collapse']").on("click", function () {
      $("#sidebar > .nav > .nav-item").find('.collapse.show').collapse('hide');
    });
    function appendBanner() {
      $("body").addClass("purchase-banner-active");
      $("body").prepend('\
          <div class= "item-purchase-banner">\
            <p class="banner-text">Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more!            </p>\
              <a href="https://www.bootstrapdash.com/product/star-admin-pro?utm_source=organic&utm_medium=banner&utm_campaign=free-preview" target="_blank" class= "banner-button btn btn-primary btn-icon">\
                <i class="mdi mdi-cart"></i> Check Pro Version\
              </a>\
              <span class="toggler-close"><i class="mdi mdi-close"></i></span>\
          </div>\
        ');
      $(".item-purchase-banner .toggler-close").on("click", function () {
        $(".item-purchase-banner").slideUp(300);
        $("body").removeClass("purchase-banner-active");
      });
    }
    appendBanner();

    //checkbox and radios
    $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');
  });
  $('.dropdown-toggle').dropdown();
})(jQuery);

/***/ }),

/***/ 634:
/***/ (() => {

(function ($) {
  'use strict';

  $(function () {
    $('[data-toggle="offcanvas"]').on("click", function () {
      $('.sidebar-offcanvas').toggleClass('active');
    });
  });
})(jQuery);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/assets/js/demo_1/dashboard.js

// import '../../scss/shared/style.scss'

(function ($) {
  'use strict';

  $(function () {
    var lineStatsOptions = {
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        },
        line: {
          tension: 0
        }
      },
      stepsize: 100
    };
    if ($('#sales-statistics-overview').length) {
      var salesChartCanvas = $("#sales-statistics-overview").get(0).getContext("2d");
      var gradientStrokeFill_1 = salesChartCanvas.createLinearGradient(0, 0, 0, 450);
      gradientStrokeFill_1.addColorStop(1, 'rgba(255,255,255, 0.0)');
      gradientStrokeFill_1.addColorStop(0, 'rgba(102,78,235, 0.2)');
      var gradientStrokeFill_2 = salesChartCanvas.createLinearGradient(0, 0, 0, 400);
      gradientStrokeFill_2.addColorStop(1, 'rgba(255, 255, 255, 0.01)');
      gradientStrokeFill_2.addColorStop(0, '#14c671');
      var data_1_1 = [60, 75, 65, 130, 130, 145, 110, 145, 155, 149, 170];
      var data_1_2 = [0, 25, 20, 40, 70, 52, 49, 90, 70, 94, 110, 135];
      var data_2_1 = [130, 145, 155, 60, 75, 65, 130, 110, 145, 149, 170];
      var data_2_2 = [0, 70, 52, 90, 25, 20, 40, 70, 49, 94, 110, 135];
      var data_3_1 = [130, 75, 65, 130, 110, 145, 155, 60, 145, 149, 170];
      var data_3_2 = [0, 70, 52, 94, 110, 135, 90, 25, 20, 40, 70, 49];
      var data_4_1 = [130, 145, 65, 130, 75, 145, 149, 170, 110, 155, 60];
      var data_4_2 = [0, 70, 90, 25, 40, 20, 94, 110, 135, 70, 49, 52];
      var areaData = {
        labels: ["Jan 1", "Jan 7", "Jan 14", "Jan 21", "Jan 28", "Feb 4", "Feb 11", "Feb 18"],
        datasets: [{
          label: 'Revenue',
          data: data_1_1,
          borderColor: infoColor,
          backgroundColor: gradientStrokeFill_1,
          borderWidth: 2
        }, {
          label: 'Sales',
          data: data_1_2,
          borderColor: successColor,
          backgroundColor: gradientStrokeFill_2,
          borderWidth: 2
        }]
      };
      var areaOptions = {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        elements: {
          point: {
            radius: 3,
            backgroundColor: "#fff"
          },
          line: {
            tension: 0
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        legend: false,
        legendCallback: function legendCallback(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            console.log(chart.data.datasets[i]); // see what's inside the obj.
            text.push('<li>');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: false,
              beginAtZero: false
            },
            gridLines: {
              drawBorder: false
            }
          }],
          yAxes: [{
            ticks: {
              max: 200,
              min: 0,
              stepSize: 50,
              fontColor: "#858585",
              beginAtZero: false
            },
            gridLines: {
              color: '#e2e6ec',
              display: true,
              drawBorder: false
            }
          }]
        }
      };
      var salesChart = new Chart(salesChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
      document.getElementById('sales-statistics-legend').innerHTML = salesChart.generateLegend();
      $("#sales-statistics_switch_1").click(function () {
        var data = salesChart.data;
        data.datasets[0].data = data_1_1;
        data.datasets[1].data = data_1_2;
        salesChart.update();
      });
      $("#sales-statistics_switch_2").click(function () {
        var data = salesChart.data;
        data.datasets[0].data = data_2_1;
        data.datasets[1].data = data_2_2;
        salesChart.update();
      });
      $("#sales-statistics_switch_3").click(function () {
        var data = salesChart.data;
        data.datasets[0].data = data_3_1;
        data.datasets[1].data = data_3_2;
        salesChart.update();
      });
      $("#sales-statistics_switch_4").click(function () {
        var data = salesChart.data;
        data.datasets[0].data = data_4_1;
        data.datasets[1].data = data_4_2;
        salesChart.update();
      });
    }
    if ($("#net-profit").length) {
      var marksCanvas = document.getElementById("net-profit");
      var marksData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [{
          label: "Sales",
          backgroundColor: 'rgba(88, 208, 222,0.8)',
          borderColor: 'rgba(88, 208, 222,0.8)',
          borderWidth: 0,
          fill: true,
          radius: 0,
          pointRadius: 0,
          pointBorderWidth: 0,
          pointBackgroundColor: 'rgba(88, 208, 222,0.8)',
          pointHoverRadius: 10,
          pointHitRadius: 5,
          data: [54, 45, 60, 70, 54, 75, 60, 54]
        }, {
          label: "Orders",
          backgroundColor: 'rgba(150, 77, 247,1)',
          borderColor: 'rgba(150, 77, 247,1)',
          borderWidth: 0,
          fill: true,
          radius: 0,
          pointRadius: 0,
          pointBorderWidth: 0,
          pointBackgroundColor: 'rgba(150, 77, 247,1)',
          pointHoverRadius: 10,
          pointHitRadius: 5,
          data: [65, 75, 70, 80, 60, 80, 36, 60]
        }]
      };
      var chartOptions = {
        scale: {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 20,
            display: false
          },
          pointLabels: {
            fontSize: 14
          },
          angleLines: {
            color: '#e9ebf1'
          },
          gridLines: {
            color: "#e9ebf1"
          }
        },
        legend: false,
        legendCallback: function legendCallback(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            console.log(chart.data.datasets[i]); // see what's inside the obj.
            text.push('<li>');
            text.push('<span style="background-color:' + chart.data.datasets[i].backgroundColor + '">' + '</span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        }
      };
      var radarChart = new Chart(marksCanvas, {
        type: 'radar',
        data: marksData,
        options: chartOptions
      });
      document.getElementById('net-profit-legend').innerHTML = radarChart.generateLegend();
    }
    if ($('#total-revenue').length) {
      var ctx = document.getElementById('total-revenue').getContext("2d");
      var data = {
        labels: ["Day01", "Day02", "Day03", "Day04", "Day05", "Day06", "Day07", "Day08", "Day09", "Day10", "Day11", "Day12", "Day13", "Day14", "Day15", "Day16", "Day17", "Day18", "Day19", "Day20", "Day21", "Day22", "Day23", "Day24", "Day25", "Day26", "Day27", "Day28", "Day29", "Day30", "Day31", "Day32", "Day33", "Day34", "Day35", "Day36", "Day37", "Day38", "Day39", "Day40", "Day41", "Day42", "Day43", "Day44", "Day45", "Day46", "Day47", "Day48", "Day49", "Day50", "Day51", "Day52", "Day53", "Day54", "Day55", "Day56", "Day57", "Day58", "Day59", "Day60", "Day61", "Day62", "Day63", "Day64", "Day65", "Day66", "Day67", "Day68", "Day69", "Day70", "Day71", "Day72", "Day73", "Day74", "Day75", "Day76", "Day77", "Day78", "Day79", "Day80", "Day81", "Day82"],
        datasets: [{
          label: 'Total Revenue',
          data: [56, 55, 59, 59, 59, 57, 56, 57, 54, 56, 58, 57, 59, 58, 59, 57, 55, 56, 54, 52, 49, 48, 50, 50, 46, 45, 49, 50, 52, 53, 52, 55, 54, 53, 56, 55, 56, 55, 54, 55, 57, 58, 56, 55, 56, 57, 58, 59, 58, 57, 55, 53, 52, 55, 57, 55, 54, 52, 55, 57, 56, 57, 58, 59, 58, 59, 57, 56, 55, 57, 58, 59, 60, 62, 60, 59, 58, 57, 56, 57, 56, 58, 59],
          borderColor: '#9B86F1',
          backgroundColor: '#f2f2ff',
          borderWidth: 3,
          fill: 'origin'
        }]
      };
      var lineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          scales: {
            yAxes: [{
              display: false
            }],
            xAxes: [{
              display: false
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            },
            line: {
              tension: 0
            }
          },
          stepsize: 100
        }
      });
    }
    if ($('#total-transaction').length) {
      var ctx = document.getElementById('total-transaction').getContext('2d');
      var gradientStrokeFill_1 = ctx.createLinearGradient(0, 100, 200, 0);
      gradientStrokeFill_1.addColorStop(0, '#fa5539');
      gradientStrokeFill_1.addColorStop(1, '#fa3252');
      var areaData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: 'Sessions',
          data: [320, 280, 300, 280, 300, 270, 350],
          backgroundColor: gradientStrokeFill_1,
          borderColor: '#fa394e',
          borderWidth: 0,
          pointBackgroundColor: "#fa394e",
          pointRadius: 7,
          pointBorderWidth: 3,
          pointBorderColor: '#fff',
          pointHoverRadius: 7,
          pointHoverBackgroundColor: "#fa394e",
          pointHoverBorderColor: "#fa394e",
          pointHoverBorderWidth: 2,
          pointHitRadius: 7
        }]
      };
      var areaOptions = {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        elements: {
          point: {
            radius: 0
          }
        },
        layout: {
          padding: {
            left: -10,
            right: 0,
            top: 0,
            bottom: -10
          }
        },
        legend: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              display: false
            }
          }]
        }
      };
      var revenueChart = new Chart(ctx, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
    if ($("#market-overview-chart").length) {
      var MarketingChartCanvas = $("#market-overview-chart").get(0).getContext("2d");
      var Marketing_data_1_1 = [145, 238, 148, 293, 242, 235, 256, 334];
      var Marketing_data_1_2 = [330, 380, 230, 400, 309, 430, 340, 310];
      var Marketing_data_1_3 = [375, 440, 284, 450, 386, 480, 400, 365];
      var Marketing_data_1_4 = [425, 480, 324, 490, 426, 520, 440, 405];
      var Marketing_data_2_1 = [125, 138, 108, 193, 102, 200, 290, 204];
      var Marketing_data_2_2 = [330, 380, 230, 400, 309, 430, 340, 310];
      var Marketing_data_2_3 = [375, 440, 284, 450, 386, 480, 400, 365];
      var Marketing_data_2_4 = [425, 480, 324, 490, 426, 520, 440, 405];
      var Marketing_data_1_1 = [145, 238, 148, 293, 242, 235, 256, 334];
      var Marketing_data_1_2 = [330, 380, 230, 400, 309, 430, 340, 310];
      var Marketing_data_1_3 = [375, 440, 284, 450, 386, 480, 400, 365];
      var Marketing_data_1_4 = [425, 480, 324, 490, 426, 520, 440, 405];
      var MarketingChart = new Chart(MarketingChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          datasets: [{
            label: 'OVERDUE',
            data: Marketing_data_1_1,
            backgroundColor: '#826af9',
            borderColor: '#826af9',
            borderWidth: 0
          }, {
            label: 'SNOOZED',
            data: Marketing_data_1_2,
            backgroundColor: '#9e86ff',
            borderColor: '#9e86ff',
            borderWidth: 0
          }, {
            label: 'COMPLETED',
            data: Marketing_data_1_3,
            backgroundColor: '#d0aeff',
            borderColor: '#d0aeff',
            borderWidth: 0
          }, {
            label: 'OVERDUE',
            data: Marketing_data_1_4,
            backgroundColor: '#f7d2ff',
            borderColor: '#f7d2ff',
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 20,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                max: 400,
                display: true,
                beginAtZero: true,
                fontColor: "#212529",
                stepSize: 100
              },
              gridLines: {
                display: false
              }
            }],
            xAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true,
                fontColor: "#212529"
              },
              gridLines: {
                color: "#e9ebf1",
                display: true
              },
              barPercentage: 0.2
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
      $("#market-overview_1").click(function () {
        var data = MarketingChart.data;
        data.datasets[0].data = Marketing_data_1_1;
        data.datasets[1].data = Marketing_data_1_2;
        data.datasets[2].data = Marketing_data_1_2;
        data.datasets[3].data = Marketing_data_1_2;
        MarketingChart.update();
      });
      $("#market-overview_2").click(function () {
        var data = MarketingChart.data;
        data.datasets[0].data = Marketing_data_2_1;
        data.datasets[1].data = Marketing_data_2_2;
        data.datasets[2].data = Marketing_data_2_2;
        data.datasets[3].data = Marketing_data_2_2;
        MarketingChart.update();
      });
      $("#market-overview_3").click(function () {
        var data = MarketingChart.data;
        data.datasets[0].data = Marketing_data_3_1;
        data.datasets[1].data = Marketing_data_3_2;
        data.datasets[2].data = Marketing_data_3_2;
        data.datasets[3].data = Marketing_data_3_2;
        MarketingChart.update();
      });
    }
    if ($("#realtime-statistics").length) {
      var realtimeChartCanvas = $("#realtime-statistics").get(0).getContext("2d");
      var realtimeChart = new Chart(realtimeChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: 'Profit',
            data: [330, 380, 230, 400, 309, 530, 340],
            backgroundColor: "#0f5bff",
            borderColor: '#0f5bff',
            borderWidth: 0
          }, {
            label: 'Target',
            data: [600, 600, 600, 600, 600, 600, 600],
            backgroundColor: '#e5e9f2',
            borderColor: '#e5e9f2',
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 25,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              gridLines: {
                display: false
              }
            }],
            xAxes: [{
              stacked: true,
              ticks: {
                display: false,
                beginAtZero: true,
                fontColor: "#354168"
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              barPercentage: 0.5
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    if ($("#dashboard-vmap").length) {
      $('#dashboard-vmap').vectorMap({
        map: 'world_mill_en',
        panOnDrag: true,
        backgroundColor: 'transparent',
        focusOn: {
          x: 0.5,
          y: 0.5,
          scale: 1,
          animate: true
        },
        series: {
          regions: [{
            scale: ['#2d99ff'],
            normalizeFunction: 'polynomial',
            values: {
              "AF": 16.63,
              "AL": 11.58,
              "DZ": 158.97,
              "AO": 85.81,
              "AG": 1.1,
              "AR": 351.02,
              "AM": 8.83,
              "AU": 1219.72,
              "AT": 366.26,
              "AZ": 52.17,
              "BS": 7.54,
              "BH": 21.73,
              "BD": 105.4,
              "BB": 3.96,
              "BY": 52.89,
              "BE": 461.33,
              "BZ": 1.43,
              "BJ": 6.49,
              "BT": 1.4,
              "BO": 19.18,
              "BA": 16.2,
              "BW": 12.5,
              "BR": 2023.53,
              "BN": 11.96,
              "BG": 44.84,
              "BF": 8.67,
              "BI": 1.47,
              "KH": 11.36,
              "CM": 21.88,
              "CA": 1563.66,
              "CV": 1.57,
              "CF": 2.11,
              "TD": 7.59,
              "CL": 199.18,
              "CN": 5745.13,
              "CO": 283.11,
              "KM": 0.56,
              "CD": 12.6,
              "CG": 11.88,
              "CR": 35.02,
              "CI": 22.38,
              "HR": 59.92,
              "CY": 22.75,
              "CZ": 195.23,
              "DK": 304.56,
              "DJ": 1.14,
              "DM": 0.38,
              "DO": 50.87,
              "EC": 61.49,
              "EG": 216.83,
              "SV": 21.8,
              "GQ": 14.55,
              "ER": 2.25,
              "EE": 19.22,
              "ET": 30.94,
              "FJ": 3.15,
              "FI": 231.98,
              "FR": 2555.44,
              "GA": 12.56,
              "GM": 1.04,
              "GE": 11.23,
              "DE": 3305.9,
              "GH": 18.06,
              "GR": 305.01,
              "GD": 0.65,
              "GT": 40.77,
              "GN": 4.34,
              "GW": 0.83,
              "GY": 2.2,
              "HT": 6.5,
              "HN": 15.34,
              "HK": 226.49,
              "HU": 132.28,
              "IS": 12.77,
              "IN": 1430.02,
              "ID": 695.06,
              "IR": 337.9,
              "IQ": 84.14,
              "IE": 204.14,
              "IL": 201.25,
              "IT": 2036.69,
              "JM": 13.74,
              "JP": 5390.9,
              "JO": 27.13,
              "KZ": 129.76,
              "KE": 32.42,
              "KI": 0.15,
              "KR": 986.26,
              "KW": 117.32,
              "KG": 4.44,
              "LA": 6.34,
              "LV": 23.39,
              "LB": 39.15,
              "LS": 1.8,
              "LR": 0.98,
              "LY": 77.91,
              "LT": 35.73,
              "LU": 52.43,
              "MK": 9.58,
              "MG": 8.33,
              "MW": 5.04,
              "MY": 218.95,
              "MV": 1.43,
              "ML": 9.08,
              "MT": 7.8,
              "MR": 3.49,
              "MU": 9.43,
              "MX": 1004.04,
              "MD": 5.36,
              "MN": 5.81,
              "ME": 3.88,
              "MA": 91.7,
              "MZ": 10.21,
              "MM": 35.65,
              "NA": 11.45,
              "NP": 15.11,
              "NL": 770.31,
              "NZ": 138,
              "NI": 6.38,
              "NE": 5.6,
              "NG": 206.66,
              "NO": 413.51,
              "OM": 53.78,
              "PK": 174.79,
              "PA": 27.2,
              "PG": 8.81,
              "PY": 17.17,
              "PE": 153.55,
              "PH": 189.06,
              "PL": 438.88,
              "PT": 223.7,
              "QA": 126.52,
              "RO": 158.39,
              "RU": 1476.91,
              "RW": 5.69,
              "WS": 0.55,
              "ST": 0.19,
              "SA": 434.44,
              "SN": 12.66,
              "RS": 38.92,
              "SC": 0.92,
              "SL": 1.9,
              "SG": 217.38,
              "SK": 86.26,
              "SI": 46.44,
              "SB": 0.67,
              "ZA": 354.41,
              "ES": 1374.78,
              "LK": 48.24,
              "KN": 0.56,
              "LC": 1,
              "VC": 0.58,
              "SD": 65.93,
              "SR": 3.3,
              "SZ": 3.17,
              "SE": 444.59,
              "CH": 522.44,
              "SY": 59.63,
              "TW": 426.98,
              "TJ": 5.58,
              "TZ": 22.43,
              "TH": 312.61,
              "TL": 0.62,
              "TG": 3.07,
              "TO": 0.3,
              "TT": 21.2,
              "TN": 43.86,
              "TR": 729.05,
              "TM": 0,
              "UG": 17.12,
              "UA": 136.56,
              "AE": 239.65,
              "GB": 2258.57,
              "US": 14624.18,
              "UY": 40.71,
              "UZ": 37.72,
              "VU": 0.72,
              "VE": 285.21,
              "VN": 101.99,
              "YE": 30.02,
              "ZM": 15.69,
              "ZW": 5.57
            }
          }]
        }
      });
    }
    if ($('#stats-line-graph-1').length) {
      var lineChartCanvas = $("#stats-line-graph-1").get(0).getContext("2d");
      var gradientStrokeFill_1 = lineChartCanvas.createLinearGradient(0, 0, 0, 50);
      gradientStrokeFill_1.addColorStop(0, 'rgba(131, 144, 255, 0.5)');
      gradientStrokeFill_1.addColorStop(1, '#fff');
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: {
          labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
          datasets: [{
            label: 'Profit',
            data: [7, 6, 9, 7, 8, 6, 8, 5, 7, 8, 6, 7, 7],
            borderColor: '#6d7cfc',
            backgroundColor: gradientStrokeFill_1,
            borderWidth: 3,
            fill: true
          }]
        },
        options: lineStatsOptions
      });
    }
    if ($('#stats-line-graph-2').length) {
      var lineChartCanvas = $("#stats-line-graph-2").get(0).getContext("2d");
      var gradientStrokeFill_1 = lineChartCanvas.createLinearGradient(0, 0, 0, 50);
      gradientStrokeFill_1.addColorStop(0, 'rgba(131, 144, 255, 0.5)');
      gradientStrokeFill_1.addColorStop(1, '#fff');
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: {
          labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
          datasets: [{
            label: 'Profit',
            data: [7, 6, 8, 5, 7, 8, 6, 7, 7, 6, 9, 7, 8],
            borderColor: '#6d7cfc',
            backgroundColor: gradientStrokeFill_1,
            borderWidth: 3,
            fill: true
          }]
        },
        options: lineStatsOptions
      });
    }
    if ($('#stats-line-graph-3').length) {
      var lineChartCanvas = $("#stats-line-graph-3").get(0).getContext("2d");
      var gradientStrokeFill_1 = lineChartCanvas.createLinearGradient(0, 0, 0, 50);
      gradientStrokeFill_1.addColorStop(0, 'rgba(131, 144, 255, 0.5)');
      gradientStrokeFill_1.addColorStop(1, '#fff');
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: {
          labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
          datasets: [{
            label: 'Profit',
            data: [8, 6, 7, 8, 5, 7, 9, 7, 8, 7, 6, 7, 6],
            borderColor: '#6d7cfc',
            backgroundColor: gradientStrokeFill_1,
            borderWidth: 3,
            fill: true
          }]
        },
        options: lineStatsOptions
      });
    }
    if ($('#stats-line-graph-4').length) {
      var lineChartCanvas = $("#stats-line-graph-4").get(0).getContext("2d");
      var gradientStrokeFill_1 = lineChartCanvas.createLinearGradient(0, 0, 0, 50);
      gradientStrokeFill_1.addColorStop(0, 'rgba(131, 144, 255, 0.5)');
      gradientStrokeFill_1.addColorStop(1, '#fff');
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: {
          labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
          datasets: [{
            label: 'Profit',
            data: [7, 6, 8, 5, 8, 6, 8, 7, 8, 6, 9, 7, 7],
            borderColor: '#6d7cfc',
            backgroundColor: gradientStrokeFill_1,
            borderWidth: 3,
            fill: true
          }]
        },
        options: lineStatsOptions
      });
    }
    if ($('#dashboard-guage-chart').length) {
      var g3 = new JustGage({
        id: 'dashboard-guage-chart',
        value: 65,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        gaugeWidthScale: 1,
        customSectors: [{
          color: '#ff0000',
          lo: 50,
          hi: 100
        }, {
          color: '#00ff00',
          lo: 0,
          hi: 50
        }],
        counter: true
      });
    }
  });
})(jQuery);
// EXTERNAL MODULE: ./src/assets/js/shared/chart.js
var chart = __webpack_require__(892);
// EXTERNAL MODULE: ./src/assets/js/shared/misc.js
var misc = __webpack_require__(385);
// EXTERNAL MODULE: ./src/assets/js/shared/off-canvas.js
var off_canvas = __webpack_require__(634);
;// CONCATENATED MODULE: ./src/entry.js






})();

/******/ })()
;
//# sourceMappingURL=main.js.map