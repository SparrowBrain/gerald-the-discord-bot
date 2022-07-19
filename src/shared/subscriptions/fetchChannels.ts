import { DMChannel, Client, NewsChannel, TextChannel, AnyChannel } from 'discord.js';

export const fetchChannels = async (client: Client, ids: string[]): Promise<(DMChannel | NewsChannel | TextChannel)[]> => {
  const fetchedChannels: AnyChannel[] = (await Promise.all(ids.filter(x => x).map(async (id: string) => {
    try {
      return await client.channels.fetch(id);
    } catch (ex) {
      console.error(`Error while fetching channel ${id}. ${ex}`);
      return null;
    }
  }
  )))
    .filter((channel: AnyChannel | null) => channel !== null) as AnyChannel[];

  const channels: (DMChannel | NewsChannel | TextChannel)[] = fetchedChannels
    .filter((channel: AnyChannel) => channel.type === 'GUILD_TEXT' || channel.type === 'DM' || channel.type === 'GUILD_NEWS')
    .map((channel) => {
      if (channel.type === 'DM') {
        return channel as DMChannel;
      } else if (channel.type === 'GUILD_NEWS') {
        return channel as NewsChannel;
      } else if (channel.type === 'GUILD_TEXT') {
        return channel as TextChannel;
      } else {
        console.error(`Unexpected channel id: ${channel.id} type: ${channel.type}`);
        throw Error('unexpected channel');
      }
    });
  return channels;
};
