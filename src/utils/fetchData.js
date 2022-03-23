import { API_BASE_URL, API_TOKEN } from '../config';

const fetchData = (resource) => async () => {
  const params = { plan: 'TIER_FOUR' };

  const url = new URL(resource, API_BASE_URL);
  url.search = new URLSearchParams(params).toString();

  const data = {};

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Auth-Token': API_TOKEN,
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const json = await response.json();
    data[resource] = json[resource];
    data.count = json.count;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  return data;
};

const fetchCompetitions = fetchData('competitions');
const fetchTeams = fetchData('teams');

export { fetchCompetitions, fetchTeams };
