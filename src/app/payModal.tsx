import { router } from 'expo-router';
import { View } from 'react-native';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';

import * as React from 'react';
import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '~/components/ui/input';
import { clearCart, removeFromCart } from '~/state/cartSlice';
import { RootState } from '~/state/store';
export default function payModal() {
  const [value, setValue] = useState('');

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const totalItems = useSelector((state: RootState) => state.cart.totalItems);
  const dispatch = useDispatch();
  const removeProductFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const clearCartItems = () => {
    dispatch(clearCart());
    router.dismissAll();
  };

  if (totalItems === 0) {
    return (
      <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
        <Text className='text-center'>Cart is empty</Text>
        <Button className='rounded-3xl' onPress={() => router.dismissAll()}>
          <Text>Close</Text>
        </Button>
      </View>
    );
  }

  function onChangeText(text: string) {
    setValue(text);
  }

  // return (
  //   <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
  //     <Text className='text-center'>Total amount: {totalAmount}</Text>
  //     <Button className='rounded-3xl' onPress={() => clearCartItems()}>
  //       <Text>Clear cart</Text>
  //     </Button>
  //     <Button className='rounded-3xl' onPress={() => router.dismissAll()}>
  //       <Text>Close</Text>
  //     </Button>
  //     {cartItems.map((item) => (
  //       <View key={item.id} className='flex-row justify-between w-full gap-5'>
  //         <Text>{item.name}</Text>
  //         <Text>{item.price}</Text>
  //         <Text>{item.quantity}</Text>
  //         <Button className='rounded-3xl' onPress={() => removeProductFromCart(item.id)}>
  //           <Text>Remove</Text>
  //         </Button>
  //       </View>
  //     ))}
  //   </View>
  // );
  return (
    <KeyboardAwareScrollView bottomOffset={62} className='flex-1 bg-gray-100'>
      <View className='p-4 flex-1'>
        <Text className='text-lg font-semibold'>Cart Details For: {value}</Text>
        <Text className='text-lg font-bold mb-2'>Total Items: {totalItems}</Text>
        <Text className='text-lg font-bold mb-4'>Total Amount: ${totalAmount.toFixed(2)}</Text>

        <Text className='text-lg font-semibold'>Cart Items:</Text>
        {cartItems.map((item) => (
          <View key={item.id} className='py-2'>
            <Text className='text-base'>
              {item.name} - {item.quantity} x ${item.price}
            </Text>
            <Button onPress={() => removeProductFromCart(item.id)}>
              <Text>Remove</Text>
            </Button>
          </View>
        ))}
        <Button onPress={clearCartItems}>
          <Text>Clear Cart</Text>
        </Button>
        <Input
          key={'input-01'}
          id='input-01'
          placeholder='Client Name'
          className='mt-4'
          value={value}
          onChangeText={onChangeText}
          aria-labelledby='inputLabel'
          aria-errormessage='inputError'
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Stock</CardTitle>
//         <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead className='w-[100px]'>SKU</TableHead>
//               <TableHead>Stock</TableHead>
//               <TableHead>Price</TableHead>
//               <TableHead className='w-[100px]'>Size</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>

//             <TableRow>
//               <TableCell className='font-semibold'>GGPC-001</TableCell>
//               <TableCell>
//                 <Label htmlFor='stock-1' className='sr-only'>
//                   Stock
//                 </Label>
//                 <Input id='stock-1' type='number' defaultValue='100' />
//               </TableCell>
//               <TableCell>
//                 <Label htmlFor='price-1' className='sr-only'>
//                   Price
//                 </Label>
//                 <Input id='price-1' type='number' defaultValue='99.99' />
//               </TableCell>
//               <TableCell>
//                 <ToggleGroup type='single' defaultValue='s' variant='outline'>
//                   <ToggleGroupItem value='s'>S</ToggleGroupItem>
//                   <ToggleGroupItem value='m'>M</ToggleGroupItem>
//                   <ToggleGroupItem value='l'>L</ToggleGroupItem>
//                 </ToggleGroup>
//               </TableCell>
//             </TableRow>

//           </TableBody>
//         </Table>
//       </CardContent>
//       <CardFooter className='justify-center border-t p-4'>
//         <Button size='sm' variant='ghost' className='gap-1'>
//           <PlusCircle className='h-3.5 w-3.5' />
//           Add Variant
//         </Button>
//       </CardFooter>
//     </Card>
