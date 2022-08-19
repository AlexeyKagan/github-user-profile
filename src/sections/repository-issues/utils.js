export const repositoryIssuesResolver = (data) =>
  data?.repository.issues.edges.map((edge) => edge.node);
