import { useEffect, useRef, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export function Crono() {
  const [temp, setTemp] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const myInterval = useRef();

  function timer() {
    myInterval.current = setInterval(() => {
      setTemp((temp) => temp + 1);
    }, 1000);
  }

  function start() {
    return timer();
  }

  function handleStop() {
    setIsStarted(false);
    clearInterval(myInterval.current);
  }

  function handleReset() {
    clearInterval(myInterval.current);
    setTemp(0);
  }

  useEffect(() => {
    timer();
    return clearInterval(myInterval.current);
  }, [isStarted]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => start()}>
        <Text style={styles.title}>{temp}</Text>
      </TouchableOpacity>
      <View
        style={{
          width: 170,
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={handleReset}>
          <Text>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleStop}>
          <Text>Pause</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },

  title: {
    width: 150,
    borderRadius: 100,
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
    fontSize: 50,
    backgroundColor: "#1DA1F2",
    color: "#fff",
  },
});
