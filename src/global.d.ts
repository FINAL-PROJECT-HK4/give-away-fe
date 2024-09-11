interface Window {
  Telegram: {
    WebApp: {
      ready: () => void;
      initData: string;
      initDataUnsafe: {
        user?: {
          id: number;
          first_name: string;
          last_name?: string;
          username?: string;
          language_code?: string;
        };
        receiver?: {
          id: number;
          first_name: string;
          last_name?: string;
          username?: string;
          language_code?: string;
        };
        chat?: {
          id: number;
          title: string;
          type: 'private' | 'group' | 'supergroup' | 'channel';
        };
        chat_type?: string; // "sender", "private", "group", "supergroup", "channel"
        chat_instance?: string;
        query_id?: string;
        start_param?: string; // Start parameter when launched from attachment menu
        auth_date: string;
        hash: string;
        can_send_after?: number; // Optional, time in seconds before a message can be sent via answerWebAppQuery
        [key: string]: any; // Allows other possible properties
      };
      version: string;
      [key: string]: any; // Allows other possible properties
    };
  };
}
