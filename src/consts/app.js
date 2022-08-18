export const GRAPHQL_ENDPOINT = process.env.REACT_APP_GRAPHQL_ENDPOINT;
export const ACCESS_TOKEN = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

export const ROUTES = {
  HOME: '/',
  ISSUES_LIST: '/:owner/:name/issues',
  ISSUE: '/:owner/:name/issues/:number',
};
