import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("krishinet");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export const databaseId = import.meta.env.VITE_DB_ID;
export const collectionId = import.meta.env.VITE_COLLECTION_ID;
export const postCollection = import.meta.env.VITE_POST_COLLECTION_ID;
export const storageBucketId = import.meta.env.VITE_STORAGE_BUCKET_ID;

export default client;
