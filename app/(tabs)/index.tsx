import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Collapsible } from "@/components/Collapsible";
import { View, Text, FlatList } from "react-native";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/patricia-horizontal.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to PYT Games!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Patricia's birthday</ThemedText>
        <ThemedText>
          To ge this party started, we have some Patricia Themed NYT games.
        </ThemedText>
        <Collapsible title="Connection Rules">
          <ThemedText>
            The Connections Game is a daily challenge where players identify
            links between words. In the Connections Wordle version, the goal is
            to create four clusters of four words, with only four allowable
            errors. Make 4 groups of 4, using 4 lives.
          </ThemedText>
        </Collapsible>
        <Collapsible title="Wordle Rules">
          <View style={styles.listItem}>
            <ThemedText>
              You have 6 guesses for a 5 letter word (valid word)
            </ThemedText>
            <View style={styles.bulletContainer}>
              <Text style={styles.bullet}>{"\u2022"}</Text>
              <Text style={styles.bulletText}>
                Green square: valid letter and position
              </Text>
            </View>
            <View style={styles.bulletContainer}>
              <Text style={styles.bullet}>{"\u2022"}</Text>
              <Text style={styles.bulletText}>
                Yellow square: valid letter wrong position
              </Text>
            </View>
            <View style={styles.bulletContainer}>
              <Text style={styles.bullet}>{"\u2022"}</Text>
              <Text style={styles.bulletText}>
                Grey square: Wrong letter & wrong position
              </Text>
            </View>
          </View>
        </Collapsible>
        <Collapsible title="Crossword Rules">
          <ThemedText>
            The Connections Game is a daily challenge where players identify
            links between words. In the Connections Wordle version, the goal is
            to create four clusters of four words, with only four allowable
            errors. Make 4 groups of 4, using 4 lives.
          </ThemedText>
        </Collapsible>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 278,
    width: 590,
    bottom: 0,
    left: 0,
    top: 56,
    position: "absolute",
  },
  listItem: {
    marginVertical: 10,
  },
  bulletContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 5,
  },
  bullet: {
    fontSize: 20,
    lineHeight: 22,
    marginRight: 5,
  },
  bulletText: {
    fontSize: 16,
    lineHeight: 22,
  },
});
