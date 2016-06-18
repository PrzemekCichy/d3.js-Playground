var margin = { top: 30, right: 20, bottom: 30, left: 50 };
var containerWidth = 600;
var containerHeight = 150;
var height = containerHeight - margin.top - margin.bottom;
var width = containerWidth - margin.left - margin.right;
//Changing range values changes scale start and end point
var xAxisScale = d3.scale.linear().range([0, width]);
var dataValue = [Math.floor(Math.random() * 530)];
//dataValue = [430];
//Make container which holds scale and moving bar
var svgContainer = d3.select("body")
    .append("svg")
    .attr("width", containerWidth)
    .attr("height", containerHeight)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//.attr("style", "outline: thin solid blue;");
//create rectangle based on passed value dataValue
svgContainer.selectAll("rect")
    .data(dataValue)
    .enter()
    .append("rect")
    .attr({
    x: 0,
    y: 0,
    width: function (d, i) { return d; },
    height: height,
    fill: function (d, i) { return "rgb(" + 0 + ", 10, 100)"; }
});
var xAxis = d3.svg.axis().scale(xAxisScale)
    .orient("bottom").ticks(10);
svgContainer.append("g") // Add the X Axis
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
/*
svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) { return d; })
    .attr({"text-anchor": "middle",
        x: function (d, i) { return i * barWidth; },
        y: function (d) { return h - d; }
    })


class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
*/ 
//# sourceMappingURL=app.js.map