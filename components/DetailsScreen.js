import * as React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';

import {
  useNavigation,
} from '@react-navigation/native';

function DetailsScreen({ route }) {
    const navigation = useNavigation();
    const { itemId, otherParam } = route.params;
    console.log('itemId',itemId, 'otherParam',otherParam);
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <TouchableOpacity onPress={
          () =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
        }>
          <Text>Go to Details... again</Text>
          
        </TouchableOpacity>
      </View>
    );
  }
  export default DetailsScreen