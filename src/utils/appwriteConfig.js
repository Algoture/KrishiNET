import { Client, Account, Databases } from "appwrite";
const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("krishinet");
export const account = new Account(client);

export const databases = new Databases(client);

export const databaseId = '66e6a4ef0015e4f71d10'
export const collectionId = '66e6a4fa000bbbcf88d4'
export default client;