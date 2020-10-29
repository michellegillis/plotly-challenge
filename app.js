// test subject ID selection

var url = "../samples.json"
var selectDropdown = d3.select("#selDataset");

function selectID() {
    d3.json(url).then((data) =>{
        var name = data.names
        console.log(name)
        name.forEach((names) => {
            selectDropdown.append("option").text(names);
        });
    });
}
selectID();

// demographic info
// var demInfo = d3.select("#sample-metadata");

// function metaDataList() {
//     d3.json(url).then((data) => {
//         var metaData = data.metadata
//         console.log(metaData)

//     });
// }
// metaDataList();

// event listener
selectDropdown.on("change", optionChanged)

// default bar chart (subject 940)
function defaultPlot() {
    d3.json(url).then((data) => {
        console.log(data)
        var sample = data.samples
        var samples = sample[0]
        var top_10 = samples.sample_values
        var top_10_labels = samples.otu_ids
        var trace = {
        x : top_10.slice(0, 10),
        // y : top_10_labels.slice(0, 10),
        type : 'bar',
        orientation: 'h'
        }
        
        var layout = {
            title: "Most Common OTUs",
            xaxis: { title : "OTU Frequency"}
            // yaxis: { tickvals : samples.otu_ids}            
        }
        
        Plotly.newPlot("bar", [trace], layout);
    })
};
defaultPlot();


// default bubble chart (subject 940)
function defaultBubble(){
    d3.json(url).then((data) => {
        var sample = data.samples
        var samples = sample[0]
        var trace1 = {
            x: samples.otu_ids,
            y: samples.sample_values,
            mode: 'markers',
            // marker: {
            //     size: (sample.sample_values),
            // }
        };
        var layout = {
            xaxis: {title: 'OTU ID'},
        };
        
        Plotly.newPlot('bubble', [trace1], layout);
    });
};
defaultBubble();



  
  
    