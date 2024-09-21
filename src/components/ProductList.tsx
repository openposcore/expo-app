import { ScrollView, View } from 'react-native';
import MainPayButtonCounter from '~/components/MainPayButtonCounter';
import ProductCard from '~/components/ProductCard';

export default function ProductList() {
  return (
    <View className='bg-secondary/30 h-full'>
      <ScrollView>
        <View className='flex flex-row flex-wrap gap-5 p-4 w-full h-full'>
          <ProductCard text='Thee' price={2.5} id='2' />
          <ProductCard text='Bier' price={3.2} id='5' />
          <ProductCard text='Meter 12 stuks' price={25.5} id='9' />
          <ProductCard text='piza' price={15} id='1' />
        </View>
      </ScrollView>
      <MainPayButtonCounter />
    </View>
  );
}
//€
