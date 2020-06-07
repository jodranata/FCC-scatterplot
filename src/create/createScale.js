import * as d3 from 'd3';

export const createXscale = (dataArr, minRange, maxRange) => {
  const xMax = d3.max(dataArr.map(i => i.Year));
  const xMin = d3.min(dataArr.map(i => i.Year));
  return d3
    .scaleTime()
    .domain([xMin - 1, xMax + 1])
    .range([minRange, maxRange]);
};

export const createYScale = (dataArr, minRange, maxRange) => {
  const yMin = d3.min(dataArr.map(i => i.Seconds));
  const yMax = d3.max(dataArr.map(i => i.Seconds));
  return d3
    .scaleLinear()
    .domain([yMin, yMax])
    .range([minRange, maxRange]);
};
