import { Text, View, ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import TransactionRow from "./TransactionRow";
import Constants from "expo-constants";
import { colors } from "../utils/colors";

export default function Grafiques() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const a = async () => {
      let result = await fetch(
        "https://int.strandscloud.com/fs-api/transactions?recoverHeatLevel=false&page=0&size=50&sort=DATE_DESC&applyToSplits=false",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-api-key": Constants.expoConfig.extra.apiKey,
            Authorization: "bearer " + Constants.expoConfig.extra.userToken,
          },
        }
      );
      let data = await result.json();
      // console.log("data: ", data);
      setInfo(data.transactions);
    };
    a();
  }, []);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [2, 4.5, 2.5, 6.0, 7.0, 4.0],
      },
    ],
  };

  return (
    <View style={{ flex: 1 }}>
      <LineChart
        data={data}
        width={Dimensions.get("window").width - 20} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        chartConfig={{
          backgroundColor: `${colors.main}`,
          backgroundGradientFrom: `${colors.main}`,
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginHorizontal: 10,
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {info.map((transaction, i) => {
          return (
            <TransactionRow
              key={i}
              nom={transaction.name}
              date={transaction.date}
              cost={transaction.amount.amount}
              currency={transaction.amount.currency}
            ></TransactionRow>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  llistat: {
    display: "flex",
    justifyContent: "center",
  },
});
