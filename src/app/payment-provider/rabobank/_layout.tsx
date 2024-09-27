import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='initiate' />
      <Stack.Screen
        name='callback'
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
