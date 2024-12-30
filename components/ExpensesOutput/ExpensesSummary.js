import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constant/styles'

const ExpensesSummary = ({expenses=[],expensesPeriod}) => {
    const expensesSum=expenses.reduce((acco,init)=>acco+init.amount,0)
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{expensesPeriod}</Text>
      <Text style={styles.sum}>₹{expensesSum.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary

const styles = StyleSheet.create({
    container: {
        padding:8,
        backgroundColor:GlobalStyles.colors.primary50,
        borderRadius:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
    },
    period:{
        fontSize:12,
        color:GlobalStyles.colors.primary400,
    },
    sum:{
        fontSize:16,
        color:GlobalStyles.colors.primary500,
        fontWeight:'bold',
    }
})