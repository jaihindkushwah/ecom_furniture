import {SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';
import ProfileCard from 'components/ProfileCard';

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ProfileCard />
    </SafeAreaView>
  );
};

export default Profile;
