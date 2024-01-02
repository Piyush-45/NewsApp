// LatestNews.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { FlatList } from 'react-native';
import aero from "../assets/rightAero.png";
import { useNews } from '../context/fetchData';

const LatestNews = () => {
  const {latestNews,openNewsPage} = useNews();

  const renderNewsItem = ({ item }) => {
    // Check if item is undefined or missing essential properties
    if (!item || !item.urlToImage || !item.author || !item.title || !item.description) {
      // Handle cases where data is missing or undefined
      return null;
    }
  
    return (
      <TouchableOpacity style={styles.newsItem} onPress={() => openNewsPage(item.url)}>
        <ImageBackground style={styles.newsImage} source={{ uri: item.urlToImage }}>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View >
      <View style={styles.header}>
        <Text style={styles.latest}>LatestNews</Text>
        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}><Text style={styles.seeAll}>See All </Text><Image source={aero} style={styles.seeAllImg} /></TouchableOpacity>
      </View>

      <View style={styles.heroContainer}>
        <FlatList
          data={latestNews}
          keyExtractor={(item) => item.url}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderNewsItem}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </View>
  );
};

export default LatestNews;

const styles = StyleSheet.create({
  latest: {
    color: '#000',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20.8
  },
  heroContainer: {
    paddingHorizontal: 10
  },
  seeAll: {
    fontSize: 12,
    color: '#0080FF',
  },
  seeAllImg: {
    width: 25,
    objectFit: 'contain'
  },
  newsItem: {
    marginRight: 16,
    width: 200,
    width: 350,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems:'stretch',
    marginBottom:24
  },
  newsImage: {
    fontWeight: '800',
    justifyContent: 'flex-end',
    padding: 10,
    height: 200,
    objectFit: 'cover',
  },
  author: {
    fontSize: 10,
    color: 'white',
    marginBottom: 6,
    fontWeight:'800'
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    marginBottom: 4,
  },
  description: {
    // flex:1,
    fontSize: 10,
    color: 'white',
    marginTop:2,
  },
  flatListContainer: {
    // gap: 2,
    borderRadius: 12
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
});
