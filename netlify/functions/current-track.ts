import { Handler, HandlerEvent } from "@netlify/functions";
import fetch from 'node-fetch';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString(`base64`);
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response;
};

const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return { statusCode: 200, body: JSON.stringify({ isPlaying: false }) };
  }

  const song = await response.json();

  const isPlaying = song.is_playing;
  const { name } = song.item;
  const artist = song.item.artists.map((artist: any) => artist.name).join(`, `);
  const songUrl = song.item.external_urls.spotify;

  return {
    statusCode: 200,
    body: JSON.stringify({
      isPlaying,
      name,
      artist,
      songUrl,
    }),
  };
};

export { handler };
