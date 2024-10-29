import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name='callback'
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
