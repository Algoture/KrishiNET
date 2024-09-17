import { Client, Account, Databases } from "appwrite";
const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("krishinet");
export const account = new Account(client);

export default client;