import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "dns";
dns.setDefaultResultOrder("ipv4first")

const client = new MongoClient(process.env.MONGODB_URI);

await client.connect();

const db = client.db();

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },

    database: mongodbAdapter(db, {
        client,
    }),
});