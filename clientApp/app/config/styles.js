import { Platform } from 'react-native';
import colors from './colors';

// colors,
export default {
    text:{
        color: colors.dark, 
        fontSize:18, 
        fontFamily: Platform.OS==='android'?'Roboto':'Avenir',
    }
}