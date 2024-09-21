import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import GroupCard from '~/components/GroupCard';
import MainPayButtonCounter from '~/components/MainPayButtonCounter';

export default function Screen() {
  const insets = useSafeAreaInsets();
  let cards = [];
  for (let i = 0; i < 50; i++) {
    cards.push(
      <GroupCard
        text={'Alcohol ' + (i + 1)}
        image='https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg'
        id={i.toString() + '-id'}
        key={i}
      />
    );
  }
  return (
    <View className='bg-secondary/30'>
      <ScrollView>
        <View
          style={{ marginTop: 5, marginBottom: 60 }}
          className='flex flex-row flex-wrap gap-5 p-4 w-full h-full'
        >
          {cards}
        </View>
      </ScrollView>
      <MainPayButtonCounter />
    </View>
  );
}
