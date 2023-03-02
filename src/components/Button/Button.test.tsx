import {fireEvent, render, screen} from "@testing-library/react";
import {Button} from './Button'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


describe('Текстирование кнопки', () => {

    const initialState = {button: {data: {}, status: 'idle'}}
    const mockStore = configureStore()
    let store,wrapper

    test('Компонент рендерится', () => {
        store = mockStore(initialState)
        render( <Provider store={store}><Button label='Test'/></Provider>)
        const button = screen.getByTestId('button')
        expect(button).toBeInTheDocument()
    })
})
