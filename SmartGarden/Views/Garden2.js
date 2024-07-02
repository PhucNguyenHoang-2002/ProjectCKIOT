import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ref, onValue, set } from "firebase/database";
import { database } from "./firebaseConfig";
import Icon from 'react-native-vector-icons/FontAwesome';

const Garden2 = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [soilMoisture, setSoilMoisture] = useState(null);
  const [relayStatus, setRelayStatus] = useState(null);
  const [relayMode, setRelayMode] = useState(null);

  useEffect(() => {
    const tempRef = ref(database, "DHT11/temperature");
    const humidityRef = ref(database, "DHT11/humidity");
    const soilMoistureRef = ref(database, "SoilMoisture");
    const relayStatusRef = ref(database, "Relay/status");
    const relayModeRef = ref(database, "Relay/mode");

    const unsubscribe = [
      onValue(tempRef, (snapshot) => {
        const data = snapshot.val();
        console.log("Temperature data:", data);
        setTemperature(data);
      }),

      onValue(humidityRef, (snapshot) => {
        const data = snapshot.val();
        console.log("Humidity data:", data);
        setHumidity(data);
      }),

      onValue(soilMoistureRef, (snapshot) => {
        const data = snapshot.val();
        console.log("Soil Moisture data:", data);
        setSoilMoisture(data && data.value);
      }),

      onValue(relayStatusRef, (snapshot) => {
        const data = snapshot.val();
        console.log("Relay Status data:", data);
        setRelayStatus(data === "ON" ? true : false);
      }),

      onValue(relayModeRef, (snapshot) => {
        const data = snapshot.val();
        console.log("Relay Mode data:", data);
        setRelayMode(data);
      }),
    ];

    return () => unsubscribe.forEach((unsub) => unsub());
  }, []);

  const toggleRelayStatus = () => {
    const newStatus = relayStatus ? "OFF" : "ON";
    set(ref(database, "Relay/status"), newStatus);
  };

  const toggleRelayMode = () => {
    const newMode = relayMode === "AUTO" ? "MANUAL" : "AUTO";
    set(ref(database, "Relay/mode"), newMode);
  };

  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/Garden2.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>GARDEN MONITOR</Text>
        <Text style={styles.text}>
          <Icon name="thermometer-three-quarters" size={20} color="#FFFFFF" /> Temperature: {temperature} °C
        </Text>
        <Text style={styles.text}>
          <Icon name="tint" size={20} color="#FFFFFF" /> Humidity: {humidity} %
        </Text>
        <Text style={styles.text}>
          <Icon name="leaf" size={20} color="#FFFFFF" /> Soil Moisture: {soilMoisture} %
        </Text>
        <Text style={styles.text}>
          <Icon name="toggle-on" size={20} color="#FFFFFF" /> Relay Status: {relayStatus ? "On" : "Off"}
        </Text>
        <View style={styles.buttonWrapper}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={toggleRelayStatus}
              title={relayStatus ? "Turn Off Relay" : "Turn On Relay"}
              color="#059212"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={toggleRelayMode}
              title={relayMode === "AUTO" ? "Switch to MANUAL Mode" : "Switch to AUTO Mode"}
              color="#059212"
            />
          </View>
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
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF",
    fontFamily:"Roboto-Italic",
    textShadowColor: '#000',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 2,
  },
  text: {
    fontSize: 18,
    marginBottom: 25,
    color: "#FFFFFF",
  },
  buttonWrapper: {
    flexDirection: 'column-reverse', // Make the buttons horizontal
    justifyContent: 'space-between', // Distribute buttons with space between
  },
  buttonContainer: {
    marginVertical: 10,
    backgroundColor: "#059212",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    alignSelf: "center",  
  },

});

export default Garden2;
