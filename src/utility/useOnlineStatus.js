import { useEffect, useState } from 'react'

const useOnlineStatus = () => {
  const [onlinStatus, setOnlineStatus] = useState(true)

  useEffect(() => {
    addEventListener('offline', () => {
      setOnlineStatus(false)
    })
    addEventListener('online', () => {
      setOnlineStatus(true)
    })
  }, [])
  return onlinStatus
}
export default useOnlineStatus
