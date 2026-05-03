import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

const client = new MongoClient(process.env.MONGODB_URI);

await client.connect();

const db = client.db();

const BETTER_AUTH_URL =
    process.env.BETTER_AUTH_URL

export const auth = betterAuth({
    baseURL: BETTER_AUTH_URL,

    trustedOrigins: [BETTER_AUTH_URL],

    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }
    },

    database: mongodbAdapter(db, {
        client,
    }),
});