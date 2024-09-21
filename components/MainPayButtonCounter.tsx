import { View } from 'react-native';
import { Button } from './ui/button';
import { Text } from './ui/text';

export default function MainPayButtonCounter() {
  return (
    <View className='absolute native:bottom-5 mx-4 left-0 right-0 !web:bottom-50'>
      <Button>
        <Text>Afrekenen: 300</Text>
      </Button>
    </View>
  );
}
