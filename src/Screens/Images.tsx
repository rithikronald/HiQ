import React from 'react';
import {ScrollView} from 'react-native';
import NewsCard from '../components/NewsCard';

export const Images = () => {
  return (
    <ScrollView className="flex flex-1 bg-primary/10 p-5">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </ScrollView>
  );
};
