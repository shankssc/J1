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
export const onCreateRestaurant = /* GraphQL */ `subscription OnCreateRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
  $owner: String
) {
  onCreateRestaurant(filter: $filter, owner: $owner) {
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
      __typename
    }
    cusineType
    address
    owner
    phone
    picture
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRestaurantSubscriptionVariables,
  APITypes.OnCreateRestaurantSubscription
>;
export const onUpdateRestaurant = /* GraphQL */ `subscription OnUpdateRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
  $owner: String
) {
  onUpdateRestaurant(filter: $filter, owner: $owner) {
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
      __typename
    }
    cusineType
    address
    owner
    phone
    picture
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRestaurantSubscriptionVariables,
  APITypes.OnUpdateRestaurantSubscription
>;
export const onDeleteRestaurant = /* GraphQL */ `subscription OnDeleteRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
  $owner: String
) {
  onDeleteRestaurant(filter: $filter, owner: $owner) {
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
      __typename
    }
    cusineType
    address
    owner
    phone
    picture
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRestaurantSubscriptionVariables,
  APITypes.OnDeleteRestaurantSubscription
>;
