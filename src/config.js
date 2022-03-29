export const API_TOKEN = process.env.REACT_APP_API_KEY;
export const API_BASE_URL = 'https://api.football-data.org/v2/';
export const API_PLAN = 'TIER_ONE';

export const API_DICTIONARY = {
  matchStatus: {
    SCHEDULED: 'Запланирован',
    LIVE: 'В прямом эфире',
    IN_PLAY: 'В игре',
    PAUSED: 'Пауза',
    FINISHED: 'Завершен',
    POSTPONED: 'Отложен',
    SUSPENDED: 'Приостановлен',
    CANCELED: 'Отменен',
  },
};
