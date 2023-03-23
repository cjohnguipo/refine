import { createTheme, Theme, ThemeOptions } from "@mui/material";

import { lightPalette } from "./palette/lightPalette";
import { darkPalette } from "./palette/darkPalette";
import { typography } from "./typography";
import { RefinePalettes, refineCustomColors } from "./palette";

const commonThemeProperties: ThemeOptions = {
    shape: {
        borderRadius: 6,
    },
    typography: {
        ...typography,
    },
};

const LightTheme = createTheme({
    ...commonThemeProperties,
    palette: lightPalette,
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorDefault: {
                    backgroundColor: "#fff",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage:
                        "linear-gradient(rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01))",
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h5: {
                    fontWeight: 800,
                    lineHeight: "2rem",
                },
            },
        },
    },
});

const DarkTheme = createTheme({
    ...commonThemeProperties,
    palette: darkPalette,
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage:
                        "linear-gradient(rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0.025))",
                },
            },
        },
        MuiAppBar: {
            defaultProps: {
                color: "transparent",
            },
        },
        MuiTypography: {
            styleOverrides: {
                h5: {
                    fontWeight: 800,
                    lineHeight: "2rem",
                },
            },
        },
    },
});

const RefineThemes = Object.keys(RefinePalettes).reduce((acc, key) => {
    const paletteName = key as keyof typeof RefinePalettes;
    const mode = RefinePalettes[paletteName].mode === "dark" ? "dark" : "light";

    const customColors = refineCustomColors[mode];
    const refinePalette = RefinePalettes[paletteName];
    const primaryColors = refinePalette?.primary;

    return {
        ...acc,
        [key]: createTheme({
            // components: {
            //     MuiAppBar: {
            //         defaultProps: {
            //             elevation: 0,
            //         },
            //     },

            //     MuiToolbar: {
            //         styleOverrides: {
            //             root: {
            //                 backgroundColor: customColors.header,
            //             },
            //         },
            //     },

            //     MuiDrawer: {
            //         styleOverrides: {
            //             paper: {
            //                 backgroundColor: customColors.sider,
            //             },
            //         },
            //     },

            //     MuiListItemButton: {
            //         styleOverrides: {
            //             root: {
            //                 "&.Mui-selected": {
            //                     color: primaryColors.light,
            //                     backgroundColor: primaryColors["100"],
            //                 },
            //             },
            //         },
            //     },
            // },
            palette: {
                ...RefinePalettes[paletteName],
            },
        }),
    };
}, {}) as Record<keyof typeof RefinePalettes, Theme>;

export { LightTheme, DarkTheme, RefineThemes };
