import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
// import {categoriesList, bestSellersList} from '../../utils/MockData';
import {appColors, shadow} from '../../utils/appColors';
import TouchableRipple from 'react-native-touch-ripple';
// import Label from '../../components/Label';

import Product from '../../components/ProductCard'; 
// import {} from 'react-native-size-matters';
// import SearchBox from '../../components/SearchBox';
// import TitleComp from '../../components/TitleComp';
 
// import ReduxWrapper from '../../utils/ReduxWrapper'; 
import Container from './Container';
import { categoriesList,bestSellersList } from '../android/app/utils/MockData';
 
function Home({getProducts$,getProductsList$, addToCart$, navigation,products:{products}}) {
  const nativeAdViewRef = useRef();
    useEffect(() => { 
   
    getProductsList$()
  }, [ ]);  
   
  // const RenderTitle = ({heading, rightLabel}) => {
  //   return <TitleComp heading={heading} rightLabel={rightLabel} />;
  // };
  // const ProductCard = ({item}) => {
  //   return <Product navigation={navigation} item={item} />;
  // };
  const onPress = () => {
    console.warn('i am clicked');
  };
  return (
    <Container isScrollable style={styles.container}> 
      {/* <SearchBox onFoucs={() => navigation.navigate('Search')} />  */}
      <View style={{paddingVertical: (30)}}>
        <RenderTitle heading="Categories" />
        <FlatList
          style={{marginTop: (40)}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={categoriesList}
          ItemSeparatorComponent={() => <View style={{padding: (10)}} />}
          renderItem={({item, index}) => {
            const {label, Icon} = item;
            return (
              <View key={index} style={{alignItems: 'center'}}>
                <TouchableRipple
                  onPress={() => {
                    getProducts$(label);
                    navigation.navigate('Category', {item});
                  }}
                  rippleColor={appColors.primary}
                  rippleContainerBorderRadius={(40)}
                  rippleDuration={800}
                  style={{
                    ...shadow,
                    backgroundColor: appColors.white,
                    height: (70),
                    width: (70),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: (40),
                  }}>
                  <Icon />
                </TouchableRipple>
                <View style={{marginTop: (15)}}>
                  {/* <Label text={label} style={{fontSize: (14)}} /> */}
                </View>
              </View>
            );
          }}
        />
      </View>
      <View>
        <View style={{paddingVertical: (25)}}>
          <RenderTitle heading="Best Selling" rightLabel="See All" />
        </View>

        {/* <FlatList
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{padding: (10)}} />}
          horizontal
          data={products}
          renderItem={({item, index}) => (
            
            <ProductCard key={index} item={item} />
          )}
        /> */}
      </View>
    </Container>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: appColors.primary,
    alignItems: 'center',
    borderBottomWidth: 12,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    padding: 20,
    margin: 20,
    textAlign: 'center',
  },
  TitleText: {
    fontSize: 25,
    // padding: 20,
    marginVertical: 20,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});