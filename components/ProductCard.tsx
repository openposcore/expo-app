import { router } from 'expo-router';
import * as React from 'react';
import { Pressable, View } from 'react-native';
import { Card, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';

const CAT_IMAGE = 'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg';

export default function ProductCard({
  text,
  price,
  id,
}: {
  text: string;
  price: string;
  id: string;
}) {
  const [progress, setProgress] = React.useState(78);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }
  //onTouchEnd={() => router.push('/modal')}
  return (
    <Pressable className='flex-auto' onPress={() => router.push('/')}>
      <Card className='rounded-2xl p-4'>
        <CardHeader className='items-center'>
          <CardTitle className='pb-2 text-center'>{text}</CardTitle>
          <View className='p-1' />
          <CardDescription className='text-base font-semibold'>{price}</CardDescription>
        </CardHeader>
      </Card>
    </Pressable>
  );
}
