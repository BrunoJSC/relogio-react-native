import { StyleSheet, Text, View } from "react-native";

const relogio = new Date().toLocaleTimeString("pt-BR", {
  hour: "2-digit",
  minute: "2-digit",
});

const date = new Date().toLocaleDateString("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "2-digit",
});

export function Relogio() {
  return (
    <View style={{ padding: 15 }}>
      <Text style={styles.title}>{relogio.slice(0, 5)}</Text>
      <Text style={styles.text}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontFamily: "sans-serif",
    fontSize: 40,
  },

  text: {
    fontWeight: "800",
    fontFamily: "sans-serif",
    fontSize: 18,
  },
});
