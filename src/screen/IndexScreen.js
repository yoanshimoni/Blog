import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener("focus", () => getBlogPosts());
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => navigation.navigate("CreateScreen")}
        >
          <Feather name="plus" size={30} />
        </TouchableOpacity>
      ),
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogpost) => blogpost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.blogPostStyle}
              onPress={() => navigation.navigate("ShowScreen", { id: item.id })}
            >
              <Text style={styles.titleStyle}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.iconStyle} name="trash" />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blogPostStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    marginHorizontal: 3,
    marginVertical: 1,
    height: 70,
    borderColor: "gray",
  },
  titleStyle: {
    fontSize: 20,
    marginLeft: 10,
  },
  iconStyle: {
    fontSize: 27,
    marginRight: 10,
  },
});

export default IndexScreen;
