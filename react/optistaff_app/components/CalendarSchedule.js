import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CalendarSchedule() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const dutySchedule = {
    3: "8:00 AM - 5:00 PM",
    7: "1:00 PM - 9:00 PM",
    12: "7:00 AM - 3:00 PM",
    18: "10:00 AM - 6:00 PM",
    22: "9:00 AM - 5:00 PM",
    27: "8:00 AM - 4:00 PM"
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
  };

  return (
    <View style={styles.calendarContainer}>

      <View style={styles.calendarHeader}>
        <TouchableOpacity onPress={goToPreviousMonth}>
          <Text style={styles.navArrow}>◀</Text>
        </TouchableOpacity>

        <Text style={styles.calendarTitle}>
          {monthName} {year}
        </Text>

        <TouchableOpacity onPress={goToNextMonth}>
          <Text style={styles.navArrow}>▶</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.calendarGrid}>
        {calendarDays.map((day) => {
          const isDutyDay = dutySchedule[day];

          return (
            <TouchableOpacity
              key={day}
              style={[
                styles.calendarDay,
                isDutyDay && styles.dutyDay,
                selectedDate === day && styles.selectedDay
              ]}
              onPress={() => setSelectedDate(day)}
            >
              <Text
                style={[
                  styles.calendarText,
                  isDutyDay && styles.dutyText,
                  selectedDate === day && styles.selectedText
                ]}
              >
                {day}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {selectedDate && (
        <View style={styles.scheduleCard}>
          <Text style={styles.scheduleTitle}>
            Schedule for {monthName} {selectedDate}
          </Text>

          <Text style={styles.scheduleTime}>
            {dutySchedule[selectedDate]
              ? dutySchedule[selectedDate]
              : "No duty scheduled"}
          </Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 8,
    marginBottom: 5,
    elevation: 4
  },

  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },

  navArrow: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0077cc'
  },

  calendarTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1e3a5f'
  },

  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 1
  },

  calendarDay: {
    width: '14.28%',
    aspectRatio: 4 / 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 15
  },

  calendarText: {
    fontSize: 10,
    color: '#4a6fa5'
  },

  dutyDay: {
    backgroundColor: '#d6ecff'
  },

  dutyText: {
    color: '#0077cc',
    fontWeight: 'bold'
  },

  selectedDay: {
    backgroundColor: '#a7d8ff'
  },

  selectedText: {
    color: '#1e3a5f',
    fontWeight: 'bold'
  },

  scheduleCard: {
    marginTop: 12,
    padding: 10,
    backgroundColor: '#f5faff',
    borderRadius: 12
  },

  scheduleTitle: {
    fontSize: 14,
    color: '#1e3a5f',
    marginBottom: 5,
    fontWeight: '600'
  },

  scheduleTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0077cc'
  }
});