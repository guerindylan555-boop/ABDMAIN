import * as prismic from "@prismicio/client";

export const repositoryName = "ab-digital" as const;

export function createClient(config: prismic.ClientConfig = {}) {
  const endpoint = prismic.getRepositoryEndpoint(repositoryName);
  return prismic.createClient(endpoint, config);
}


