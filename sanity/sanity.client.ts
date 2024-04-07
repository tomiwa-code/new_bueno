import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "ua7iwov2",
  dataset: "production",
  apiVersion: "2024-04-06",
  useCdn: false,
};

const client = createClient(config);

export default client;
