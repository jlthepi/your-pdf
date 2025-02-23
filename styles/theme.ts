"use client";
import { createTheme } from "@mui/material/styles";
import { blueGrey, purple } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: blueGrey,
        secondary: purple,
    },
    typography: {
        fontFamily: [
            '"Pretendard Variable"',
            "Pretendard",
            "-apple-system",
            "BlinkMacSystemFont",
            "system-ui",
            "Roboto",
            '"Helvetica Neue"',
            '"Segoe UI"',
            '"Apple SD Gothic Neo"',
            '"Noto Sans KR"',
            '"Malgun Gothic"',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            "sans-serif;",
        ].join(","),
    },
});

export default theme;
