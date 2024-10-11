/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        fontSize: {
            xs: '0.7rem',
            sm: '0.8rem',
            md: "0.88rem",
            base: '1rem',
            lg:'1.1rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '2rem',
            '4xl': '2.5rem',
            '5xl': '3.0rem',
            '6xl': '3.75rem'
        },
        letterSpacing: {
            huge: "1em",
            wider: '0.75em',
            wide: '0.55em',
            reg: '0.2em',
            text: '0.03em'
        },
        fontFamily: {
            'days': ['Days One', 'sans-serif']
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                
            },
            filter: {
                'blur-5': 'blur(5px)',
            },

            colors: {
                main: "#124C5F",
                mint: "#C7E7E1",
                lightGray: "#FAFBFB",
                banana: "#FFEE94",
                lightBanana: "#FEFAE3",
                blue: "#DEECF5",
                darkGray: "#5B5B5B",
                pink: "#EBA8BF",
                cream: "#FFFFF6",
                babyBlue: "#F6FAF9",
                black: "#4E4C46"
            },
            typography: (theme) => ({
                // Create a custom variant called 'blog'
                blog: {
                    css: {
                        // Dark mode styles
                        '.dark &': {
                            'p, p *, ul, ol, li': {
                                color: theme('colors.gray.300') + ' !important',
                            },
                            'strong, em': {
                                color: 'inherit !important',
                            },
                            'h2, h3': {
                                color: theme('colors.gray.100') + ' !important',
                            },
                            'ul, ol': {
                                'li::marker': {
                                    color: theme('colors.gray.300') + ' !important',
                                },
                            },
                            'sup': {
                                color: theme('colors.yellow.100') + '!important'
                            }
                        },
                        // Costumize titles 
                        'h2': {
                            color: "#4E4C46",
                            marginTop: "3rem",
                            marginBottom: "1.5rem",
                            fontSize: "2rem",
                            fontWeight: 800
                        }, 
                        'h3': {
                            color: "#4E4C46",
                            marginTop: "4rem",
                            marginBottom: "1.5rem",
                            fontSize: "1.5rem",
                            fontWeight: 600,
                            '@media (max-width: 479px)': {
                                marginBottom: '1.75rem',
                                fontSize: "1.25rem"
                            },
                            '@media (max-width: 639px)': {
                                marginBottom: '1.5rem',
                                fontSize: "1.35rem"
                            },

                        },

                        'strong': {
                            color: "#4E4C46",
                        },

                        // Customize paragraph margins
                        'p': {
                            color: "#4E4C46",
                            fontSize: "19px",
                            // marginTop: '2rem',
                            marginBottom: '2.5rem',
                            fontWeight: 300,
                            '@media (max-width: 479px)': {
                                marginTop: '1.75rem',
                                marginBottom: '1.75rem',
                                fontSize: "12px"
                            },
                            '@media (max-width: 639px)': {
                                marginTop: '1.75rem',
                                marginBottom: '1.75rem',
                                fontSize: "14px"
                            },
                        },
                        

                        // Costumize lists
                        'ul': {
                            listStyleType: 'disc', // Use 'disc' for bullets
                            fontSize: "19px",
                            color: "#4E4C46",
                            paddingLeft: '1.5rem', // Indent the list
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            fontWeight: 300,
                            '@media (max-width: 479px)': {
                                marginTop: '1.75rem',
                                marginBottom: '1.75rem',
                                fontSize: "12px"
                            },
                            '@media (max-width: 639px)': {
                                marginTop: '1.75rem',
                                marginBottom: '1.75rem',
                                fontSize: "14px"
                            },
                        },
                        'ol': {
                            listStyleType: 'decimal', // For ordered lists
                            color: "#4E4C46",
                            paddingLeft: '1.5rem',
                            marginTop: '1rem',
                            marginBottom: '1.5rem',
                            fontWeight: 300,
                        },
                        'li': {
                            marginTop: '0.5rem',
                            marginBottom: '1.5rem',
                        },

                        // Costumize link
                        "a:hover": {
                            backgroundColor: "#C7E7E1"
                        },
                    },
                },
            }),
        },
        screens: {
            "3xl": { min: "1535px" }, //Extra-large desktops

            "2xl": { min: "1280px" }, // Larger desktops

            xl: { max: "1279px" }, // Laptops and desktops

            lg: { max: "1023px" }, // Tablets and smaller laptops

            md: { max: "768px" }, // Tablets and smaller laptops

            sm: { max: "639px" }, // Larger mobile devices

            xs: { max: "479px" } // Mobile devices 
        },
    },
    plugins: [
        require('tailwindcss-filters'),
        require('@tailwindcss/typography')
    ],
}