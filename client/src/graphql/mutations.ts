/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const createBusiness = /* GraphQL */ `mutation CreateBusiness(
  $input: CreateBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  createBusiness(input: $input, condition: $condition) {
    id
    name
    description
    menu {
      name
      price
      description
      calories
      tags
      picture
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
` as GeneratedMutation<
  APITypes.CreateBusinessMutationVariables,
  APITypes.CreateBusinessMutation
>;
export const updateBusiness = /* GraphQL */ `mutation UpdateBusiness(
  $input: UpdateBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  updateBusiness(input: $input, condition: $condition) {
    id
    name
    description
    menu {
      name
      price
      description
      calories
      tags
      picture
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
` as GeneratedMutation<
  APITypes.UpdateBusinessMutationVariables,
  APITypes.UpdateBusinessMutation
>;
export const deleteBusiness = /* GraphQL */ `mutation DeleteBusiness(
  $input: DeleteBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  deleteBusiness(input: $input, condition: $condition) {
    id
    name
    description
    menu {
      name
      price
      description
      calories
      tags
      picture
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
` as GeneratedMutation<
  APITypes.DeleteBusinessMutationVariables,
  APITypes.DeleteBusinessMutation
>;
export const createMenuItem = /* GraphQL */ `mutation CreateMenuItem(
  $input: CreateMenuItemInput!
  $condition: ModelMenuItemConditionInput
) {
  createMenuItem(input: $input, condition: $condition) {
    name
    price
    description
    calories
    tags
    picture
    id
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMenuItemMutationVariables,
  APITypes.CreateMenuItemMutation
>;
export const updateMenuItem = /* GraphQL */ `mutation UpdateMenuItem(
  $input: UpdateMenuItemInput!
  $condition: ModelMenuItemConditionInput
) {
  updateMenuItem(input: $input, condition: $condition) {
    name
    price
    description
    calories
    tags
    picture
    id
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMenuItemMutationVariables,
  APITypes.UpdateMenuItemMutation
>;
export const deleteMenuItem = /* GraphQL */ `mutation DeleteMenuItem(
  $input: DeleteMenuItemInput!
  $condition: ModelMenuItemConditionInput
) {
  deleteMenuItem(input: $input, condition: $condition) {
    name
    price
    description
    calories
    tags
    picture
    id
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMenuItemMutationVariables,
  APITypes.DeleteMenuItemMutation
>;
