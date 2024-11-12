import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../utility/colors';
import { fetchContacts } from '../utility/api';

const ContactThumbnail = ({ name, phone, avatar, textColor, onPress }) => {
  const colorStyle = {
    color: textColor,
  };
 
  const ImageComponent = onPress ? TouchableOpacity : View;

  return (
    <View style={styles.container}>
      <ImageComponent onPress={onPress}>
        <Image
          source={{
            uri: avatar,
          }}
          style={styles.avatar}
        />
      </ImageComponent>
      {name !== '' && <Text style={[styles.name, colorStyle]}>{name}</Text>}

      {phone !== '' && (
        <View style={styles.phoneSection}>
          <Icon name="phone" size={16} style={{ color: textColor }} />
          <Text style={[styles.phone, colorStyle]}>{phone}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 30,
    marginHorizontal: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'white',
    borderWidth: 2,
  },
  name: {
    fontSize: 14,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  phoneSection: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    marginLeft: 4,
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default ContactThumbnail;
