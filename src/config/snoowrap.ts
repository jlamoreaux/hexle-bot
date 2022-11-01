import Snoowrap from "snoowrap";

const userAgent = process.env.REDDIT_USER_AGENT;
const clientId = process.env.REDDIT_CLIENT_ID;
const clientSecret = process.env.REDDIT_CLIENT_SECRET;
const refreshToken = process.env.REDDIT_REFRESH_TOKEN;

const snoowrap = new Snoowrap({
  userAgent,
  clientId,
  clientSecret,
  refreshToken
});

export default snoowrap;