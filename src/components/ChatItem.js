import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';

export default function ChatItem({ chat }) {
  return (
    <View style={styles.chatItem}>
      <Image
        source={chat.profileImage || require('../../assets/favicon.png')}
        style={styles.profileImage}
      />
      <View style={styles.chatInfo}>
        <Text style={styles.chatName}>{chat.name}</Text>
        <Text style={styles.chatMessage}>{chat.message}</Text>
      </View>
      <View style={styles.chatTimeContainer}>
        <Text style={styles.chatTime}>{chat.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatInfo: {
    flex: 1,
    paddingLeft: 10,
  },
  chatName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatMessage: {
    color: '#ccc',
  },
  chatTimeContainer: {
    justifyContent: 'center',
  },
  chatTime: {
    color: '#ccc',
    fontSize: 12,
  },
});
