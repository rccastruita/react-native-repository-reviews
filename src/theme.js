import { Platform } from 'react-native';

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        appBarPrimary: '#24292e',
        //appBarPrimary: '#2eeacc',
        appBarSecondary: '#eee',
        mainBackground: '#e1e4e8',
        error: "#d73a4a",
    },
    fontSizes: {
        body: 14,
        subheading: 16,
        heading: 18,
        fieldError: 14
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System',
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
    margins: {
        formHorizontal: 20,
        formTop: 30,
        formFieldBottom: 25,
    }
};

export default theme;