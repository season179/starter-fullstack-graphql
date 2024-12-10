import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      content
      authorId
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      content
      authorId
      createdAt
      updatedAt
    }
  }
`;