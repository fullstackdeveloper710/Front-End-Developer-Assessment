import { useEffect, useState } from 'react'
import api from '@/services/api'

export function useFetch(url, options) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    api
      .get(url, { ...options, signal: controller.signal })
      .then((res) => setData(res.data))
      .catch((err) => {
        if (!controller.signal.aborted) setError(err)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return { data, loading, error }
}
