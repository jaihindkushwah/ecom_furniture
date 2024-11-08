import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

interface ProfileData {
  name: string;
  email: string;
  contactNumber: string;
  dob: string;
  gender: string;
  location: string;
  imageUrl?: string;
}
const ProfileField: React.FC<{label: string; value: string}> = ({
  label,
  value,
}) => (
  <View style={styles.fieldContainer}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <Text style={styles.fieldValue}>{value}</Text>
  </View>
);

const ProfilePage: React.FC = () => {
  const profileData: ProfileData = {
    name: 'William Smith',
    email: 'Smithwilliam34@yahoo.com',
    contactNumber: '+16 6540 789 890',
    dob: '23 February 1996',
    gender: 'Male',
    location: 'Sector 3, Magarpatta city, Pune, 462034',
  };
  const statusbarHeight =
    Platform.OS === 'android' ? StatusBar.currentHeight : 0;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#000000'}
        translucent
      />
      <View style={styles.content}>
        <View style={[styles.profileSection, {marginTop: statusbarHeight}]}>
          <View style={styles.imageContainer}>
            <LinearGradient
              colors={['cyan', 'magenta', 'yellow']}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.gradientBackground}>
              <Image
                source={require('../assets/profile.png')}
                style={styles.profileImage}
              />
            </LinearGradient>
          </View>
          <Text style={styles.nameText}>{profileData.name}</Text>
          <Text style={styles.emailText}>{profileData.email}</Text>
        </View>
        {/* <SweepGradientDemo /> */}

        {/* Details Section */}
        <View style={styles.detailsCard}>
          <ProfileField
            label="Contact Number"
            value={profileData.contactNumber}
          />
          <View style={styles.separator} />
          <ProfileField label="Email" value={profileData.email} />
          <View style={styles.separator} />
          <ProfileField label="DOB" value={profileData.dob} />
          <View style={styles.separator} />
          <ProfileField label="Gender" value={profileData.gender} />
          <View style={styles.separator} />
          <ProfileField label="Location" value={profileData.location} />
        </View>

        {/* Edit Button */}
        <TouchableOpacity
          style={styles.editButtonContainer}
          onPress={() => console.log('Edit profile pressed')}>
          <LinearGradient
            colors={['#383b38', 'grey']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    minHeight: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1C1C1E',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  imageContainer: {
    // width: 100,
    // height: 100,
    // borderRadius: 50,
    // borderWidth: 2,
    // borderColor: '#9FE870',
    // overflow: 'hidden',
    // marginBottom: 12,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientBackground: {
    width: 128,
    height: 128,
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // profileImage: {
  //   width: '100%',
  //   height: '100%',
  // },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },
  nameText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  emailText: {
    fontSize: 14,
    color: '#8E8E93',
  },
  detailsCard: {
    backgroundColor: '#1C1C1E',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  fieldContainer: {
    paddingVertical: 12,
  },
  fieldLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 4,
  },
  fieldValue: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  separator: {
    height: 0,
    backgroundColor: '#2C2C2E',
  },
  editButtonContainer: {
    paddingHorizontal: 16,
    marginTop: 'auto',
    marginBottom: 16,
  },
  editButton: {
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfilePage;
