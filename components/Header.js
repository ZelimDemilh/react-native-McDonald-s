import React from 'react';
import {View, Image, TouchableHighlight} from "react-native"
import {icons} from "../constants";

const Header = () => {
    return (
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <TouchableHighlight>
                <Image source={icons.logo} style={{width: 51, height: 45}}/>
            </TouchableHighlight>
            <TouchableHighlight>
                <Image source={icons.basket} style={{width: 45, height: 45}}/>
            </TouchableHighlight>
        </View>
    );
};

export default Header;