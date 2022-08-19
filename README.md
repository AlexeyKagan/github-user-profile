# Github user profile page using apollo, graphql client and react.
### Notes about app
1. My approach was to use as little as possible third-party libraries, I didn’t want to drag various component libraries into this project

### In order to run this project you have to do following
- Update `.env` file
```
REACT_APP_GITHUB_ACCESS_TOKEN=https://api.github.com/graphql
REACT_APP_GITHUB_ACCESS_TOKEN={TOKEN}
```

You have to generate `REACT_APP_GITHUB_ACCESS_TOKEN`. 

In order to do that you have to go to this link: https://github.com/settings/tokens. Click generate token and allow permissions then copy and past it in `.env` file.


2. To run this project do follow commands:
```
1. npm install
2. npm start
```
