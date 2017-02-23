$(document).ready(function () {
    var ctx = $("#mycanvas2");
    
    var data = {
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
    var options = {
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
    
    var chart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options
    });
});


