import { router } from 'expo-router';
import { Pressable, View } from 'react-native';
import { Menu } from '~/lib/icons/Menu';
import { cn } from '~/lib/utils';

export function MenuButton() {
  return (
    <Pressable
      onPress={() => {
        router.push({ pathname: '/(modal)/menu' });
      }}
      className='web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2'
    >
      {({ pressed }) => (
        <View
          className={cn(
            'flex-1 aspect-square pt-0.5 justify-center items-start web:px-5',
            pressed && 'opacity-70'
          )}
        >
          <Menu className='text-foreground' size={23} strokeWidth={1.25} />
        </View>
      )}
    </Pressable>
  );
}
