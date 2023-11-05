import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from 'app/store'
import { fetchCount } from './counterAPI'

export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
}

// 아래의 함수는 thunk라고 불리며, 비동기 로직을 수행할 수 있게 해줍니다.
// 일반 액션처럼 디스패치할 수 있습니다: dispatch(incrementAsync(10)). 이것은
// dispatch 함수를 첫 번째 인자로 가지고 thunk를 호출합니다. 그 후 비동기 코드가 실행될 수 있고,
// 다른 액션들이 디스패치될 수 있습니다. Thunks는 일반적으로 비동기 요청을 만들기 위해 사용됩니다.
export const incrementAsync = createAsyncThunk('counter/fetchCount', async (amount: number) => {
  const response = await fetchCount(amount)
  // 우리가 반환하는 값은 fulfilled 액션의 payload가 됩니다.
  return response.data
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // reducers 필드를 통해 리듀서를 정의하고 관련 액션을 생성할 수 있습니다.
  reducers: {
    increment: state => {
      // Redux Toolkit을 사용하면 리듀서 내에서 "변경" 로직을 작성할 수 있습니다. 그것은
      // 실제로 상태를 변경하지 않습니다. 왜냐하면 Immer 라이브러리를 사용하기 때문인데,
      // 이 라이브러리는 "임시 상태"에 대한 변경을 감지하고, 그 변경사항을 기반으로
      // 새로운 불변 상태를 생성하기 때문입니다.
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    // `action.payload`의 내용을 선언하기 위해 PayloadAction 타입을 사용하세요.
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  // `extraReducers` 필드를 사용하면 슬라이스가 다른 곳에서 정의된 액션들을 처리할 수 있습니다,
  // 여기에는 createAsyncThunk에 의해 생성된 액션들이나 다른 슬라이스의 액션들도 포함됩니다.
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, state => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value += action.payload
      })
      .addCase(incrementAsync.rejected, state => {
        state.status = 'failed'
      })
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// 아래의 함수는 선택자(selector)라고 불리며, 상태로부터 값을 선택하는 데에 사용됩니다.
// 선택자는 슬라이스 파일 내에서 정의되는 대신에, 사용되는 곳에 인라인으로도 정의될 수 있습니다.
// 예를 들어: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value

// 우리는 수동으로 thunk를 작성할 수도 있으며, 이는 동기 및 비동기 로직을 모두 포함할 수 있습니다.
// 현재 상태에 기반하여 조건부로 액션을 디스패치하는 예시입니다.
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState())
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount))
    }
  }

export default counterSlice.reducer
