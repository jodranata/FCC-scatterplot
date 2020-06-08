import * as d3 from 'd3';
import renderChart from './render/renderChart';
import renderScale from './render/renderScale';
import renderLegend from './render/renderLegend';
import createDropShadow from './create/createDropShadow';
import { createXscale, createYScale } from './create/createScale';
import { chartConstant, legendIndex } from './constant';
import './style.css';

const url = `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json`;
const { width, height, marginLeft, xPadding, yPadding } = chartConstant;

const svgContainer = d3
  .select('.chart-svg')
  .append('svg')
  .attr('width', width + 100)
  .attr('height', height + 50)
  .style('margin-left', marginLeft);

const svg = d3.select('svg');
createDropShadow(svg);

const legendContainer = d3
  .select('.chart-svg')
  .append('div')
  .attr('id', 'legend')
  .style('top', `${height + 10}px`);

const legendList = legendContainer.append('ul').attr('class', 'legend-lists');

d3.json(url).then(res => {
  const xScale = createXscale(res, xPadding, width);
  const yScale = createYScale(res, yPadding, height - yPadding);

  renderScale(svgContainer, xScale, yScale);
  renderChart(svgContainer, res, xScale, yScale);
  renderLegend(legendList, legendIndex);
});
