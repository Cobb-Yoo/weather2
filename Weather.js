import React from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyPosition from "./MyPosition";
import { useState } from "react";

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

export default function Weather({
  temp,
  condition,
  latitude,
  longitude,
  day0_dt,
  day0_tmp,
  day0_weather,
  day1_dt,
  day1_tmp,
  day1_weather,
  day2_dt,
  day2_tmp,
  day2_weather,
  day3_dt,
  day3_tmp,
  day3_weather,
  day4_dt,
  day4_tmp,
  day4_weather,
  day5_dt,
  day5_tmp,
  day5_weather,
  day6_dt,
  day6_tmp,
  day6_weather,
}) {
  const [show, setShowCaf] = useState(false);

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
          <Text style={styles.temp}>{temp - 273} °</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>
            {weatherOptions[condition].subtitle}
          </Text>
        </View>
      </View>

      <View style={styles.data}>
        <View style={styles.weekly}>
          <MaterialCommunityIcons
            size={30}
            name={weatherOptions[day0_weather].iconName}
            color="white"
          />
          <Text>{day0_dt}</Text>
          <Text style={styles.daily_temp}>{parseInt(day0_tmp) - 273}</Text>
        </View>

        <View style={styles.weekly}>
          <MaterialCommunityIcons
            size={30}
            name={weatherOptions[day1_weather].iconName}
            color="white"
          />
          <Text>{day1_dt}</Text>
          <Text style={styles.daily_temp}>{parseInt(day1_tmp) - 273}</Text>
        </View>

        <View style={styles.weekly}>
          <MaterialCommunityIcons
            size={30}
            name={weatherOptions[day2_weather].iconName}
            color="white"
          />
          <Text>{day2_dt}</Text>
          <Text style={styles.daily_temp}>{parseInt(day2_tmp) - 273}</Text>
        </View>

        <View style={styles.weekly}>
          <MaterialCommunityIcons
            size={30}
            name={weatherOptions[day3_weather].iconName}
            color="white"
          />
          <Text>{day3_dt}</Text>
          <Text style={styles.daily_temp}>{parseInt(day3_tmp) - 273}</Text>
        </View>

        <View style={styles.weekly}>
          <MaterialCommunityIcons
            size={30}
            name={weatherOptions[day4_weather].iconName}
            color="white"
          />
          <Text>{day4_dt}</Text>
          <Text style={styles.daily_temp}>{parseInt(day4_tmp) - 273}</Text>
        </View>

        <View style={styles.weekly}>
          <MaterialCommunityIcons
            size={30}
            name={weatherOptions[day5_weather].iconName}
            color="white"
          />
          <Text>{day5_dt}</Text>
          <Text style={styles.daily_temp}>{parseInt(day5_tmp) - 273}</Text>
        </View>

        <View style={styles.weekly}>
          <MaterialCommunityIcons
            size={30}
            name={weatherOptions[day6_weather].iconName}
            color="white"
          />
          <Text>{day6_dt}</Text>
          <Text style={styles.daily_temp}>{parseInt(day6_tmp) - 273}</Text>
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
  daily_temp: {
    fontSize: 20,
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
  weekly: {
    width: Dimensions.get("window").width / 7,
    alignItems: "center",
  },
});
