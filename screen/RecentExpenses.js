import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const RecentExpenses = () => {
  return (
    <View style={styles.container}>
      {/* <Text>RecentExpenses dd </Text> */}
      <ExpensesOutput expensesPeriod={"Last 7 Days"}/>
    </View>
  )
}

export default RecentExpenses

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})