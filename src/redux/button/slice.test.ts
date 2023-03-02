import {buttonReducer, buttonActions} from './slice'

describe('Тестирование стейта', () => {

  test('Дефолтный стейт', () => {
    const result = buttonReducer(undefined, { type: ''})
    expect(result).toEqual({data: {}, status: 'idle'})
  })
})
