import axios from 'axios'

const API_URL = 'https://capitals.onrender.com/api/v1/countries'

export const play = async () => {
  const response = await axios.get(`${API_URL}/play`)
  return response.data
}

export const solve = async (flag, user_country) => {
  const payload = { flag, country: user_country }
  const response = await axios.post(`${API_URL}/solve`, payload)
  const { ok, country } = response.data
  return { ok, answer: country }
}
