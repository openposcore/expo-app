import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { Text } from '~/components/ui/text';

export default function Result() {
  // Get the query parameters from the deep link URL
  const { id, amount, reference, transactionId, state } = useLocalSearchParams();

  if (!id || !amount || !state) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Waiting for payment result...</Text>
      </View>
    );
  }

  // Render the payment information
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Transaction ID: {transactionId}</Text>
      <Text>State: {state}</Text>
      <Text>Amount: {amount}</Text>
      <Text>Reference: {reference}</Text>
      <Text>Payment ID: {id}</Text>
    </View>
  );
}
