import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RecentExpenses from './screen/RecentExpenses';
import AllExpenses from './screen/AllExpenses'
import ManageExpense from './screen/ManageExpense'
import { GlobalStyles } from './constant/styles';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator();

const ExpensivesOverView = () => {
  return <BottomTab.Navigator screenOptions={{
    headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
    headerTintColor:'white',
    tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
    tabBarActiveTintColor:GlobalStyles.colors.accent500,

  }}>
    <BottomTab.Screen name='RecentExpenses' component={RecentExpenses} options={{
      title:'Recent Expenses',
      tabBarLabel:'Recent Expenses',
      tabBarIcon:({color,size})=>(<Entypo name="hour-glass" size={size} color={color} />)
    }} />
    <BottomTab.Screen name="AllExpenses" component={AllExpenses} options={{
      title:'All Expenses',
      tabBarLabel:'All Expenses',
      tabBarIcon:({color,size})=>(<AntDesign name="calendar" size={size} color={color} />)
    }} />
  </BottomTab.Navigator>
}


export default function App() {
  return (
    <>
      <StatusBar style="light"  />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='ExpensivesOverView'
            component={ExpensivesOverView}
            options={
              {
                headerShown:false,
              }
            }
          />
          <Stack.Screen name='ManageExpense' component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
