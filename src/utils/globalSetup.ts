/**
 * global-setup.ts: This module is responsible for setting up the global state before all tests start.
 * It includes a default export function that runs before all tests, setting up any necessary global context.
 * By centralizing these setup operations, it ensures a consistent starting point for all tests, improving test reliability.
 * You can add any initialization setup code within this function.
 */
import { FullConfig } from "@playwright/test";
import dotenv from "dotenv";

async function globalSetup(config: FullConfig) {

    try {
        if (process.env.test_env) {
            dotenv.config({
                path: `.env.${process.env.test_env}`,
                override: true
            });
        }
    } catch (error) {
        console.error("Error loading environment variables:", error);
    }
}
export default globalSetup;