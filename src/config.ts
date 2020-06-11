import dotenv from 'dotenv';

dotenv.config();

export const Token = process.env.DISCORD_BOT_TOKEN;
// export const Token = <your_token_goes_here>

export const SubsFile: string = 'subs.txt';
export const FetchIntervalMs = 1000 * 60 * 60;