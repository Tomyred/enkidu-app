const lightText = {
    primary: "#111827",
    secondary: "#6B7280",
    disabled: "#959CA9",
};

const darkText = {
    primary: "#FFFFFF",
    secondary: "#E5E7EB",
    disabled: "#9CA3AF",
};

export const defaultTheme = {
    palette: {
        type: "light",
        text: lightText,
        common: {
            black: "rgb(17, 24, 39)",
            white: "rgb(255, 255, 255)",
        },
        primary: "#212a38",
        secondary: {
            light: "#bdf2fa",
            main: "#22d3ee",
            dark: "#0cb7e2",
        },
        background: {
            paper: "#FFFFFF",
            default: "#f6f7f9",
        },
        error: "#FF0000",
    },
    status: {
        success: "#00FF00",
        danger: "orange",
    },
};

export const darkTheme = {
    palette: {
        type: "dark",
        text: darkText,
        primary: "#212a38",
        secondary: {
            light: "#E5E7EB",
            main: "#22d3ee",
            dark: "#0cb7e2",
        },
        background: {
            paper: "#1E2125",
            default: "#121212",
        },
        error: "#FF0000",
    },
    status: {
        success: "#7FFF00",
        danger: "orange",
    },
};
