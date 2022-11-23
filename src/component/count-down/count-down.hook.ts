import { useEffect, useState } from 'react'

export const useCountDown = (date = '2022-11-25') => {
  const endDate = new Date(date)

  const [time, setTime] = useState({
    hours: '',
    minutes: '',
    seconds: '',
    days: '',
  })

  useEffect(() => {
    const now = Date.now()
    const timeDiff = ~~((endDate.getTime() - now) / 1000)
    const tempSeconds = timeDiff % 60
    const tempMinutes = ~~(timeDiff / 60) % 60
    const tempHours = ~~(timeDiff / 3600) % 24
    const tempDays = ~~(timeDiff / 86400)

    const seconds = tempSeconds < 10 ? `0${tempSeconds}` : `${tempSeconds}`
    const minutes = tempMinutes < 10 ? `0${tempMinutes}` : `${tempMinutes}`
    const hours = tempHours < 10 ? `0${tempHours}` : `${tempHours}`
    const days = `${tempDays}`

    setTimeout(() => {
      setTime({ seconds, minutes, hours, days })
    }, 1000)
  }, [time])

  return time
}
