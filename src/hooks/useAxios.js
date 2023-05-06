import { useCallback, useState } from 'react'
import axios from 'axios'
import { API_URL } from '@/services/api'

axios.defaults.baseURL = API_URL

const useAxios = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const requestData = useCallback(async (config) => {
    try {
      const response = await axios.request(config)
      setData(response.data)
    } catch (err) {
      setError(err)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, error, loading, requestData }
}

export default useAxios
