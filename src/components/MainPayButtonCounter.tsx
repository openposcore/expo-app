import { router } from 'expo-router';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '~/state/store'; // Assuming you export RootState from store.ts
import { Button } from './ui/button';
import { Text } from './ui/text';

export default function MainPayButtonCounter() {
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const totalItems = useSelector((state: RootState) => state.cart.totalItems);
  if (totalItems === 0) {
    return;
  }
  return (
    <View className='absolute bottom-6 mx-10 left-0 right-0 !web:bottom-50'>
      <Button className='rounded-3xl' onPress={() => router.push({ pathname: '/payModal' })}>
        <Text>Afrekenen: {totalAmount}</Text>
      </Button>
    </View>
  );
}
