angular.module('myCharts',[]).controller('chartsControl',function(){
    var chart = this;
    
    chart.name = '';
    chart.points = [];
    chart.labels = [];
    chart.txtpnts = '';
    chart.R = '153' ;chart.G = '255';chart.B = '51'; chart.A = '0.4';
    
    chart.clear = function(){
        chart.points = [];
        chart.labels = [];
        chart.txtpnts = '';
        chart.generate();
    }
    
    chart.generate = function(){
        var graphcolor = 'rgba('+chart.R+','+chart.G+','+chart.B+','+chart.A+')';
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: chart.labels,
            datasets: [{
              label: chart.name,
              data: chart.points,
              backgroundColor: graphcolor//"rgba(153,255,51,0.4)"
            }]
          }
        });
    }
    
    chart.nameChange = function(){
        chart.generate();
    }
    
    chart.focus = function(){
        chart.info = 'As you make changes, it will be visible on the graph.'
    }
    
    chart.focusRemoved = function(){
        chart.info = '';
        chart.txtpnts = chart.txtpnts.replace(/[^0-9.,]/g, "");
        chart.points = chart.txtpnts.split(",");
        chart.labels = Array(chart.points.length).fill('');
        chart.generate();
    }
    
    chart.changeR = function(){
        chart.generate();
    }
    
    chart.changeG = function(){
        chart.generate();
    }
    
    chart.changeB = function(){
        chart.generate();
    }
    
    chart.changeA = function(){
        chart.generate();
    }
});
