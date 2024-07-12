import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RecentExpenses from './screen/RecentExpenses';
import AllExpenses from './screen/AllExpenses'
import ManageExpense from './screen/ManageExpense'


const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator();

const ExpensivesOverView = () => {
  return <BottomTab.Navigator>
    <BottomTab.Screen name='RecentExpenses' component={RecentExpenses} />
    <BottomTab.Screen name="AllExpenses" component={AllExpenses} />
  </BottomTab.Navigator>
}


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
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
