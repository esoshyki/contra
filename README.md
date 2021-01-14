# Как все тут работает.

## React-game-engine

Итак. Главное, с чего все начинается - это движок.

![engine](https://sun9-21.userapi.com/impg/hAAypEz5t-4PVtOsF5m5MlDcBYpQod_n-Eq9cQ/wNVqE_8r-io.jpg?size=423x105&quality=96&proxy=1&sign=4f36fd69b2425f0eed9b5408ee789f04&type=album)

Основное, что делает движок, это запускает **game-loop** (игровой цикл).
Как видно на скриншоте, мы передаем движку объект **entities** (сущности) и **systems** (контроллеры поведения сущностей в игровом цикле )

### Entities

Сущности у нас в проекте, бывают трех типов.

1. Сущности контроллеры, 