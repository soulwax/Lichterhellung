import { Message, MessageType, TextChannel } from 'discord.js';
import { VERIFY_CHANNELS } from '../constants.js';

export const cleanUpVerifyChannel = async (message: Message<boolean>) => {
  const channel = (await message.channel?.fetch()) as TextChannel;
  // remove non command messages in verify channel
  if (
    VERIFY_CHANNELS.includes(channel.name) &&
    message.type !== MessageType.ChatInputCommand
  ) {
    message.delete();
  }
};
