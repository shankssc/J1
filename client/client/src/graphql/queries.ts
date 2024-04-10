/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const getBusiness = /* GraphQL */ `query GetBusiness($id: ID!) {
  getBusiness(id: $id) {
    id
    name
    menu {
      name
      price
      description
      calories
      tags
      picture
      type
      id
      createdAt
      updatedAt
      owner
      __typename
    }
    cusineType
    address
    email
    phone
    picture
    type
    firstName
    lastName
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBusinessQueryVariables,
  APITypes.GetBusinessQuery
>;
export const listBusinesses = /* GraphQL */ `query ListBusinesses(
  $filter: ModelBusinessFilterInput
  $limit: Int
  $nextToken: String
) {
  listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      cusineType
      address
      email
      phone
      picture
      type
      firstName
      lastName
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBusinessesQueryVariables,
  APITypes.ListBusinessesQuery
>;
export const getMenuItem = /* GraphQL */ `query GetMenuItem($id: ID!) {
  getMenuItem(id: $id) {
    name
    price
    description
    calories
    tags
    picture
    type
    id
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMenuItemQueryVariables,
  APITypes.GetMenuItemQuery
>;
export const listMenuItems = /* GraphQL */ `query ListMenuItems(
  $filter: ModelMenuItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listMenuItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      name
      price
      description
      calories
      tags
      picture
      type
      id
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMenuItemsQueryVariables,
  APITypes.ListMenuItemsQuery
>;
