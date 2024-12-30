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
import ButtonIcon from './components/UI/ButtonIcon';
const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator();

const ExpensivesOverView = () => {
  const handelONpress=(navigation)=>{
    navigation.navigate("ManageExpense")
  }


  return <BottomTab.Navigator screenOptions={({navigation})=>({
    headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
    headerTintColor:'white',
    tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
    tabBarActiveTintColor:GlobalStyles.colors.accent500,
    headerRight:({tintColor})=><ButtonIcon name={"add"} size={24} color={tintColor} onPress={()=>handelONpress(navigation)}/>
  })}>
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
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
          headerTintColor:'white',


        }}>
          <Stack.Screen
            name='ExpensivesOverView'
            component={ExpensivesOverView}
            options={
              {
                headerShown:false,
              }
            }
          />
          <Stack.Screen name='ManageExpense' component={ManageExpense} options={{
            title:"Manage Expense",
            presentation:'modal',
          }} />
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
