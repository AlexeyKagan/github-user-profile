export const pinnedItemsResolver = (data) =>
  data?.user.pinnedItems.edges.map((edge) => edge.node);
