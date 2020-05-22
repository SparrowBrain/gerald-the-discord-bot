import { DMChannel, Client, Channel, NewsChannel, TextChannel } from "discord.js"

export const fetchChannels = async (client: Client, ids: string[]): Promise<(DMChannel | NewsChannel | TextChannel)[]> => {
    const channels: (DMChannel | NewsChannel | TextChannel)[] = (await Promise.all(ids.map(async (id: string) =>
        await client.channels.fetch(id)
    )))
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