import * as d3 from 'd3';
import { chartConstant } from '../constant';

const { height, yPadding, xPadding } = chartConstant;

const renderScale = (svg, xScale, yScale) => {
  const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));
  const yAxis = d3.axisLeft(yScale).tickFormat(d => {
    const secDate = new Date(null);
    secDate.setSeconds(d);
    return d3.timeFormat('%M:%S')(secDate);
  });

  svg
    .append('g')
    .attr('id', 'x-axis')
    .attr('transform', `translate(0, ${height - yPadding})`)
    .call(xAxis);

  svg
    .append('g')
    .attr('id', 'y-axis')
    .attr('transform', `translate(${xPadding}, 0)`)
    .call(yAxis);
};

export default renderScale;
