import * as React from 'react';
import { Pressable, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Card, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { addToCart } from '~/state/cartSlice';

export default function ProductCard({
  text,
  price,
  id,
}: {
  text: string;
  price: number;
  id: string;
}) {
  const dispatch = useDispatch();
  const addProductToCart = () => {
    const newProduct = {
      id: id,
      name: text,
      price: price,
      quantity: 1,
    };

    dispatch(addToCart(newProduct));
  };

  return (
    <Pressable className='flex-auto' onPress={() => addProductToCart()}>
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
