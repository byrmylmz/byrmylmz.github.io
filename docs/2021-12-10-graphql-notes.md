---
title: Graphql Notes
excerpt: Graphql note and some query samples!
tags: ['hardware', 'review']
---


[Github repo](https://github.com/byrmylmz/booksql-laravel/blob/ea44f377d7ba05a84566a9d3d611b980c3773331/graphql/schema.graphql#L7-L17)

>EndPoint http://project-name.test/graphql

```graphql
type Query {
    users: [User!]! @paginate(defaultCount: 10) // these notes for the future projects
    user(id: ID @eq): User @find


    books:[Book] @all
    book(id: ID @eq): Book @find
    booksByFeatured(featured: Boolean! @eq): [Book] @all
    someComplexQuery(search: String!) [Book]


    categories:[Category] @all
    category(id: ID @eq): Category @find
   ```
   
# Create 
```graphql
mutation{
  createCategory(
    name:"deneme"
  ) {
    name
  }
}
```
# Update
```graphql
mutation{
  updateCategory(id:1, name:"new"){
    id
    name
  }
}
```
# query get data
```graphql
query{
  books{
    id
  }
}
```


   
   
