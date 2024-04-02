/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onCreateBusiness = /* GraphQL */ `subscription OnCreateBusiness(
  $filter: ModelSubscriptionBusinessFilterInput
  $owner: String
) {
  onCreateBusiness(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBusinessSubscriptionVariables,
  APITypes.OnCreateBusinessSubscription
>;
export const onUpdateBusiness = /* GraphQL */ `subscription OnUpdateBusiness(
  $filter: ModelSubscriptionBusinessFilterInput
  $owner: String
) {
  onUpdateBusiness(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBusinessSubscriptionVariables,
  APITypes.OnUpdateBusinessSubscription
>;
export const onDeleteBusiness = /* GraphQL */ `subscription OnDeleteBusiness(
  $filter: ModelSubscriptionBusinessFilterInput
  $owner: String
) {
  onDeleteBusiness(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBusinessSubscriptionVariables,
  APITypes.OnDeleteBusinessSubscription
>;
export const onCreateMenuItem = /* GraphQL */ `subscription OnCreateMenuItem(
  $filter: ModelSubscriptionMenuItemFilterInput
  $owner: String
) {
  onCreateMenuItem(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMenuItemSubscriptionVariables,
  APITypes.OnCreateMenuItemSubscription
>;
export const onUpdateMenuItem = /* GraphQL */ `subscription OnUpdateMenuItem(
  $filter: ModelSubscriptionMenuItemFilterInput
  $owner: String
) {
  onUpdateMenuItem(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMenuItemSubscriptionVariables,
  APITypes.OnUpdateMenuItemSubscription
>;
export const onDeleteMenuItem = /* GraphQL */ `subscription OnDeleteMenuItem(
  $filter: ModelSubscriptionMenuItemFilterInput
  $owner: String
) {
  onDeleteMenuItem(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMenuItemSubscriptionVariables,
  APITypes.OnDeleteMenuItemSubscription
>;
