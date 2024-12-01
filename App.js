import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import ChatListScreen from './src/screens/ChatListScreen';

// Placeholder screens for navigation tabs
const StatusScreen = () => <View style={styles.center}><Text>Status Screen</Text></View>;
const CommunitiesScreen = () => <View style={styles.center}><Text>Communities Screen</Text></View>;
const CallsScreen = () => <View style={styles.center}><Text>Calls Screen</Text></View>;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ChatStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Chats"
      component={ChatListScreen}
      options={{
        headerTitle: () => (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>WhatsApp</Text>
            <View style={styles.iconContainer}>
              <Icon name="camera-outline" size={24} color="white" style={styles.icon} />
              <Icon name="search-outline" size={24} color="white" style={styles.icon} />
              <Icon name="ellipsis-vertical-outline" size={24} color="white" />
            </View>
          </View>
        ),
        headerStyle: { backgroundColor: '#222' },
        headerTitleAlign: 'left',
      }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Chats') iconName = 'chatbubble-outline';
            else if (route.name === 'Status') iconName = 'ellipse-outline';
            else if (route.name === 'Communities') iconName = 'people-outline';
            else if (route.name === 'Calls') iconName = 'call-outline';
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarStyle: { backgroundColor: '#222' },
          tabBarActiveTintColor: '#25D366',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Chats" component={ChatStack} options={{ headerShown: false }} />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Communities" component={CommunitiesScreen} />
        <Tab.Screen name="Calls" component={CallsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 0 },
  headerTitle: { color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 0, marginRight: 150 },
  iconContainer: { flexDirection: 'row', gap: 15 },
  icon: { marginLeft: 10 },
});
