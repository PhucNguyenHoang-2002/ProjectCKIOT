import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Garden1 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/fig.png")} // Replace with your image path
        style={styles.image}
        resizeMode="contain" // Ensures the entire image fits within the specified dimensions
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  image: {
    width: 900,  // Adjust width to make the image larger
    height: 900, // Adjust height to make the image larger
    marginTop: 20, // Adjust margin top as needed
  },
});

export default Garden1;
