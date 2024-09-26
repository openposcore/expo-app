import * as Crypto from 'expo-crypto';
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Linking, View } from 'react-native';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';

export default function Initiate() {
  const navigation = useNavigation();
  const parms = useLocalSearchParams();
  const priceInCent = parseInt(parms.amount as string) * 100;
  const smartPinUrl = `smartpin://payment?id=${Crypto.randomUUID()}&amount=${priceInCent}&reference=${
    parms.reference
  }&type=${parms.paymentMethod}&url=openposcore://payment-provider/rabobank/callback`;
  const openSmartPin = () => {
    console.log('Opening SmartPin app:', smartPinUrl);
    Linking.openURL(smartPinUrl).catch((err) =>
      console.error('Error launching SmartPin app:', err)
    );
  };
  useEffect(() => {
    navigation.setOptions({
      title: `Rabo SmartPin - €${parms.amount}`,
    });
    openSmartPin();
  }, [parms.id]);
  return (
    <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
      <Text>Opening Rabo SmartPin</Text>
      <Button className='rounded-3xl' onPress={() => router.dismiss()}>
        <Text>Back</Text>
      </Button>
      <Button className='rounded-3xl' onPress={() => openSmartPin()}>
        <Text>Retry</Text>
      </Button>
    </View>
  );
}
