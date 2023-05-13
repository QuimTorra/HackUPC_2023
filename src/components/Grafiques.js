import { Text, View } from "react-native";
import React, { useState, useEffect} from 'react';
import {LineChart} from "react-native-chart-kit";
import { Dimensions } from 'react-native';
import TransactionRow from "./TransactionRow";

export default function Grafiques() {

    const [transations, setTransations] = useState();

    useEffect(async () => {
        let result = await fetch('https://int.strandscloud.com/fs-api/transactions?recoverHeatLevel=false&page=0&size=50&sort=DATE_DESC&applyToSplits=false', {
            method: "GET",
            headers: {
            accept: "application/json",
            "x-api-key": Constants.expoConfig.extra.apiKey,
            Authorization: "bearer " + Constants.expoConfig.extra.userToken,
            },
        });
        let data = await result.json();
        console.log("data: ", data);
        setTransations(data);
    }, []);

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
            },
        ],
    };


    return (
        <View>
            <Text>
                Grafiques
            </Text>
            <LineChart
                data={data}
                width={Dimensions.get('window').width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                    borderRadius: 16,
                    },
                    propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                    },
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
            transactions.map((transaction) => {
                <TransactionRow nom={transaction.nom} date={transaction.date} cost={transation.cost}>
                </TransactionRow>
            })
           
        </View>
    );
}