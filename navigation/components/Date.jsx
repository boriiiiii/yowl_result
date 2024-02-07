import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';

const Date = ({ date, onSelectDate, selected }) => {
    const day = moment(date).format('ddd');
    const dayNumber = moment(date).format('D');
    const fullDate = moment(date).format('YYYY-MM-DD');

    return (
        <TouchableOpacity
            onPress={() => onSelectDate(fullDate)}
            style={styles.container}
        >
            <Text style={[styles.dayText, selected === fullDate && styles.selectedText]}>
                {day}
            </Text>
            <View style={styles.space} />
            <Text style={[styles.dayNumberText, selected === fullDate && styles.selectedText]}>
                {dayNumber}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 2,
        alignItems: 'center',
        height: 72,
        width: 48,
        borderRadius: 4,
        backgroundColor: 'transparent',
    },
    dayText: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'normal',
        color: 'white',
    },
    selectedText: {
        fontWeight: 'bold',
    },
    space: {
        height: 6,
    },
    dayNumberText: {
        fontSize: 12,
        fontWeight: 'normal',
        color: 'white',
    },
});

export default Date;
