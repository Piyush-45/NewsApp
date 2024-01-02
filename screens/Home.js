import React from 'react';
import {  FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import CategoriesList from '../components/CategoriesList';
import CategoryNews from './CategoryNews';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';

const Home = () => {
  const data = [
    { type: 'latestNews', key: 'latestNews' },
    { type: 'categoriesList', key: 'categoriesList' },
    { type: 'categoryNews', key: 'categoryNews' },
  ];

  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'latestNews':
        return <LatestNews />;
      case 'categoriesList':
        return <CategoriesList />;
      case 'categoryNews':
        return <CategoryNews />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList

        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Toast />}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'white',
    paddingHorizontal: 6,
  },
 
});

export default Home;
