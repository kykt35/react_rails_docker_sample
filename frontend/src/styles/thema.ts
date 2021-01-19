import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        background: {
            default: '#fff',
        },
        primary: {
            main: '#FFB700',
            contrastText: '#fff',
        },
        secondary: {
            main: '#7693D5',
        },
    },
    typography: {
        body2: {
            fontSize: '1rem',
            lineHeight: 'normal',
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '*': {
                    boxSizing: 'border-box',
                },
                body: {
                    padding: 0,
                },
            },
        },
    },
});
