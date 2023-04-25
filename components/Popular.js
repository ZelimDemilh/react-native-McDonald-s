import React, {useState} from 'react';
import { View, Text  } from "react-native";
import {COLORS, SIZES} from "../constants";
import {popular} from "../db/popular";
import CategoryItem from "./CategoryItem";
import PopularItem from "./PopularItem";

const Popular = () => {
    const [active, setActive] = useState("")

    return (
        <View>
            <Text style={{fontSize: SIZES.h1, color: COLORS.white, fontWeight: "bold"}}>Popular</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", marginTop: 20}}>
                {popular.map(product => (
                    <PopularItem key={product.name} product={product} active={product.name === active} setActive={setActive}/>
                ))}
            </View>
        </View>
    );
};

export default Popular;