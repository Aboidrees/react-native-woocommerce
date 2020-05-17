import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
    container: ViewStyle,
    card: ViewStyle
}

const styles = StyleSheet.create<Styles>({
    container: {
        alignItems: 'center'
    },
    card: {
        flex: 0,
        maxWidth: 180
    }

})

export default styles;
