import React from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyPosition from "./MyPosition";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "천둥번개!!",
    subtitle: "천둥의 신 토르가 온다!!",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "이슬 주세요",
    subtitle: "첫잔은 원샷이겠죠?",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "It`s Rainism",
    subtitle: "일단 차에 타봐",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "하얀 쓰레기",
    subtitle: "let it go~",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "햇빛 짱짱맨~",
    subtitle: "날은 엄청 좋아요",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#304352", "#D7D2CC"],
    title: "흐림",
    subtitle: "날씨 겁나게 흐림",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "안개빛 조명은",
    subtitle: "운전 조심하세요",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "먼지....",
    subtitle: "북서풍...",
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
};

export default function Weather({ temp, condition, latitude, longitude }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.data}>
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons
            size={90}
            name={weatherOptions[condition].iconName}
            color="white"
          />
          <Text style={styles.temp}>{temp}°</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>
            {weatherOptions[condition].subtitle}
          </Text>
        </View>
      </View>

      <MyPosition latitude={latitude} longitude={longitude} />
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    fontSize: 35,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 15,
    textAlign: "left",
  },
  textContainer: {
    flex: 1.7,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  data: {
    flexDirection: "row",
    flex: 1,
  },
});
