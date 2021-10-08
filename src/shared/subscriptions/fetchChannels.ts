import { DMChannel, Client, Channel, NewsChannel, TextChannel } from "discord.js"

export const fetchChannels = async (client: Client, ids: string[]): Promise<(DMChannel | NewsChannel | TextChannel)[]> => {
    const fetchedChannels: Channel[] = (await Promise.all(ids.map(async (id: string) => {
        try {
            return await client.channels.fetch(id);
        }
        catch (ex) {
            console.error(ex);
            console.log(`Error while fetching channel ${id}.`);
            return null;
        }
    }
    )))
    .filter((channel: Channel | null) => channel !== null) as Channel[];

    const channels: (DMChannel | NewsChannel | TextChannel)[] = fetchedChannels
        .filter((channel: Channel) => channel.type === 'text' || channel.type === 'dm' || channel.type === 'news')
        .map((channel) => {
            if (channel.type === 'dm') {
                return channel as DMChannel;
            } else if (channel.type === 'news') {
                return channel as NewsChannel;
            } else if (channel.type === 'text') {
                return channel as TextChannel;
            } else {
                throw Error('unexpected channel')
            }
        });
    return channels;
}