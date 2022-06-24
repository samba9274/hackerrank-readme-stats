const badge = (title, stars, totalStars, position) => {
  return `
<svg viewBox="0 0 91.66667 100" width="91.66667" height="100" x="${
    position * 100
  }">
  <g>
  
      <defs>
        <linearGradient id="badge-bronze-gradient" x1="52.5" y1="2.5" x2="52.5" y2="102.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffc5ab"></stop><stop offset="1" stop-color="#ffa38a"></stop></linearGradient>
        <linearGradient id="badge-silver-gradient" x1="52.5" y1="2.5" x2="52.5" y2="102.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#cee3eb"></stop><stop offset="1" stop-color="#aec8c7"></stop></linearGradient>
        <linearGradient id="badge-gold-gradient" x1="52.5" y1="2.5" x2="52.5" y2="102.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f9d641"></stop><stop offset="1" stop-color="#f8bc36"></stop></linearGradient>
      </defs>
      <path fill="url(#badge-${
        stars < 3 ? "bronze" : stars < 5 ? "silver" : "gold"
      }-gradient)" d="M98.28277,47.36h0c-.18459-9.382-.87983-17.797-2.0917-19.8595-1.02214-1.742-6.1721-5.43476-12.6195-9.45853L66.3804,8.23311C59.94162,4.89541,54.4699,2.5,52.49778,2.5c-2.42987,0-10.17687,3.63131-18.49789,8.18049-6.30411,3.44623-12.9328,7.41557-17.83631,10.74623-3.85037,2.61278-6.63864,4.828-7.35893,6.07393-.73574,1.27216-1.28014,4.91124-1.63613,9.67794l-.00014-.00008c-.45195,6.03951-.599,13.88935-.43933,21.10033.20233,9.11082.89243,17.18541,2.07561,19.22049C11.66541,82.42328,46.78277,102.5,52.49778,102.5c2.374,0,9.82245-3.47115,17.92388-7.87722,6.4-3.48081,13.19866-7.5418,18.23618-10.9459l-.00046-.00026c3.93694-2.6605,6.80064-4.91944,7.53385-6.17728.72907-1.2482,1.27024-4.80557,1.62881-9.48065l-.00014-.00008C98.269,62.13222,98.42408,54.47227,98.28277,47.36Z" transform="translate(-6.66667 -2.5)"></path>
  </g>
  <image href="https://hackerrank-readme-stats.herokuapp.com/resources/svgs/${title
    .replaceAll(" ", "-")
    .toLocaleLowerCase()}.svg" x="50%" y="22" height="27" width="27" transform="translate(-13.5, 0)"></image>
  ${
    title !== "Days of Statistics"
      ? `<text style="font-weight: 700;font-family: OpenSans;fill: #39424e;text-anchor: middle;font-weight: 600;font-family: AvenirNext-Medium, Segoe UI, Ubuntu, Helvetica Neue, Helvetica,Arial, sans-serif;" x="50%" y="65.5" font-size="10">${title}</text>`
      : `<text style="font-weight: 700;font-family: OpenSans;fill: #39424e;text-anchor: middle;font-weight: 600;font-family: AvenirNext-Medium, Segoe UI, Ubuntu, Helvetica Neue, Helvetica,Arial, sans-serif;" x="50%" y="56" font-size="10">Days of</text><text style="font-weight: 700;font-family: OpenSans;fill: #39424e;text-anchor: middle;font-weight: 600;font-family: AvenirNext-Medium, Segoe UI, Ubuntu, Helvetica Neue, Helvetica,Arial, sans-serif;" x="50%" y="67" font-size="10">Statistics</text>`
  }
  <g transform="translate(${-3.5 - 4.5 * (stars - 1)}, 0)">
      <svg x="50%" y="71" height="10">
          ${Array.apply(null, Array(stars)).map(
            (e, i) => `
          <svg viewBox="0 0 6.54904 6.25825" width="7" x="${i * 9}">
              <path style="fill: #39424e;" d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175" transform="translate(-49.22548 -74.85817)"></path>
          </svg>
          `
          )}
      </svg>
  </g>
</svg>
    `;
};
module.exports = badge;
