import React, {useState} from 'react';
import { View, Text, TouchableHighlight } from "react-native";
import {COLORS, SIZES} from "../constants";
import {categories} from "../db/categories";
import CategoryItem from "./CategoryItem";

const Categories = () => {
    const [active, setActive] = useState("")

    return (
        <View style={{paddingTop: 60, marginBottom: 30}}>
            <Text style={{fontSize: SIZES.h1, color: COLORS.white, fontWeight: "bold"}}>Hey,</Text>
            <Text style={{fontSize: SIZES.h4, color: COLORS.white, marginBottom: 20}}> what's up?</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap"}}>
                {categories.map(cat => (
                        <CategoryItem key={cat.name} category={cat} active={cat.name === active} setActive={setActive}/>
                ))}
            </View>
        </View>
    );
};

export default Categories;