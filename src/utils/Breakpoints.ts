const size = {
    xSmall: '576px',
    small: '576px',
    preMedium: '630px',
    medium: '768px',
    large: '992px',
    xLarge: '1200px',
    x2Large: '1400px',
}

const breakpoints = {
    xSmall: `(max-width: ${size.xSmall})`,
    small: `(max-width: ${size.small})`,
    preMedium: `(max-width: ${size.preMedium})`,
    medium: `(max-width: ${size.medium})`,
    large: `(max-width: ${size.large})`,
    xLarge: `(max-width: ${size.xLarge})`,
    x2Large: `(max-width: ${size.x2Large})`
};


export default breakpoints;
