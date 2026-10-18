
const URL = './news.json';

export async function fetchNews() {
  try {
    const response = await fetch(URL);

    console.log(
      'status:', response.status,
      'ok:', response.ok
    );

    if (!response.ok) {
      throw new Error('status ' + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to load:', error.message);
    throw error;
  }
}
