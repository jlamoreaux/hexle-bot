declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: string;
      MONGO_URI: string;
      REDDIT_USER_AGENT: string;
      REDDIT_CLIENT_ID: string;
      REDDIT_CLIENT_SECRET: string;
      REDDIT_REFRESH_TOKEN: string;
    }
  }
}

export{}
