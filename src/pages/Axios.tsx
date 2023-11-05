import React, { useState } from 'react'
import axios from 'axios'
import LoadingButton from '@mui/lab/LoadingButton'

const Axios = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = () => {
    setLoading(true)
    setData([])
    axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then((res) => {
      setData(res.data)
      setLoading(false)
    })
  }

  return (
    <div>
      <div className="page-title">Axios</div>

      <div>세팅참고</div>
      <a
        href="https://initstory.tistory.com/61#1.%20Axios%20Install%20%ED%95%98%EA%B8%B0-1"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        React React에서 Axios 사용법
      </a>

      <br />

      <div className="code">npm install axios</div>

      <br />

      <div>테스트 데이터</div>
      <a
        href="https://jsonplaceholder.typicode.com/"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        JSONPlaceholder
      </a>

      <br />
      <br />

      <LoadingButton
        variant="contained"
        color="primary"
        onClick={getData}
        loading={loading}
        style={{ position: 'relative' }}
      >
        Fetch Test
      </LoadingButton>
      {/* <Button variant="contained" color="primary" onClick={getData}>
        Fetch
      </Button> */}
      {data.length > 0 && (
        <div className="code">
          {data.map((item: { id: number; title: string }) => (
            <div key={item.id}>
              id: {item.id}, title: {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Axios
