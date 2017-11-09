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
```

### Users Routes :
|Routes|HTTP|Description|
|------|-----|----------|
|`/users/:id`|GET|Verify user by ID|
|`/users`|POST|Register new User|


### Article Routes :
|Routes|HTTP|Description|
|------|-----|----------|
|`/articles`|GET|Get all Articles|
|`/articles/:id`|GET|Get one Article by id|
|`/articles`|POST|Add new Article|
|`/articles`|PUT|Update Article with new info|
|`/articles`|DELETE|Delete Article by ID|
