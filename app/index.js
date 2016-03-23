import d3 from 'd3';
//require('./index.css');

var data = [5, 10, 15, 20, 25];

d3.select('body').selectAll('div')
    .data(data)
    .enter()
    .append('div')
    .attr('class', 'bar')
    .style('height', d => { return d * 7 + 'px'};