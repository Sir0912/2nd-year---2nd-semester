import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CalendarSchedule from '../../components/CalendarSchedule';
import { calculatePayroll } from '../../services/payroll';

export default function DashboardBoxes() {

  const router = useRouter();
  const [payroll, setPayroll] = useState<any>(null);

  // Placeholder employee data — replace with real data once backend is ready
  const employee = {
    name: 'maverick is gay',
    role: 'Field Staff',
    companyId: 'OPT-2024-001',
  };

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

  const handleLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Log Out',
          style: 'destructive',
          onPress: () => router.replace('/'),
        },
      ]
    );
  };

  // Get initials from name for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (!payroll) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Dashboard</Text>

        {/* Employee Profile Card */}
        <View style={styles.profileCard}>

          <View style={styles.profileLeft}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {getInitials(employee.name)}
              </Text>
            </View>
            <View>
              <Text style={styles.employeeName}>{employee.name}</Text>
              <Text style={styles.employeeRole}>{employee.role}</Text>
              <Text style={styles.employeeId}>ID: {employee.companyId}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.sectionTitle}>My Schedule</Text>
        <CalendarSchedule />

        <Text style={styles.sectionTitle}>Payroll Summary</Text>
        <View style={styles.grid}>

          <View style={styles.box}>
            <Text style={styles.boxLabel}>Total Hours</Text>
            <Text style={styles.boxValue}>
              {payroll.totalHours.toFixed(2)} hrs
            </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.boxLabel}>Total Presents</Text>
            <Text style={styles.boxValue}>
              {payroll.totalDays} Days
            </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.boxLabel}>Regular Hours</Text>
            <Text style={styles.boxValue}>
              {payroll.regularHours.toFixed(2)}
            </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.boxLabel}>Overtime Hours</Text>
            <Text style={styles.boxValue}>
              {payroll.overtimeHours.toFixed(2)}
            </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.boxLabel}>Gross Salary</Text>
            <Text style={styles.boxValue}>
              ₱{payroll.grossPay.toFixed(2)}
            </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.boxLabel}>Balance</Text>
            <Text style={styles.boxValue}>
              ₱{payroll.netPay.toFixed(2)}
            </Text>
          </View>

        </View>

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

  // Profile
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5
  },

  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#0077cc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },

  avatarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },

  employeeName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1e3a5f'
  },

  employeeRole: {
    fontSize: 12,
    color: '#4a6fa5',
    marginTop: 2
  },

  employeeId: {
    fontSize: 11,
    color: '#a0b4c8',
    marginTop: 2
  },

  logoutButton: {
    backgroundColor: '#fff0f0',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffcccc'
  },

  logoutText: {
    color: '#cc2200',
    fontWeight: '600',
    fontSize: 13
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a5f',
    marginBottom: 10,
    marginTop: 5
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  box: {
    width: '47%',
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 5
  },

  boxLabel: {
    fontSize: 14,
    color: '#4a6fa5',
    marginBottom: 6
  },

  boxValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a5f'
  }

});