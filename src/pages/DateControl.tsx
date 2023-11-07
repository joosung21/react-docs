import React, { useState, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { TextField } from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import { ko } from 'date-fns/esm/locale'
import CodeView from 'utils/CodeView'

interface Props {
  value?: string
  onClick?: () => void
}

const codeString1 = `import { ko } from "date-fns/esm/locale"

<DatePicker
  selected={startDate}
  locale={ko}
  dateFormat="yyyy년 M월 d일"
  minDate={new Date('2023-11-01')}
  maxDate={new Date()}
  onChange={(date) => date && setStartDate(date)}
  customInput={<CustomInput />}
/>`

const DateControl = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date())

  const CustomInput = forwardRef<HTMLInputElement, Props>(({ value, onClick }, ref) => (
    <TextField
      id="date"
      label="Date Picker"
      value={value}
      onClick={onClick}
      ref={ref}
      InputProps={{
        endAdornment: <EventIcon />,
      }}
    />
  ))
  CustomInput.displayName = 'CustomInput'

  return (
    <div className="limit-width">
      <div className="page-title">Date Control</div>

      <div className="mb-8">
        <DatePicker
          selected={startDate}
          locale={ko}
          dateFormat="yyyy년 M월 d일"
          minDate={new Date('2022-11-01')}
          maxDate={new Date()}
          onChange={(date) => date && setStartDate(date)}
          customInput={<CustomInput />}
        />
      </div>

      <div>React Datepicker</div>
      <a href="https://reactdatepicker.com/" target="_blank" rel="noreferrer" className="text-link">
        https://reactdatepicker.com/
      </a>

      <div className="mt-4">커스텀 설정 참고</div>
      <a
        href="https://velog.io/@remon/React-React-Datepicker-%EB%8B%AC%EB%A0%A5-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%95%98%EA%B8%B0-CSS-%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        Locale, dateFormat
      </a>

      <CodeView language="bash" code="npm install date-fns --save" />

      <CodeView code={codeString1} />

      <div className="mt-4">커스텀 스타일 참고</div>
      <a
        href="https://doooodle932.tistory.com/150"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        https://doooodle932.tistory.com/150
      </a>
    </div>
  )
}

export default DateControl
