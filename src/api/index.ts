export const getApiUrl = () => {
  const API_BASE_URL = 'https://opentdb.com/api.php';
  const params = Object.entries({
    amount: 4,
    category: 9,
    difficulty: 'easy',
    type: 'multiple'
  })
    .map(([key, value], i) => `${i === 0 ? '?' : '&'}${key}=${value}`)
    .join('');

  return `${API_BASE_URL}${params}`;
};
