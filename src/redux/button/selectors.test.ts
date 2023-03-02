import  {getButtonData, getButtonStatus} from './selectors'
import {ButtonState} from "./slice";

let mock = {
    button: <ButtonState>{
        status: 'idle',
        data: {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
    }

}

describe('Тестирование селекторов', () => {

    test('проверка данных', () => {
        const result = getButtonData(mock)
       expect(result).toBe(mock.button.data)
    })

    test('проверка сатуса', () => {
        const result = getButtonStatus(mock)
        expect(result).toBe('idle')
    })

})
