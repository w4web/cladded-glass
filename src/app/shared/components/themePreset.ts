import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

// Define your custom color shades

const customBlue = {
    50: '#e0faff', 
    100: '#b3f2ff',
    200: '#80eaff',
    300: '#4de2ff',
    400: '#1ad9ff',
    500: '#09CEF5',
    600: '#08b7db',
    700: '#069fbd',
    800: '#0488a0',
    900: '#026b7e',
    950: '#014c57' 
};

const ThemePreset = definePreset(Aura, {
    semantic: {
        primary: customBlue,
        colorScheme: {
            light: {
                primary: {
                    color: customBlue[500], 
                    inverseColor: '#ffffff', 
                    hoverColor: customBlue[400], 
                    activeColor: customBlue[600] 
                },
                highlight: {
                    background: customBlue[500],
                    focusBackground: customBlue[500],
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            }
        }
    }
});

export default ThemePreset;
