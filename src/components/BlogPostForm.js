import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialFormValues, labels }) => {
  const [title, setTitle] = useState(initialFormValues.title);
  const [content, setContent] = useState(initialFormValues.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(newText) => setTitle(newText)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(newText) => setContent(newText)}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialFormValues: {
    title: "",
    content: "",
  },
};
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    margin: 5,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});
export default BlogPostForm;
