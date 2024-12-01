import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import ChatItem from '../components/ChatItem';

const chats = [
  {
    id: '1',
    name: 'Bang ASDOS DPM',
    message: 'Anda: Bang kasih nilai 100 ya',
    time: '15.00',
    profileImage: require('../../assets/favicon.png'),
  },
  {
    id: '2',
    name: 'Taufik',
    message: 'Anda: PINJAM DULU SERATUS!!!',
    time: '15.00',
    profileImage: require('../../assets/topik.jpeg'),
  },
  {
    id: '3',
    name: 'DITO',
    message: 'Anda: info nongss',
    time: '15.00',
    profileImage: require('../../assets/dito.jpeg'),
  },
  {
    id: '4',
    name: 'Fidi kumis',
    message: 'Panggilan Video',
    time: '15.00',
    profileImage: require('../../assets/fidi.jpeg'),
  },
  {
    id: '5',
    name: 'atun',
    message: 'Panggilan suara tak terjawab',
    time: '15.00',
    profileImage: require('../../assets/atun.jpeg'),
  },
];

export default function ChatListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatItem chat={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // dark mode
  },
});
