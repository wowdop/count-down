import { useCountDown } from './count-down.hook'
import * as S from './count-down.style'

const CountDown = () => {
  const endDate = '2022-11-25'
  const time = useCountDown(endDate)

  const { seconds, minutes, hours, days } = time

  return (
    <S.CountDown>
      <h1>Count Down</h1>

      <div>End date: {endDate}</div>

      <div>
        Time {days} day {hours} hours {minutes} minutes and {seconds} seconds
      </div>
    </S.CountDown>
  )
}

export { CountDown }
