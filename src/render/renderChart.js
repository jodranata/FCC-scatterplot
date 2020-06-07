import * as d3 from 'd3';
import { handleHoverIn, handleHoverOut } from '../handleHover';
import { chartConstant, legendIndex } from '../constant';

const { rad } = chartConstant;

const secDateObj = sec => {
  const dateObj = new Date(null);
  dateObj.setSeconds(sec);
  return dateObj;
};

const renderChart = (svg, dataArr, xScale, yScale) => {
  svg
    .selectAll('circle')
    .data(dataArr)
    .enter()
    .append('circle')
    .attr('data-xvalue', d => d.Year)
    .attr('data-yvalue', d => secDateObj(d.Seconds))
    .attr('cx', d => xScale(d.Year))
    .attr('cy', d => yScale(d.Seconds))
    .attr('r', rad)
    .attr('class', 'dot')
    .style('fill', 'transparent')
    .style('stroke', d => {
      const dotColor = d.Doping ? '#e94f4f' : '#24d47c';
      const dopingText = d.Doping
        ? 'Alleged or convicted of doping'
        : 'No evidence of doping';
      const idx = legendIndex.findIndex(i => i.color === dotColor);
      if (idx === -1) {
        legendIndex.push({
          color: dotColor,
          text: dopingText,
        });
      }
      return dotColor;
    })
    .on('mouseover', function(d) {
      d3.select(this)
        .transition()
        .duration(150)
        .style('fill', `${d.Doping ? '#e94f4f' : '#24d47c'}`)
        .style('filter', 'url(#drop-shadow)');

      const pos = {
        x: xScale(d.Year),
        y: yScale(d.Seconds),
      };
      handleHoverIn(d, pos);
    })
    .on('mouseleave', function() {
      d3.select(this)
        .transition()
        .duration(150)
        .style('fill', `transparent`)
        .style('filter', null);
      handleHoverOut();
    });
};

export default renderChart;
