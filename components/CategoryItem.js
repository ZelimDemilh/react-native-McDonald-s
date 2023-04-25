import React from 'react';
import { View, Text, Image, TouchableHighlight} from "react-native";
import {COLORS, SIZES} from "../constants";

const CategoryItem = ({category, active, setActive}) => {
    return (
        <View style={{width: "30%", borderRadius: SIZES.radius, marginBottom: 10, height: 100, justifyContent: "center", backgroundColor: active? COLORS.secondary : COLORS.gray}}>
            <TouchableHighlight onPress={() => setActive((pre) => pre === category.name? "" : category.name)}>
                <View style={{alignItems: "center"}}>
                    <Image source={{uri: category.image}} style={{width: 30, height: 30}}/>
                    <Text style={{color: COLORS.white, textAlign: "center", fontSize: SIZES.h4}}>{category.name}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

export default CategoryItem;