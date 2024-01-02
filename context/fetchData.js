
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Linking } from 'react-native';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {


  const predefinedCategories = [
    { id: 0, name: 'Politics' },
    { id: 1, name: 'Technology' },
    { id: 2, name: 'Entertainment' },
    { id: 3, name: 'Business' },
    { id: 4, name: 'Health' },
    { id: 5, name: 'Sports' },
  ];
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(false);


  const [categoryNews, setCategoryNews] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(predefinedCategories[0].name);



  const apiKey = 'eebe68262046429cb2d3e69ce7ed69dd';
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory.toLowerCase()}&apiKey=${apiKey}`;

  useEffect(() => {
    const apiKey = 'eebe68262046429cb2d3e69ce7ed69dd';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        setLatestNews(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching latestNews:', error);
      });
  }, []);



  useEffect(() => {
    const fetchNewsData = async () => {

      try {
        setLoading(true)
        const response = await axios.get(apiUrl);
        setCategoryNews(response.data.articles);
        // console.log(response.data.articles)
        setLoading(false)
      } catch (error) {

        console.error(`Error fetching ${selectedCategory} news:`, error);
      }
    };

    fetchNewsData();
  }, [selectedCategory]);

  const openNewsPage = (url) => {
    Linking.openURL(url);
  };

  const onChangeCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <NewsContext.Provider value={{ categoryNews, openNewsPage, predefinedCategories, selectedCategory, onChangeCategory, latestNews ,loading}}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};
