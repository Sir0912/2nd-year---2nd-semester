import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { calculatePayroll } from '../../services/payroll';

export default function SalaryScreen() {

  const [payroll, setPayroll] = useState<any>(null);

  useEffect(() => {

    const hourlyRate = 100;

    const logs = [
      { date: '01/08/2026', hours: 11 },
      { date: '01/09/2026', hours: 9 },
      { date: '01/10/2026', hours: 7 },
      { date: '01/11/2026', hours: 12 },
      { date: '01/12/2026', hours: 10.5 },
      { date: '01/13/2026', hours: 9 },
      { date: '01/14/2026', hours: 10 }
    ];

    const data = calculatePayroll(logs, hourlyRate);
    setPayroll(data);

  }, []);

  if (!payroll) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Monthly Salary Summary</Text>

      <View style={styles.card}>

        <View style={styles.row}>
          <Text style={styles.label}>Total Days</Text>
          <Text style={styles.value}>{payroll.totalDays}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Total Hours</Text>
          <Text style={styles.value}>{payroll.totalHours.toFixed(2)}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Regular Hours</Text>
          <Text style={styles.value}>{payroll.regularHours.toFixed(2)}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Overtime Hours</Text>
          <Text style={styles.value}>{payroll.overtimeHours.toFixed(2)}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>Gross Salary</Text>
          <Text style={styles.value}>₱{payroll.grossPay.toFixed(2)}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Tax (10%)</Text>
          <Text style={styles.tax}>− ₱{payroll.tax.toFixed(2)}</Text>
        </View>

        <View style={styles.totalBox}>
          <Text style={styles.totalLabel}>Net Salary</Text>
          <Text style={styles.totalAmount}>
            ₱{payroll.netPay.toFixed(2)}
          </Text>
        </View>

      </View>
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

  card: {
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 20,
    elevation: 6
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14
  },

  label: {
    fontSize: 15,
    color: '#4a6fa5'
  },

  value: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e3a5f'
  },

  tax: {
    fontSize: 15,
    fontWeight: '600',
    color: '#d9534f'
  },

  divider: {
    height: 1,
    backgroundColor: '#d9eaff',
    marginVertical: 12
  },

  totalBox: {
    marginTop: 15,
    padding: 15,
    borderRadius: 14,
    backgroundColor: '#d6ecff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e3a5f'
  },

  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0077cc'
  }

});