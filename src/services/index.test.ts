import {getData} from './index'

const mock = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

test('Проверка возвращаемых данный с бекенда', async () => {
    const res = await getData()
    expect(res).toEqual(mock)
})
