// CategoriesList.js
import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNews } from '../context/fetchData';
import Animated,{FadeInDown, FadeInUp} from "react-native-reanimated"

const CategoriesList = () => {
  const { predefinedCategories, selectedCategory, onChangeCategory,loading } = useNews();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onChangeCategory(item.name)}>
      <Text style={item.name === selectedCategory ? styles.selectedCatName : styles.catName}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View entering={FadeInDown.delay(100).duration(600)}>
      <FlatList
      
        data={predefinedCategories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal
        
      />
    </View>
  );
};

const styles = {
  catName: {
    borderColor: '#FFB3B6',
    borderWidth: 1,
    borderRadius: 16,
    marginRight: 6,
    padding: 10,
    color: 'black',
  },
  selectedCatName: {
    borderColor: '#FFB3B6',
    borderWidth: 1,
    borderRadius: 16,
    marginRight: 10,
    padding: 10,
    color: 'white',
    backgroundColor: '#F05941',
  },
};

export default CategoriesList;
