import { Text, View } from "react-native";
import React, { useState} from 'react';
import {LineChart} from "react-native-chart-kit";
import { Dimensions } from 'react-native';

export default function Grafiques() {

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
        </View>
    );
}