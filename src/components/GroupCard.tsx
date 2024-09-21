import { router } from 'expo-router';
import * as React from 'react';
import { Pressable, View } from 'react-native';
import { Avatar, AvatarImage } from '~/components/ui/avatar';
import { Card, CardDescription, CardHeader } from '~/components/ui/card';

export default function GroupCard({
  text,
  image,
  id,
}: {
  text: string;
  image: string;
  id: string;
}) {
  return (
    <Pressable
      className='flex-auto'
      onPress={() => router.push({ pathname: '/productListModalPage', params: { id: id } })}
    >
      <Card className='rounded-2xl p-4'>
        <CardHeader className='items-center'>
          <Avatar alt="Rick Sanchez's Avatar" className='w-24 h-24'>
            <AvatarImage source={{ uri: image }} />
          </Avatar>
          <View className='p-3' />
          <CardDescription className='text-base font-semibold'>{text}</CardDescription>
        </CardHeader>
      </Card>
    </Pressable>
  );
}
