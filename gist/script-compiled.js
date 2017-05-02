/* const data = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]*/
var data = d3.range(10).map(function (n) { return n * 10; })

var xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 700])

var sqrtScale = d3.scaleSqrt()
    .domain([0, 100])
    .range([0, 30])

/* const colourScale = d3.scaleLinear()
    .domain([0, 50, 100])
    .range(['red', '#ddd', 'blue']) */

var sequentialScale = d3.scaleSequential()
    .domain([0, 100])
    .interpolator(d3.interpolateRainbow)

var svg = d3.select('svg')
// const width = +svg.attr('width')
var height = +svg.attr('height')

console.log('height', height)

svg.select('#vis')
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('r', function (d) { return sqrtScale(d); })
    .attr('cx', function (d) { return xScale(d); })
    .attr('cy', function (d) { return height/2; })
    //.style('fill', d => colourScale(d)) 
    .style('fill', function (d) { return sequentialScale(d); }) 


