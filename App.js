import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import {COLORS} from "./constants";
import Categories from "./components/Categories";
import Popular from "./components/Popular";

export default function App() {
  return (
      <View
          style={{
            padding: 24,
            paddingTop: 55,
              width: "100%",
              height: "100%",
            paddingBottom: 75,
            backgroundColor: COLORS.black,
          }}
      >
        <Header />
        <Categories />
        <Popular />
      </View>
  );
}
