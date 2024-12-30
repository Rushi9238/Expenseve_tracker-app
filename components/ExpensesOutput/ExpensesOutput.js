import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constant/styles'

const DUMMY_EXPENS=[
    {
        id: 'e1',
        description: 'A pair of shoes',
        date: new Date('2022-05-16'),
        amount: 140,
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        date: new Date('2022-04-17'),
        amount: 120,
    },
    {
        id:'e3',
        description: 'Some bananas',
        date: new Date('2022-05-18'),
        amount: 110,
    },
    {
        id:'e4',
        description:'Another books',
        date: new Date('2022-05-19'),
        amount: 100,
    },
    {
        id: 'e5',
        description: 'A pair of shoes',
        date: new Date('2022-05-16'),
        amount: 140,
    },
    {
        id: 'e6',
        description: 'A pair of trousers',
        date: new Date('2022-04-17'),
        amount: 120,
    },
    {
        id:'e7',
        description: 'Some bananas',
        date: new Date('2022-05-18'),
        amount: 110,
    },
    {
        id:'e8',
        description:'Another books',
        date: new Date('2022-05-19'),
        amount: 100,
    },
    {
        id: 'e9',
        description: 'A pair of shoes',
        date: new Date('2022-05-16'),
        amount: 140,
    },
    {
        id: 'e10',
        description: 'A pair of trousers',
        date: new Date('2022-04-17'),
        amount: 120,
    },
    {
        id:'e11',
        description: 'Some bananas',
        date: new Date('2022-05-18'),
        amount: 110,
    },
    {
        id:'e12',
        description:'Another books',
        date: new Date('2022-05-19'),
        amount: 100,
    }
]

const ExpensesOutput = ({expenses=DUMMY_EXPENS,expensesPeriod}) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod}/>
      <ExpensesList expenses={expenses}/>
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700,
    }
})