# hacktivpress

## Simple Press list using Vuex and Mongoose


# How to run

## Client Side
```
npm install
npm run dev
# it will run on localhost:8080
```
## Server Side
```
npm install
npm run start
# will run on localhost:3000
```s

### Users Routes :
|Routes|HTTP|Description|
|------|-----|----------|
|`/users/login`|POST|Verify user by ID|
|`/users/register`|POST|Register new User|


### Article Routes :
|Routes|HTTP|Description|
|------|-----|----------|
|`/articles`|GET|Get all Articles|
|`/articles/:id`|GET|Get one Article by id|
|`/articles/new`|POST|Add new Article|
|`/articles/:id`|PUT|Update Article with new info|
|`/articles/:id`|DELETE|Delete Article by ID|
|`/articles/category`|POST|Search Article by Category|
|`/articles/author`|POST|Search Article by Author|
