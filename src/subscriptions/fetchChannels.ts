import { DMChannel, Client, Channel } from "discord.js"

export const fetchChannels = async (client: Client, ids: string[]): Promise<Channel[]> => {
    const channels = await Promise.all(ids.map(async (id: string) => {
        return await client.channels.fetch(id)
    }));
    return channels;
}