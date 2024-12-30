import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import ButtonIcon from "../components/UI/ButtonIcon";
import { GlobalStyles } from "../constant/styles";
import Button from "../components/UI/Button";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEdited = !!editedExpenseId;

  // console.log(isEdited,editedExpenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdited ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEdited]);

  const handleDeleteExpense = () => {
    navigation.goBack();

  };

  const cancelHandler=()=>{
    console.log("hello");
    navigation.goBack();
  };
  
  const confirmHandler=()=>{
    navigation.goBack();

  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonStyleContainer}>
        <Button style={styles.button} mode="flat" onpress={cancelHandler}>Cancel</Button>
        <Button onpress={confirmHandler}>{isEdited? "Update":"Add"}</Button>
      </View>
      {isEdited && (
        <View style={styles.deleteContainer}>
          <ButtonIcon
            name={"trash"}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={() => handleDeleteExpense()}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:24,
    backgroundColor:GlobalStyles.colors.primary800
  },
  deleteContainer:{
    marginTop:16,
    paddingTop:8,
    borderTopWidth:2,
    borderTopColor:GlobalStyles.colors.primary200,
    alignItems:'center'
  },
  buttonStyleContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  button:{
    minWidth:120,
    marginHorizontal:8,
  }
});
