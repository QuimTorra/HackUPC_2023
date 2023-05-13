import { Text, View } from "react-native";
import React from 'react';

export default function TransactionRow(props) {

    return (
        <View style={{
                marginVertical: 8,
                borderRadius: 16,
            }}
        >
            <Text>{props.name}</Text>
            <Text>{props.date}</Text>
            <Text>{props.cost}</Text>
        </View>
    );
}