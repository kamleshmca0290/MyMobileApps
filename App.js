import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const subjects = [
    { name: 'Math', progress: '75%' },
    { name: 'English', progress: '60%' },
    { name: 'Science', progress: '40%' },
    { name: 'Drawing', progress: '90%' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kids Study Tracker 📚</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🏆 Reward Points</Text>
        <Text style={styles.bigText}>120 Points</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🔥 Study Streak</Text>
        <Text style={styles.bigText}>7 Days</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Subject Progress</Text>
        {subjects.map((subject, index) => (
          <Text key={index} style={styles.subject}>
            {subject.name}: {subject.progress}
          </Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Motivation</Text>
        <Text style={styles.quote}>
          Small steps every day lead to big success 🚀
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF2F8',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    color: '#7C3AED',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bigText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#DB2777',
  },
  subject: {
    fontSize: 18,
    marginBottom: 8,
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});
