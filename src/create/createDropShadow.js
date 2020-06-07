const createDropShadow = svg => {
  const defs = svg.append('defs');
  const dropShadowFilter = defs
    .append('svg:filter')
    .attr('id', 'drop-shadow')
    .attr('filterUnits', 'userSpaceOnUse')
    .attr('width', '250%')
    .attr('height', '250%');
  dropShadowFilter
    .append('svg:feGaussianBlur')
    .attr('in', 'SourceGraphic')
    .attr('stdDeviation', 5)
    .attr('result', 'blur-out');
  dropShadowFilter
    .append('svg:feColorMatrix')
    .attr('in', 'blur-out')
    .attr('type', 'hueRotate')
    .attr('values', 0)
    .attr('result', 'color-out');
  dropShadowFilter
    .append('svg:feOffset')
    .attr('in', 'color-out')
    .attr('dx', 0)
    .attr('dy', 0)
    .attr('result', 'the-shadow');
  dropShadowFilter
    .append('svg:feBlend')
    .attr('in', 'SourceGraphic')
    .attr('in2', 'the-shadow')
    .attr('mode', 'normal');
  return dropShadowFilter;
};

export default createDropShadow;
