$(document).ready(function () {
    $.ajax({
        url: "http://localhost/TestGraph/data.php",
        method: "GET",
        success: function (data) {
                console.log(data);
                var espece = [];
                var taille = [];

                for(var i = 0; i<=11; i++) {
                    espece.push(data[i].nomEspece);
                    taille.push(data[i].tMoyenne);
            }

             var chartdata = {
                    labels: espece,
                    datasets : [
                        {
                            label: 'Taille Moyenne',
                            backgroundColor: 'rgba(200, 200, 200, 0.75)',
                            borderColor: 'rgba(200, 200, 200, 0.75)',
                            hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                            hoverBorderColor: 'rgba(200, 200, 200, 1)',
                            data: taille
                        }
                    ]
             };
             var ctx = $('#mycanvas');
             var barGraph = new Chart(ctx, {
                type: 'bar',
                data: chartdata
             });
        },
        error: function (data) {
            console.log(data);
        }
    });
    
    //Second graph
    var cty = $("#mycanvas2");
    
    var data2 = {
        labels : ["truc", "bidule", "machin", "chose"],
        datasets : [
            {
                label : "Chiffres A",
                data : [10, 11, 14, 45],
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label : "Chiffres B",
                data : [5, 24, 18, 37],
                backgroundColor: "green",
                borderColor: "lightgreen",
                fill: false,
                lineTension: 0,
                radius: 5
            }
        ]
    };
    
        //options
    var options2 = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "Line Graph",
            fontSize: 18,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };
    
    var chart2 = new Chart(cty, {
        type: "radar",
        data: data2,
        options: options2
    });
});

