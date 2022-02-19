import { useState } from 'react'
import { useFetch } from './useFetch'

export function useRemoteService(
  url,
  options,
  {
    initialState = null,
    successCallback = () => null,
    errorCallback = () => null,
  },
) {
  const [status, setStatus] = useState('IDLE')
  const [response, setResponse] = useState(initialState)

  const fetcher = useFetch(url)
  const execute = async (body) => {
    setStatus('LOADING')

    try {
      const responseString = await fetcher(url, {
        ...options,
        body: JSON.stringify(body),
      })
      const response = await responseString.json();
      setResponse(response)
      setStatus('SUCCESS')
      
      successCallback(response);
    } catch (error) {
      setResponse(error)
      setStatus('FAILED')

      errorCallback(error);
    }
  }

  return {
    status,
    execute,
    response,
  }
}
