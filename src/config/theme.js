const borderWidth =
    window.devicePixelRatio && devicePixelRatio >= 2 ? '0.5px' : '1px';

export const theme = {
    breakpoints: {
        s: '768px',
        m: '1024px',
        l: '1200px',
    },
    fonts: {
        family: {
            base:
                "'Dosis', sans-serif",
        },
        lineHeight: {
            base: '1.5',
            heading: '1.2',
        },
        sizes: {
            base: '1rem',
            xxs: '0.2rem',
            xs: '0.4rem',
            s: '0.8rem',
            l: '1.6rem',
            xl: '2rem',
            h1: '3rem',
            h2: '2.8rem',
            h3: '2.6rem',
            h4: '2.4rem',
        },
        weights: {
            light: 200,
            normal: 400,
            semiBold: 600,
            bold: 800,
        },
    },
    radius: {
        base: '3px',
        s: '2px',
        l: '20px',
    },
    spacing: {
        base: '16px',
        xs: '5px',
        s: '10px',
        m: '12px',
        l: '32px',
        xl: '60px',
    },
    borderWidth
}