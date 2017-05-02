/* const data = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]*/
const data = d3.range(10).map(n => n * 10)

const xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 700])

const sqrtScale = d3.scaleSqrt()
    .domain([0, 100])
    .range([0, 30])

/* const colourScale = d3.scaleLinear()
    .domain([0, 50, 100])
    .range(['red', '#ddd', 'blue']) */

const sequentialScale = d3.scaleSequential()
    .domain([0, 100])
    .interpolator(d3.interpolateRainbow)

const svg = d3.select('svg')
// const width = +svg.attr('width')
const height = +svg.attr('height')

console.log('height', height)

svg.select('#vis')
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('r', d => sqrtScale(d))
    .attr('cx', d => xScale(d))
    .attr('cy', d => height/2)
    //.style('fill', d => colourScale(d)) 
    .style('fill', d => sequentialScale(d)) 

