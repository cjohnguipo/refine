const commonLightPalette = {};

const commonDarkPalette = {};

export const refineCustomColors = {
    light: {
        header: "#ffffff",
        sider: "#F7F8F9",
    },
    dark: {
        header: "#1F1F1F",
        sider: "#141414",
    },
} as const;

export const RefinePalettes = {
    Blue: {
        ...commonLightPalette,
        mode: "light",
        primary: {
            main: "#1976D2",
            light: "#4791db",
            dark: "#115293",
            "100": "rgba(25, 118, 210, 0.08)",
        },
    },
    BlueDark: {
        ...commonDarkPalette,
        mode: "dark",
        primary: {
            main: "#67b7f7",
            light: "#85c5f8",
            dark: "#4880ac",
            "100": "rgba(66, 165, 245, 0.08)",
        },
    },
    Indigo: {
        ...commonLightPalette,
        mode: "light",
        primary: {
            main: "#303F9F",
            light: "#5965b2",
            dark: "#212c6f",
            "100": "rgba(48, 63, 159, 0.08)",
        },
    },
    IndigoDark: {
        ...commonDarkPalette,
        mode: "dark",
        primary: {
            main: "#5C6BC0",
            light: "#7c88cc",
            dark: "#404a86",
            "100": "rgba(25, 118, 210, 0.08)",
        },
    },
    Purple: {
        ...commonLightPalette,
        mode: "light",
        primary: {
            main: "#7B1FA2",
            light: "#954bb4",
            dark: "#561571",
            "100": "rgba(123, 31, 162, 0.08)",
        },
    },
    PurpleDark: {
        ...commonDarkPalette,
        mode: "dark",
        primary: {
            main: "#AB47BC",
            light: "#bb6bc9",
            dark: "#773183",
            "100": "rgba(171, 71, 188, 0.08)",
        },
    },
    Pink: {
        ...commonLightPalette,
        mode: "light",
        primary: {
            main: "#C2185B",
            light: "#ce467b",
            dark: "#87103f",
            "100": "rgba(194, 24, 91, 0.08)",
        },
    },
    PinkDark: {
        ...commonDarkPalette,
        mode: "dark",
        primary: {
            main: "#EC407A",
            light: "#ef6694",
            dark: "#a52c55",
            "100": "rgba(236, 64, 122, 0.08)",
        },
    },
    Red: {
        ...commonLightPalette,
        mode: "light",
        primary: {
            main: "#D32F2F",
            light: "#db5858",
            dark: "#932020",
            "100": "rgba(211, 47, 47, 0.08)",
        },
    },
    RedDark: {
        ...commonDarkPalette,
        mode: "dark",
        primary: {
            main: "#EF5350",
            light: "#f27573",
            dark: "#a73a38",
            "100": "rgba(239, 83, 80, 0.08)",
        },
    },
    Amber: {
        ...commonLightPalette,
        mode: "light",
        primary: {
            main: "#FFA000",
            light: "#ffb333",
            dark: "#b27000",
            "100": "rgba(255, 160, 0, 0.08)",
        },
    },
    AmberDark: {
        ...commonDarkPalette,
        mode: "dark",
        primary: {
            main: "#FFCA28",
            light: "#ffd453",
            dark: "#E87040",
            "100": "rgba(255, 160, 0, 0.08)",
        },
    },
    Green: {
        ...commonLightPalette,
        mode: "light",
        primary: {
            main: "#689F38",
            light: "#86b25f",
            dark: "#486f27",
            "100": "rgba(56, 142, 60, 0.08)",
        },
    },
    GreenDark: {
        ...commonDarkPalette,
        mode: "dark",
        primary: {
            main: "#9CCC65",
            light: "#afd683",
            dark: "#6d8e46",
            "100": "rgba(56, 142, 60, 0.08)",
        },
    },
} as const;
