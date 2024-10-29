import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import ProductList from '~/components/ProductList';

export default function productListModalPage() {
  const navigation = useNavigation();
  const parms = useLocalSearchParams();
  useEffect(() => {
    navigation.setOptions({
      title: `${parms.id}`,
    });
  }, [parms.id]);
  return <ProductList />;
}
