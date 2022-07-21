import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserIcon,ChevronDownIcon, SearchIcon,AdjustmentsIcon} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';


const HomePage = () => {

    const navigation  = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    return (
        <SafeAreaView className="bg-white pt-5">
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image 
                    source={{
                        uri:'https://links.papareact.com/wru'
                    }}
                    className="h-7 w-7 bg-gray-3000 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color="#00ccbb"/>
                    </Text>
                </View>
                <UserIcon size={35} color="#00ccbb" />
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                    <SearchIcon color="gray" size={20} />
                    <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
                </View>
                <AdjustmentsIcon color="#00ccbb" />
            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100"
            contentContainerStyle={{
                paddingBottom:100
            }}>
                {/* Categories */}
                <Categories/>

                {/* Featured Rows */}
                <FeaturedRow 
                id="1"
                title="Featured"
                description="Paid placements from our partners" 
                featuredCategory="featured"/>

                {/* Tasty Discounts */}
                <FeaturedRow 
                id="2"
                title="Tasty Discounts"
                description="Everyone's been enjoying these juicy discounts!" 
                featuredCategory="discounts"/>

                {/* Offers near your */}
                <FeaturedRow 
                id="3"
                title="Offers near you!"
                description="Why not support your local restaurant tonight!" 
                featuredCategory="offers"/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomePage;