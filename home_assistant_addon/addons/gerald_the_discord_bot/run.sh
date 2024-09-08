#!/usr/bin/with-contenv bashio

CONFIG_PATH=/data/options.json

echo DISCORD_BOT_TOKEN="$(bashio::config 'DiscordBotToken')" > .env
echo FETCH_INTERVAL="$(bashio::config 'FetchInterval')" >> .env
echo FETCH_INTERVAL_RANDOM="$(bashio::config 'FetchIntervalRandom')" >> .env
echo FREEBIES_SUBS_FILE=/data/subs.txt >> .env
echo DEBUG_SUBS_FILE=/data/debugSubs.txt >> .env
echo MEMORY_FILE=/data/memory.txt >> .env

node -v
npm -v
ls

npm start