try {
    tailwind.config = {
        darkMode: 'class',
        theme: {
            extend: {
                colors: {
                    'primary-fixed': '#dbe1ff', error: '#ba1a1a', primary: '#004cca', 'on-secondary': '#ffffff',
                    'secondary-fixed-dim': '#4edad3', 'on-primary': '#ffffff', 'on-error': '#ffffff',
                    'on-primary-container': '#f3f3ff', 'primary-fixed-dim': '#b4c5ff', 'inverse-primary': '#b4c5ff',
                    'on-secondary-fixed-variant': '#00504c', 'on-background': '#191c1e', 'surface-container-highest': '#e0e3e5',
                    'surface-tint': '#0053da', background: '#f7f9fb', 'on-tertiary-fixed': '#2c1700',
                    'surface-container-lowest': '#ffffff', 'tertiary-fixed': '#ffdcbc', surface: '#f7f9fb',
                    'surface-bright': '#f7f9fb', 'surface-container': '#eceef0', 'outline-variant': '#c2c6d9',
                    'on-tertiary-container': '#fff1e7', 'on-tertiary-fixed-variant': '#683d00', 'surface-container-low': '#f2f4f6',
                    'error-container': '#ffdad6', 'on-tertiary': '#ffffff', 'inverse-on-surface': '#eff1f3',
                    'on-error-container': '#93000a', 'surface-container-high': '#e6e8ea', 'inverse-surface': '#2d3133',
                    'primary-container': '#0062ff', outline: '#737687', 'on-primary-fixed': '#00174b',
                    'on-primary-fixed-variant': '#003ea8', 'secondary-fixed': '#70f7ef', tertiary: '#7f4b00',
                    'surface-dim': '#d8dadc', 'on-surface-variant': '#424656', 'on-secondary-container': '#006f6a',
                    'secondary-container': '#6df4ec', secondary: '#006a66', 'tertiary-fixed-dim': '#ffb86b',
                    'surface-variant': '#e0e3e5', 'on-surface': '#191c1e', 'tertiary-container': '#a16000',
                    'on-secondary-fixed': '#00201e'
                },
                borderRadius: { DEFAULT: '0.25rem', lg: '0.5rem', xl: '0.75rem', full: '9999px' },
                spacing: { base: '8px', xs: '4px', sm: '12px', md: '24px', lg: '48px', xl: '80px', gutter: '24px' },
                fontFamily: {
                    'headline-lg': ['Plus Jakarta Sans'], caption: ['Noto Sans'], 'body-md': ['Noto Sans'],
                    'headline-md': ['Plus Jakarta Sans'], 'display-lg': ['Plus Jakarta Sans'],
                    'label-md': ['Plus Jakarta Sans'], 'body-lg': ['Noto Sans']
                },
                fontSize: {
                    'headline-lg': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
                    caption: ['12px', { lineHeight: '1.4', fontWeight: '400' }],
                    'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
                    'headline-md': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
                    'display-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
                    'label-md': ['14px', { lineHeight: '1.2', fontWeight: '600' }],
                    'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }]
                }
            }
        }
    };
} catch (_error) {
    // Keep the page usable if the Tailwind CDN fails to load.
}
