import createDateContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  // state === [{title: value}, ...]
  // action === {type: 'add' || 'edit' || 'delete'}
  switch (action.type) {
    case "get_blogposts": {
      return action.payload;
    }
    case "delete_blogpost": {
      return state.filter((blogpost) => blogpost.id !== action.payload);
    }
    case "edit_blogpost": {
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    }
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });
    if (callback) callback();
  };
};
const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
const editBlogPost = (dispatch) => {
  return async (title, content, id, callback) => {
    await jsonServer.put(`blogposts/${id}`, { title, content });
    dispatch({ type: "edit_blogpost", payload: { title, content, id } });
    if (callback) callback();
  };
};

const getBlogPosts = (dispatch) => {
  return async () => {
    try {
      const response = await jsonServer.get("/blogposts");
      dispatch({ type: "get_blogposts", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Context, Provider } = createDateContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
