import { Client, Channel, TextBasedChannel } from 'discord.js';

export const fetchChannels = async (client: Client, ids: string[]): Promise<(TextBasedChannel)[]> => {
  const fetchedChannels: Channel[] = (await Promise.all(ids.filter(x => x).map(async (id: string) => {
    try {
      return await client.channels.fetch(id);
    } catch (ex) {
      console.error(`Error while fetching channel ${id}. ${ex}`);
      return null;
    }
  }
  )))
    .filter((channel: Channel | null) => channel !== null) as Channel[];

  const channels: (TextBasedChannel)[] = fetchedChannels
    .filter((channel: Channel) => channel.isTextBased())
    .map((channel: Channel) => channel as TextBasedChannel);

  console.log(channels);
  return channels;
};
