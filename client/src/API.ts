/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateRestaurantInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  menu?: Array< MenuItemInput | null > | null,
  cusineType?: Array< string > | null,
  address: string,
  owner?: string | null,
  phone?: string | null,
  picture?: string | null,
};

export type MenuItemInput = {
  name: string,
  price: number,
  description?: string | null,
  calories: string,
  tags?: Array< string > | null,
  picture?: string | null,
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  cusineType?: ModelStringInput | null,
  address?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  and?: Array< ModelRestaurantConditionInput | null > | null,
  or?: Array< ModelRestaurantConditionInput | null > | null,
  not?: ModelRestaurantConditionInput | null,
};

export type Restaurant = {
  __typename: "Restaurant",
  id: string,
  name: string,
  description?: string | null,
  menu?:  Array<MenuItem | null > | null,
  cusineType?: Array< string > | null,
  address: string,
  owner?: string | null,
  phone?: string | null,
  picture?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type MenuItem = {
  __typename: "MenuItem",
  name: string,
  price: number,
  description?: string | null,
  calories: string,
  tags?: Array< string > | null,
  picture?: string | null,
};

export type UpdateRestaurantInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  menu?: Array< MenuItemInput | null > | null,
  cusineType?: Array< string > | null,
  address?: string | null,
  owner?: string | null,
  phone?: string | null,
  picture?: string | null,
};

export type DeleteRestaurantInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  cusineType?: ModelStringInput | null,
  address?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  and?: Array< ModelRestaurantFilterInput | null > | null,
  or?: Array< ModelRestaurantFilterInput | null > | null,
  not?: ModelRestaurantFilterInput | null,
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection",
  items:  Array<Restaurant | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionRestaurantFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  cusineType?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  picture?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRestaurantFilterInput | null > | null,
  or?: Array< ModelSubscriptionRestaurantFilterInput | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRestaurantMutationVariables = {
  input: CreateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type CreateRestaurantMutation = {
  createRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    description?: string | null,
    menu?:  Array< {
      __typename: "MenuItem",
      name: string,
      price: number,
      description?: string | null,
      calories: string,
      tags?: Array< string > | null,
      picture?: string | null,
    } | null > | null,
    cusineType?: Array< string > | null,
    address: string,
    owner?: string | null,
    phone?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRestaurantMutationVariables = {
  input: UpdateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type UpdateRestaurantMutation = {
  updateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    description?: string | null,
    menu?:  Array< {
      __typename: "MenuItem",
      name: string,
      price: number,
      description?: string | null,
      calories: string,
      tags?: Array< string > | null,
      picture?: string | null,
    } | null > | null,
    cusineType?: Array< string > | null,
    address: string,
    owner?: string | null,
    phone?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRestaurantMutationVariables = {
  input: DeleteRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type DeleteRestaurantMutation = {
  deleteRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    description?: string | null,
    menu?:  Array< {
      __typename: "MenuItem",
      name: string,
      price: number,
      description?: string | null,
      calories: string,
      tags?: Array< string > | null,
      picture?: string | null,
    } | null > | null,
    cusineType?: Array< string > | null,
    address: string,
    owner?: string | null,
    phone?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRestaurantQueryVariables = {
  id: string,
};

export type GetRestaurantQuery = {
  getRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    description?: string | null,
    menu?:  Array< {
      __typename: "MenuItem",
      name: string,
      price: number,
      description?: string | null,
      calories: string,
      tags?: Array< string > | null,
      picture?: string | null,
    } | null > | null,
    cusineType?: Array< string > | null,
    address: string,
    owner?: string | null,
    phone?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRestaurantsQueryVariables = {
  filter?: ModelRestaurantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRestaurantsQuery = {
  listRestaurants?:  {
    __typename: "ModelRestaurantConnection",
    items:  Array< {
      __typename: "Restaurant",
      id: string,
      name: string,
      description?: string | null,
      cusineType?: Array< string > | null,
      address: string,
      owner?: string | null,
      phone?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
  owner?: string | null,
};

export type OnCreateRestaurantSubscription = {
  onCreateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    description?: string | null,
    menu?:  Array< {
      __typename: "MenuItem",
      name: string,
      price: number,
      description?: string | null,
      calories: string,
      tags?: Array< string > | null,
      picture?: string | null,
    } | null > | null,
    cusineType?: Array< string > | null,
    address: string,
    owner?: string | null,
    phone?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRestaurantSubscription = {
  onUpdateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    description?: string | null,
    menu?:  Array< {
      __typename: "MenuItem",
      name: string,
      price: number,
      description?: string | null,
      calories: string,
      tags?: Array< string > | null,
      picture?: string | null,
    } | null > | null,
    cusineType?: Array< string > | null,
    address: string,
    owner?: string | null,
    phone?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRestaurantSubscription = {
  onDeleteRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    description?: string | null,
    menu?:  Array< {
      __typename: "MenuItem",
      name: string,
      price: number,
      description?: string | null,
      calories: string,
      tags?: Array< string > | null,
      picture?: string | null,
    } | null > | null,
    cusineType?: Array< string > | null,
    address: string,
    owner?: string | null,
    phone?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
