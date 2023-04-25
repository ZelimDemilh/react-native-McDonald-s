import React from 'react';
import {Image, Text, TouchableHighlight, View} from "react-native";
import {COLORS, SIZES} from "../constants";

const   PopularItem = ({product, setActive, active}) => {
    return (
        <View style={{width: "30%", borderRadius: SIZES.radius, marginBottom: 10, height: 100, justifyContent: "center", backgroundColor: active? COLORS.secondary : COLORS.black}}>
            <TouchableHighlight onPress={() => setActive((pre) => pre === product.name? "" : product.name)}>
                <View style={{alignItems: "center"}}>
                    <Image source={{uri: product.image}} style={{width: 30, height: 30}}/>
                    <Text style={{color: COLORS.white, textAlign: "center", fontSize: SIZES.h4}}>{product.name}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

export default PopularItem;