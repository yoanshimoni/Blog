import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = route.params.id;

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialFormValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) =>
        editBlogPost(title, content, id, () => {
          navigation.pop();
        })
      }
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
