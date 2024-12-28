import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get device width for slider

const DailyFactsSlider = () => {
  const dailyFacts = [
    { id: '1', fact: 'The Indus Valley Civilization was one of the world’s first major urban cultures.' },
    { id: '2', fact: 'The concept of zero was invented in ancient India by Aryabhata.' },
    { id: '3', fact: 'India has been the birthplace of four major world religions: Hinduism, Buddhism, Jainism, and Sikhism.' },
    { id: '4', fact: 'The ancient Nalanda University was one of the first great universities in recorded history.' },
    { id: '5', fact: 'Chess, known as “Chaturanga,” originated in India.' },
    // Add more facts
  ];

  const renderFact = ({ item }) => (
    <View style={styles.factCard}>
      <Text style={styles.factText}>{item.fact}</Text>
    </View>
  );

  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.sliderHeader}>On This Day in History</Text>
      <FlatList
        data={dailyFacts}
        renderItem={renderFact}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    marginVertical: 20,
  },
  sliderHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 10,
    color: '#FF6F00',
  },
  factCard: {
    width: width * 0.8, // Make cards occupy 80% of screen width
    backgroundColor: '#FFF3E0',
    marginHorizontal: width * 0.1, // Center the card in the view
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  factText: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
  },
});

export default DailyFactsSlider;
