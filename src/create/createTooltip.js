const createTooltip = dataDetail => {
  const { Name, Year, Time, Doping, Nationality, Place } = dataDetail;
  const dopingText = Doping || 'No allegations or evidence of doping';
  return `
  <div class="tooltip-head">${Name}<span class="nationality">(${Nationality})</span></div>
  <div class="tooltip-body">
    <div class="tooltip-detail detail-list">
      <div class="key-value">
        <div>Time</div>
        <div>:</div>
        <div>${Time}</div>
      </div>
      <div class="key-value">
        <div>Place</div>
        <div>:</div>
        <div>${Place}</div>
      </div>
      <div class="key-value">
        <div>Year</div>
        <div>:</div>
        <div>${Year}</div>
      </div>
    </div>
    <div class="tooltip-detail doping">
      ${dopingText}
    </div>
  </div>
  `;
};

export default createTooltip;
