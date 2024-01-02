
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNews } from '../context/fetchData';
import Animated, { FadeInDown } from 'react-native-reanimated';
import moment from 'moment';
import heart from "../assets/heart.png";
import tick from "../assets/end.png";
import Loader from '../components/Loader';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { FIREBASE_APP } from '../firebase';

const CategoryNews = () => {
  const { categoryNews, openNewsPage, loading } = useNews();
  const [favoriteArticles, setFavoriteArticles] = useState([]);
  const firestore = getFirestore(FIREBASE_APP);

  useEffect(() => {
    // Load favorite articles from Firestore when the component mounts
    loadFavoriteArticles();
  }, []);

  const renderTime = (publishedAt) => {
    const formattedTime = moment(publishedAt).format("MMM Do YY");
    return formattedTime;
  };

  const addToFavorites = async (article) => {
    try {
      // Access the Firestore collection
      const favoritesCollection = collection(firestore, 'favorites');

      // Add the article to Firestore
      await addDoc(favoritesCollection, article);

      // Refresh the list of favorite articles
      loadFavoriteArticles();
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  const loadFavoriteArticles = async () => {
    try {
      // Access the Firestore collection
      const favoritesCollection = collection(firestore, 'favorites');

      // Retrieve the favorite articles
      const snapshot = await getDocs(favoritesCollection);
      const favorites = snapshot.docs.map((doc) => doc.data());

      // Update the state with the retrieved favorite articles
      setFavoriteArticles(favorites);
    } catch (error) {
      console.error('Error loading favorite articles:', error);
    }
  };

  const isArticleFavorite = (article) => {
    // Check if the article is in the list of favorite articles
    return favoriteArticles.some((favArticle) => favArticle.url === article.url);
  };

  const renderItem = ({ item }) => {
    if (!item.urlToImage) {
      return null;
    }

    const isFavorite = isArticleFavorite(item);

    return (
      <TouchableOpacity onPress={() => openNewsPage(item.url)}>
        <View style={styles.cardContainer}>
          <Image source={{ uri: item.urlToImage }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <View style={styles.cardFooter}>
              <View style={styles.footerLeft}>
                <Text style={styles.cardAuthor}>{item.author}</Text>
                <Text style={styles.cardDate}>{renderTime(item.publishedAt)}</Text>
              </View>
              <View style={{ backgroundColor: '#F05941', padding: 10, borderRadius: 50 }}>
                <TouchableOpacity onPress={() => addToFavorites(item)}>
                  <Image source={heart} style={{ tintColor: isFavorite ? 'red' : 'white' }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderListFooter = () => (
    <View style={styles.listFooter}>
      <Image source={tick} />
      <Text style={styles.listFooterText}>You are all caught up</Text>
    </View>
  );

  return (
    <View entering={FadeInDown.delay(1000).duration(600).springify().damping(12)} style={{ paddingVertical: 50 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={categoryNews}
            keyExtractor={(item, index) => item.url + index}
            renderItem={renderItem}
            ListFooterComponent={renderListFooter}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    // margin: 10,

  },
  cardImage: {
    height: 200,
    width: '100%',
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardAuthor: {
    color: 'gray',
    marginRight: 10,
  },
  cardDate: {
    color: 'gray',
  },
  listFooter: {
    alignItems: 'center',
    marginVertical: 20,
  },
  listFooterText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F05941',
    marginBottom:40
  },
});

export default CategoryNews;
