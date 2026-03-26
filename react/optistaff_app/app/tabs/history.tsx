import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HistoryTable() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dateString = currentTime.toLocaleDateString();
  const timeString = currentTime.toLocaleTimeString();

  const logs = [
    { date: '01/08/2026', in: '7:00 Am', out: '6:00 Pm' },
    { date: '01/09/2026', in: '7:30 Am', out: '5:59 Pm' },
    { date: '01/10/2026', in: '8:01 Am', out: '3:00 Pm' },
    { date: '01/11/2026', in: '7:00 Am', out: '6:00 Pm' },
    { date: '01/12/2026', in: '7:30 Am', out: '5:59 Pm' },
    { date: '01/13/2026', in: '8:01 Am', out: '3:00 Pm' },
    { date: '01/14/2026', in: '7:00 Am', out: '5:00 Pm' }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Duty History</Text>

        <View style={styles.clockCard}>
          <Text style={styles.liveDate}>{dateString}</Text>
          <Text style={styles.liveTime}>{timeString}</Text>
        </View>
        {logs.map((item, index) => (
          <View key={index} style={styles.historyCard}>
            
            <View style={styles.row}>
              <Text style={styles.label}>Date</Text>
              <Text style={styles.value}>{item.date}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Sign In</Text>
              <Text style={styles.value}>{item.in}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Sign Out</Text>
              <Text style={styles.value}>{item.out}</Text>
            </View>

          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf4ff',
    padding: 20
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1e3a5f'
  },

  clockCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 14,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8
  },

  liveDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e3a5f'
  },

  liveTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0077cc'
  },

  historyCard: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  label: {
    fontSize: 14,
    color: '#4a6fa5'
  },

  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e3a5f'
  }
});