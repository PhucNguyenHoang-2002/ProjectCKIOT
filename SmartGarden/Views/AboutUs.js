import React from "react";
import { Text, View, StyleSheet, Image, Linking, TouchableOpacity } from "react-native";

const AboutUs = () => {
  const members = [
    {
      name: "Tiến Nguyễn",
      studentId: "22014674",
      department: "Software engineering",
      image: require("../assets/meu.png"),
      instagram: "https://www.instagram.com/johndoe",
      facebook: "https://www.facebook.com/nguyentran.tien.33",
      github: "https://github.com/johndoe",
    },
    {
      name: "Phúc Nguyễn",
      studentId: "22012490",
      department: "Software engineering",
      image: require("../assets/Fox.png"),
      instagram: "https://www.instagram.com/ng.hoang_phuc/",
      facebook: "https://www.facebook.com/profile.php?id=100013564422879",
      github: "https://github.com/janesmith",
    },
    // Add more members as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <View style={styles.membersContainer}>
        {members.map((member, index) => (
          <View key={index} style={styles.memberContainer}>
            <View style={styles.imageContainer}>
              <Image source={member.image} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{member.name}</Text>
              <Text style={styles.studentId}>Student ID: {member.studentId}</Text>
              <Text style={styles.department}>{member.department}</Text>
              <View style={styles.socialContainer}>
                <TouchableOpacity onPress={() => Linking.openURL(member.instagram)}>
                  <Image source={require("../assets/ins.png")} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(member.facebook)}>
                  <Image source={require("../assets/face.png")} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(member.github)}>
                  <Image source={require("../assets/github.png")} style={styles.socialIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 28, // Increase font size
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  membersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  memberContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 12, // Increase border radius
    alignItems: "center",
    margin: 20, // Increase margin
    padding: 20, // Increase padding
    width: 400, // Increase width
    height: 400, // Increase height
    flexDirection: "row",
  },
  imageContainer: {
    width: 140, // Increase image container width
    height: 140, // Increase image container height
    borderRadius: 12, // Increase border radius
    overflow: "hidden",
    marginRight: 20, // Increase margin
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 24, // Increase font size
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  studentId: {
    fontSize: 18, // Increase font size
    color: "gray",
    marginBottom: 10,
  },
  department: {
    fontSize: 18, // Increase font size
    color: "#007BFF",
    marginBottom: 15, // Increase margin bottom
  },
  socialContainer: {
    flexDirection: "row",
    marginTop: 15, // Increase margin top
  },
  socialIcon: {
    width: 32, // Increase social icon size
    height: 32, // Increase social icon size
    marginHorizontal: 10, // Increase margin horizontal
  },
});

export default AboutUs;
