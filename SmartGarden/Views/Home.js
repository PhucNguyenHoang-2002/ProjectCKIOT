import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [showGarden1, setShowGarden1] = useState(false);
  const [showGarden2, setShowGarden2] = useState(false);
  const [showInforDevice, setShowInforDevice] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);

  const navigation = useNavigation();

  const handleButton = () => {
    setShowGarden1(true);
    navigation.navigate("Garden1");
  };

  const handleButton2 = () => {
    setShowGarden2(true);
    navigation.navigate("Garden2");
  };

  const handleButton3 = () => {
    setShowInforDevice(true);
    navigation.navigate("InforDevice");
  };

  const handleButton4 = () => {
    setShowAboutUs(true);
    navigation.navigate("AboutUs");
  };

  return (
    <ImageBackground 
      source={require('../assets/Home.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txtTitle}>SMART GARDEN</Text>
        </View>

        <View style={styles.main}>
          <Pressable style={styles.btnOn} onPress={handleButton2}>
            <Text style={styles.btnText}>Garden</Text>
          </Pressable>
        </View>

        <View style={styles.main}>
          <Pressable style={styles.btnOn} onPress={handleButton}>
            <Text style={styles.btnText}>Device Connection Diagram</Text>
          </Pressable>
        </View>

        <View style={styles.main}>
          <Pressable style={styles.btnOn} onPress={handleButton3}>
            <Text style={styles.btnText}>Device Information</Text>
          </Pressable>
        </View>

        <View style={styles.main}>
          <Pressable style={styles.btnOn} onPress={handleButton4}>
            <Text style={styles.btnText}>About Us</Text>
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Phát triển ứng dụng IOT</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginTop: 50,
    marginBottom: 30,
  },
  txtTitle: {
    fontSize: 58,
    fontWeight: "bold",
    color: "#F6FDFC",
    fontFamily: "Roboto-Italic",
    textShadowColor: '#000',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
  main: {
    marginVertical: 10,
    width: "80%",
    alignItems: "flex-start",
  },
  btnOn: {
    backgroundColor: "#4CAF50",
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    alignSelf: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 20,
  },
  footerText: {
    backgroundColor: "#000",
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    color: "#fff",
    fontSize: 18,
  },
});

export default Home;
