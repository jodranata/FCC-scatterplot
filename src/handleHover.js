import { select } from 'd3';
import createTooltip from './create/createTooltip';

const tooltip = select('.chart-svg')
  .append('div')
  .attr('id', 'tooltip')
  .style('display', 'none')
  .style('opacity', '0');

const marginLeft = 75;

export const handleHoverIn = (data, pos) => {
  const tooltipText = createTooltip(data);
  const tooltipBackground = data.Doping ? '#e94f4fdc' : '#24d47cdc';
  tooltip
    .transition()
    .duration(100)
    .style('display', 'block')
    .style('background', `${tooltipBackground}`);

  tooltip
    .transition()
    .duration(200)
    .style('opacity', 0.9);

  tooltip
    .html(tooltipText)
    .attr('data-year', data.Year)
    .style('left', `${pos.x + marginLeft + 15}px`)
    .style('top', `${pos.y}px`)
    .style('transform', 'translateY(-50%)');
};

export const handleHoverOut = () => {
  tooltip
    .transition()
    .duration(100)
    .style('display', 'none');
  tooltip
    .transition()
    .duration(150)
    .style('background', `none`);
  tooltip
    .transition()
    .duration(200)
    .style('opacity', '0');
};
