import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowScreen = ({ navigation, route }) => {
  const { state } = useContext(Context);
  const id = route.params.id;
  const blogpost = state.find((blogpost) => blogpost.id === id);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => navigation.navigate("EditScreen", { id })}
        >
          <Feather name="edit" size={30} />
        </TouchableOpacity>
      ),
    }),
      [];
  });

  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>{blogpost.title}</Text>
        <Text style={styles.titleStyle}>{blogpost.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    marginHorizontal: 3,
    borderWidth: 2,
    borderColor: "gray",
    marginTop: 50,
    paddingTop: 50,
    paddingLeft: 5,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default ShowScreen;
