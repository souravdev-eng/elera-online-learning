import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

import {Icons} from '../../theme';
import styles from './styles';
import LogoHeader from '../../components/LogoHeader';
import UserOption from './UserOption';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <LogoHeader
          title="Profile"
          isSearch={false}
          style={{paddingBottom: 10}}
        />
        <View style={styles.userContainer}>
          <View style={styles.userImage}>
            <Image
              source={Icons.User1}
              resizeMode="cover"
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <Text style={styles.userName}>Sourav Majumdar</Text>
          <Text style={styles.userEmail}>souravmajumdar@gmail.com</Text>
        </View>
        <View style={styles.userOptionContainer}>
          <UserOption title="Edit Profile" icon="person-outline" />
          <UserOption icon="notifications-outline" title="Notification" />
          <UserOption icon="wallet-outline" title="Payment" />
          <UserOption icon="shield-outline" title="Security" />
          <UserOption icon="lock-closed-outline" title="Privacy & Policy" />
          <UserOption icon="alert-circle-outline" title="Help Center" />
          <UserOption icon="people-outline" title="Invite Friends" />
          <UserOption icon="log-out-outline" title="Log Out" color="red" />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
