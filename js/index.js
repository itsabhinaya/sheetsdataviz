var key = "1tu7ipwkrpwr0obYAxfrboO5ePZIcyB5Ta9OrGTJo6TM";


Tabletop.init({
    key: key,
    callback: function (data, tabletop) {
            console.log(data);
        // bar_chart(options, data);
    },
    simpleSheet: true
});
  

function bar_chart(options, data) {
Chart.Bar('chart', {
  options: options,
  data: data
});
}
