var key = "1tu7ipwkrpwr0obYAxfrboO5ePZIcyB5Ta9OrGTJo6TM";


Tabletop.init({
    key: key,
    callback: access_data,
    parseNumbers: true,
    wanted: [ "Settings", "Data" ],
    simpleSheet: true
});
  

function access_data(data, tabletop){
    var sheets_name = tabletop.model_names;

    var sheet_data = tabletop.sheets("Data");

    var xValues = [];
    var x_name = sheet_data.column_names[0]

    for (var i = 0; i < sheet_data.all().length; i++) {
        xValues.push(sheet_data.all()[i][x_name]);
    }

    var yValues = [];
    var y_name = sheet_data.column_names[1];

    for (var i = 0; i < sheet_data.all().length; i++) {
        yValues.push(sheet_data.all()[i][y_name]);
    }


      var sheet_settings = tabletop.sheets("Settings").toArray();
      var x_axis = sheet_settings[0][1];
      var y_axis = sheet_settings[1][1];


      console.log(xValues);
      console.log(yValues);
      console.log(x_axis);
      console.log(y_axis);

    var data = {
  labels: xValues,
  datasets: [{
    label: "Dataset #1",
    backgroundColor: "rgba(255,99,132,0.2)",
    borderColor: "rgba(255,99,132,1)",
    borderWidth: 2,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgba(255,99,132,1)",
    data: yValues,
  }]
};

var options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    }],
    xAxes: [{
      gridLines: {
        display: false
      }
    }]
  }
};

      var myBarChart = new Chart("chart", {
    type: 'bar',
    data: data,
    options: options
});


}

