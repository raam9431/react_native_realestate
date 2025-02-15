import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';

const SignIn = () => {
  const handleLogin = () => {
    // Handle Google login here
  };

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Hero Image */}
        <Image 
          source={images.onboarding} 
          className="w-full h-4/6" 
          resizeMode="contain" 
        />

        {/* Welcome Text */}
        <View className="px-6 mt-4">
          <Text className='text-base text-center uppercase font-rubik text-black-200'>
            Welcome to ReState
          </Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
            Let's get you closer to{"\n"}
            <Text className='text-primary-300'>your ideal home</Text>
          </Text>
          <Text className='text-lg text-black-200 font-rubik text-center mt-12'>
            Login to ReState with Google
          </Text>

          {/* Google Sign-in Button */}
          <TouchableOpacity 
            onPress={handleLogin} 
            className='bg-black-100 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'
          >
            <View className='flex flex-row items-center justify-center'>
              <Image 
                source={icons.google} 
                className='w-5 h-5' 
                resizeMode='contain' 
              />
              <Text className='text-lg font-rubik-medium text-black-300 ml-2'>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
