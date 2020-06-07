import * as d3 from 'd3';
import { chartConstant } from '../constant';

const { rad } = chartConstant;
const renderLegend = (element, legend) => {
  element
    .selectAll('li')
    .data(legend)
    .enter()
    .append('li')
    .attr('class', 'legend-item')
    .each(function(d, i) {
      const li = d3.select(this);
      const legendSvg = li
        .append('svg')
        .attr('width', rad * 2 + 6)
        .attr('height', rad * 2 + 6)
        .style('vertical-align', 'middle')
        .style('margin-right', '3.5px');

      legendSvg
        .append('circle')
        .attr('r', rad)
        .style('transform', `translate(50%, 50%)`)
        .style('stroke', d.color)
        .style('stroke-width', '3px')
        .style('fill', 'transparent');

      li.append('span')
        .text(d.text)
        .style('color', '#f0f0f0')
        .style('font-weight', 600);
    });
};

export default renderLegend;
