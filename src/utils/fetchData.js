import { API_BASE_URL, API_TOKEN } from '../config';

const fetchData = async (path, params = {}) => {
  const searchParams = { plan: 'TIER_ONE', ...params };
  const relPath = path.replace(/^\//, '');
  const url = new URL(relPath, API_BASE_URL);
  url.search = new URLSearchParams(searchParams).toString();

  let data = {};

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

    data = await response.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  console.log(data);
  return data;
};

const fetchCompetitions = async () => {
  const { count, competitions } = await fetchData('competitions');
  return { count, competitions };
};

const fetchTeams = async () => {
  const { count, teams } = await fetchData('teams');
  return { count, teams };
};

const fetchMatches = async (path, params = {}) => {
  const { count, matches } = await fetchData(path, params);
  return { count, matches };
};

export { fetchCompetitions, fetchTeams, fetchMatches };
