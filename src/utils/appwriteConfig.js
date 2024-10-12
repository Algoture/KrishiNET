import { Client, Account, Databases, Storage } from "appwrite"; // Import Storage

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("krishinet");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client); // Add Storage for image uploads

export const databaseId = '66e6a4ef0015e4f71d10';
export const collectionId = '66e6a4fa000bbbcf88d4';
export const postCollection = '6706b994003028a2d878';

export const storageBucketId = '670a9efd00256f9547db'; 


export default client;
