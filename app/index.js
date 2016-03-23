import d3 from 'd3';
require('./index.css');

function update () {
    data.forEach((k, v) => {
        return {
            x: Math.random() * 100,
            y: Math.random() * 100,
            r: Math.random() * 20
        }
    });

    svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('fill', colorScale)
        .attr('class', 'circle')
        .attr('cx', d => { return xScale(d.x); })
        .attr('cy', d => { return yScale(d.y); })
        .attr('r', d => { return d.r; })
        .on('click', function (d) { d3.select(this).attr('r', d.r*2); });
}

var data = Array.from(
    Array(20).keys(), (i, v) => {
        return {
            x: Math.random() * 100,
            y: Math.random() * 100,
            r: Math.random() * 20
        };
    });
const mult = 5;
const box = {w: 400, h: 300};
const margin = {top: 20, right: 20, bottom: 60, left: 60 };

var svg = d3.select('#chart').append('svg')
    .attr('width', box.w + margin.left + margin.right)
    .attr('height', box.h + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

const xScale = d3.scale.linear()
    .domain([0, 100])
    .range([0, box.w]);

const xAxis = d3.svg.axis()
    .scale(xScale)
    .orient('bottom')
    .ticks(5)
    .innerTickSize(6)
    .outerTickSize(12)
    .tickPadding(12);

    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0, ' + (box.h + 0) + ')')
        .call(xAxis);

const yScale = d3.scale.linear()
    .domain([0, d3.max(data, d => { return d.y; })])
    .range([box.h, 0]);

const yAxis = d3.svg.axis()
    .scale(yScale)
    .orient('left')

    svg.append('g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(0, 0)')
        .call(yAxis);

const colorScale = d3.scale.quantile()
    .domain([0, 10, data.length - 10, data.length])
    .range(['orange', 'blue', 'red']);

svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('fill', colorScale)
    .attr('class', 'circle')
    .attr('cx', d => { return xScale(d.x); })
    .attr('cy', d => { return yScale(d.y); })
    .attr('r', d => { return d.r; })
    .on('click', function (d) { d3.select(this).attr('r', d.r*2); });