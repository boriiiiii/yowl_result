// Calendar.jsx
import { useState, useEffect, useRef } from 'react'
import { Text, View, ScrollView, Dimensions } from 'react-native'
import moment from 'moment'
import Date from './Date'

const Calendar = ({ onSelectDate, selected }) => {
    const [dates, setDates] = useState([])
    const scrollViewRef = useRef();
    const daysBeforeToday = 3;
    const daysAfterToday = 10;
    const screenWidth = Dimensions.get('window').width;

    const getDates = () => {
        const _dates = []

        for (let i = -daysBeforeToday; i <= daysAfterToday; i++) {
            const date = moment().add(i, 'days')
            _dates.push(date)
        }
        setDates(_dates)
    }

    useEffect(() => {
        getDates()
    }, [])

    return (
        <>
            <View>
                <View className="h-37">
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        onContentSizeChange={() => {
                            const xOffset = daysBeforeToday * (80 + 10);
                            scrollViewRef.current?.scrollTo({ x: xOffset, animated: true });
                        }}
                        ref={scrollViewRef}
                    >
                        {dates.map((date, index) => (
                            <Date
                                key={index}
                                date={date}
                                onSelectDate={onSelectDate}
                                selected={selected}
                            />
                        ))}
                    </ScrollView>
                </View>
            </View>
        </>
    )
}

export default Calendar
