import { Text, View} from "react-native";
import React from 'react';
import { colors } from "../utils/colors";

export default function TransactionRow(props) {

    return (
        <View style={{
                marginVertical: 8,
                marginHorizontal: 10,
                borderRadius: 5,
                backgroundColor: `${colors.main}`,
                display: "flex",
                flexDirection: 'row',
                justifyContent: "space-between",
            }}
        >
            <View style={{marginLeft: 5, marginVertical: 5,}}>
                <Text>{props.nom}</Text>
                <Text>{props.date}</Text>
            </View>
            <View style={{marginRight: 15, marginTop: 'auto', marginBottom: 'auto', display: "flex", flexDirection: 'row'}}>
                <Text >
                    {props.cost}
                </Text>
                <Text style={{marginLeft: 5,}}>
                    {props.currency}
                </Text>
            </View>
        </View>
    );
}