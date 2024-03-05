import dotenv from 'dotenv';
import config from './config.json'; 

dotenv.config();

export function getBaseUrl(): string {
    return config.Dev.baseUrl;
}