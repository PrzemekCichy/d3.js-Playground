var containerHeight = 50;
var containerWidth = 200;
var dataValue = Math.random();
dataValue = Math.floor(dataValue * 100);
dataValue = [dataValue];

var svg = d3.select("body")
    .append("svg")
    .attr("width", containerWidth)
    .attr("height", containerHeight);
svg.selectAll("rect")
    .data(dataValue)
    .enter()
    .append("rect")
    .attr({
    x: function (d, i) { return i * 10; },
    y: function (d) { return containerHeight - d; },
    width: 10,
    height: function (d) { return d; },
    fill: function (d, i) { return "rgb(" + i * 20 + ", 0, 0)"; }
});
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