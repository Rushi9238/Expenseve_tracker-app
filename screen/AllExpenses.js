import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const AllExpenses = () => {
  return (
    <View style={styles.container}>
      {/* <Text>AllExpenses sfsdf gdfgg</Text> */}
      <ExpensesOutput expensesPeriod={"Total"}/>
    </View>
  )
}

export default AllExpenses

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})