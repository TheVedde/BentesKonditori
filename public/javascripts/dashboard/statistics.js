window.onload = function() {

    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Accounting"
        },
        legend:{
            horizontalAlign: "right",
            verticalAlign: "center"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
            indexLabel: "{name}",
            legendText: "{name} (#percent%)",
            indexLabelPlacement: "inside",
            dataPoints: [
                { y: 6566.4, name: "Housing" },
                { y: 2599.2, name: "Food" },
                { y: 1231.2, name: "Fun" },
                { y: 1368, name: "Clothes" },
                { y: 684, name: "Others"},
                { y: 1231.2, name: "Utilities" }
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);

    const options1 = {
        animationEnabled: true,
        title: {
            text: "ACME Corporation Apparel Sales"
        },
        data: [{
            type: "doughnut",
            innerRadius: "40%",
            showInLegend: true,
            legendText: "{label}",
            indexLabel: "{label}: #percent%",
            dataPoints: [
                { label: "Department Stores", y: 6492917 },
                { label: "Discount Stores", y: 7380554 },
                { label: "Stores for Men / Women", y: 1610846 },
                { label: "Teenage Specialty Stores", y: 950875 },
                { label: "All other outlets", y: 900000 }
            ]
        }]
    };
    $("#chartDoughContainer").CanvasJSChart(options1);


    const options2 = {
        animationEnabled: true,
        title:{
            text: "Company Revenue by Year"
        },
        axisY: {
            title: "Revenue in USD",
            valueFormatString: "#0,,.",
            suffix: "mn",
            prefix: "$"
        },
        data: [{
            type: "area",
            markerSize: 5,
            xValueFormatString: "YYYY",
            yValueFormatString: "$#,##0.##",
            dataPoints: [
                { x: new Date(2000, 0), y: 2289000 },
                { x: new Date(2001, 0), y: 2830000 },
                { x: new Date(2002, 0), y: 1009000 },
                { x: new Date(2003, 0), y: 1840000 },
                { x: new Date(2004, 0), y: 1396000 },
                { x: new Date(2005, 0), y: 2613000 },
                { x: new Date(2006, 0), y: 1821000 },
                { x: new Date(2007, 0), y: 1000000 },
                { x: new Date(2008, 0), y: 1397000 },
                { x: new Date(2009, 0), y: 1506000 },
                { x: new Date(2010, 0), y: 1798000 },
                { x: new Date(2011, 0), y: 2386000 },
                { x: new Date(2012, 0), y: 4704000},
                { x: new Date(2013, 0), y: 4926000 },
                { x: new Date(2014, 0), y: 1394000 },
                { x: new Date(2015, 0), y: 972000 },
                { x: new Date(2016, 0), y: 1140000 }
            ]
        }]
    };
    $("#chartAreaContainer").CanvasJSChart(options2);


};
