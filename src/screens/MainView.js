import { Text, View } from "react-native";
import React, { useState} from 'react';
import Grafiques from "../components/Grafiques";

export default function MainView() {


    return (
        <View>
            <Text>
                Main view
                <Grafiques>{aaa}</Grafiques>
            </Text>
        </View>
    );
}