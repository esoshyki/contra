# Как все тут работает.

## React-game-engine

Итак. Главное, с чего все начинается - это движок.

![engine](https://sun9-21.userapi.com/impg/hAAypEz5t-4PVtOsF5m5MlDcBYpQod_n-Eq9cQ/wNVqE_8r-io.jpg?size=423x105&quality=96&proxy=1&sign=4f36fd69b2425f0eed9b5408ee789f04&type=album)

Основное, что делает движок, это запускает **game-loop** (игровой цикл).
Как видно на скриншоте, мы передаем движку объект **entities** (сущности) и **systems** (контроллеры поведения сущностей в игровом цикле )

### Entities

Сущности у нас в проекте, бывают трех типов.

1. **Сущности контроллеры**. Это объекты, которые не учавствуют в игре непосредственно - это физический движок matter-js, управление, фабрика добавления и удаления сущностей.
  1. **physics**
  
  ![phyics](https://sun9-26.userapi.com/impg/BzUkWf9bzVWpHFYlF57NynBpmpT2K44are-vYQ/xN9jqAGNVxc.jpg?size=272x111&quality=96&proxy=1&sign=3ae05ab871e6167ccb296d916a7a86ba&type=album)
  
  Тут находятся Matter.Engine и Matter.World.
  **matter-js** собственно нам нужен для управления физикой **интерактивных сущностей**, т. е. тех, которые могут взаимодействовать друг с другом.
  
  2. **controls** (/game/entities/Controls.js)
  
  ![contols](https://sun9-7.userapi.com/impg/flT5ZGU53d5LkrBr9Gr2AdVXY3TuYO9CXfDQlg/7u7ClsGhLmk.jpg?size=216x221&quality=96&proxy=1&sign=0662c334dbffe442c167b9a9a98d64e9&type=album),
  
  Тут можно поменять управление, и регистрировать нажатия и отпускания клавин. Но об этом дальше.
  
  3. **gameFactory** (далее **Фабрика**) (/game/levels/Factory.js)
  
  ![gameFactory](https://sun9-48.userapi.com/impg/qS5ultELwKWSGwS6qJvyVg-W8EdDcuxsIdwcQw/Lu-rX6_wD-g.jpg?size=238x183&quality=96&proxy=1&sign=a41ed5afdaafca14c04f6f579913a393&type=album)
  
  Я не совсем там создал этот файл. По идее он тоже должен быть в папке entities. Но я сделал в папке levels, что тоже в принципе логично.
  **Фабрика** - это класс, который служит для добавления сущностей в движок react'а. То есть там следует прописывать все методы для этого.
   К примеру, 
   
   ![addPlayer](https://sun9-29.userapi.com/impg/y0GVLJlRyAFm6KMlvYaS9TV3-y77j0203Zkhlw/OLiq9NBlFRk.jpg?size=305x116&quality=96&proxy=1&sign=3405ae9e1700761a781bc30a8b68bd87&type=album);
   
   Тут создается сущность - **Player**. Добавляется в **entities** движка **react-game-engine**, и также его **body** добавляется в мир **matter-js**
   В фабрике, также, создается мир (**setupWorld**) и конкретный уровень (**setupLevel**).
   
2. **Интерактивные сущности**. У меня они называются **Static** и создаются с помощью метода **Фабрики** **collectStatic**. (хотя наверное нужно было создать отдельный класс в /entities/Static. Если вы все нормально поймете, то я оставлю эту задачу на вас.

  game/levels/Factory.js 
  
  ![collectStatic](https://sun9-36.userapi.com/impg/-0NlLLgVZuB9nXqua9-aplijmsol8xzZLnbHpw/YUX5OxjLYD8.jpg?size=628x338&quality=96&proxy=1&sign=8a3871074c7530ca116f3dfed15c6055&type=album)

  У интерактивных сущностей есть два главных параметра.
  **body** = это объект **Matter.js**, который будет подчиняться физике мира **matter-js** (падать, двигаться, взаимодействовать с другими объектами и т.д.)
  **renderer** - React компонент, у которого пропсами будет сама сущность. И при изменении каких то свойств, реакт компонент обновиться.
  Для **renderer**'ов создана папка **Renderers**
  
  
3. **Сущности окружения** (Background). Сущности, которые находятся на экране, но не взаимодействуют с интерактивными сущностями и друг с другом.
  ОНи создаются в фабрике методом **collectBackgrounds**
  
  ![collectBackground](https://sun9-32.userapi.com/impg/JfoXjVz7ER2LveMmFm390ST0-YPs4SPda8qmiw/FA4Nom4eA7U.jpg?size=602x281&quality=96&proxy=1&sign=ed6dd985e806de717e08b6ae8691724a&type=album)
  
  Для них, также обязятельным свойством будет **renderer**.
  Обратите внимание, что у них есть также свойство **perspective** (в общем понимании это расстояние в метрах от экрана в глубь). Оно используется для имитации перпективы
  при движении камеры.
  
 ### Systems
 
 Как мы выяснили ранее в **<ReactEngine />** есть свойство **systems**, это массив с функциями, которые у нас лежат в папке /game/systems/, 
 которые будут выполнятся по очереди, кадлый игровой цикл.
 
 Каждая функция принимает объект с сущностями **entities**, и свойство объекта window **screen**.
 **System-функция должна ОБЯЗАТЕЛЬНО ВОЗВРАЩАТЬ entities**. (это знаменитое **pass by reference** из собеседований).
 Суть довольна простая. Каждый цикл, мы берем объкет **entities**, манипулируем им, что-то в нем изменяем, или не изменяем, и возвращаем назад движку.
 Если в в **entities** изменились какие то свойства, то нашие renderer'ы подписанные на эти пропсы - обновились!. 
 Вуалая. Все довольно просто.
 
 ### Управление.
 
 С управлением все довольно непросто, поскольку легко регистрировать нажания и отпускания клавиш. В объекте **screen** есть свойство **input** и если нажимаются какие-то клавиши, в **input.payload** пушаться эти события. Когда нажимается одна клавиша - проблем нет. Но если нажимаются две, три или пять клавиш одновременно, происходит какая-то дичь, поэтому не буду сильно вдаватсья в потробности, но я в итоге дошел до того, что сделал так (не знаю верно ли это все, но хз, я в первый раз такое делаю):
 
 Я пришел к решению, что буду регистрировать порядок нажатия клавиш.
 game/entities/Controls.js
 В сущности **contols** есть свойство **action** и методы **keydown** и **keyup**. 
 В **/systems/Contols/keydown** и  **/systems/Contols/keydown** я регистрирую коды событий и передаю в методы сущности **controls**.
 Если код клавиши уже есть в **action** соотевественно ничего не происходит, если нет, то код клавиши пушится в массив.
 При **keyup** соотвественно коды удаляются и action.
 Таким образом я получаю последовательность нажатия клавиш, и исходя из этого каждый цикл в **/systems/Physics.js** смотрю этот массив, и анализирую поведение персонажа.
 
 ![controls](https://sun9-51.userapi.com/impg/pb14fBne53rhItmGlDwkaDiOZ4SLnRioC0bnfA/_T2902PsTaw.jpg?size=678x532&quality=96&proxy=1&sign=83b664b3522b2fafc2f1a197f899c6f0&type=album)
 
 Думаю, в этот момент, вы подумали, зачем такие сложности, но если вы попробуете сделать удобное управление, то поймете, почему я так заморочился.
 Может я позже пересмотрю все и сделаю как то проще. Но пока так.
 
 ### Анимации.
 Суть анимации в том, что у нашего react-компонента есть свой ```<div />```, в котором вы задаем стили. У меня на сущностях обычно большой бэкграунд со всеми анимациями сразу. И чтобы анимировать персонажа, нужно просто поменять **backgorund-position**.
 
 Для **background** сущностей я сделал объект с функциями для создания бэкраунд-сущностей с указанным **background-position**.
 
 **game/levels/background/**
 
 ![backgorundImage](https://sun9-45.userapi.com/impg/_xCsVKWJ-UVMg__nO2_aYIFXbgP_R0J1IXok4w/zPjGMccigtA.jpg?size=556x683&quality=96&proxy=1&sign=9d2cf3b9ace1e1cefa5b79332cb0b4da&type=album)
 
 Также в этой папочке  есть файл **test.html**, куда нужно импортировать рисунок со спрайтами и подпирать через F12 **width и height** элемента и его **bacgkround-position**
 
 В случае с анимациями. 
 
 /game/entities/Player.js 
 
 Анимации выглядат вот так:
 
 ![animation](https://sun9-65.userapi.com/impg/79szINGRpcFl6s00tc53lQnR-ANOhgeGa2Pkog/DSF-u-MgkkA.jpg?size=321x307&quality=96&proxy=1&sign=025671e3c8abc28e21f079cf430ad9ff&type=album)
 
 Каждый кадр содержит информацию, о ширине, высоте, background-position и продолжительности конкретного кадра.
 
 Когда мой песронаж двигается, я запускаю метод **moveRight** (или **moveLeft**)
 
 ![moveRight](https://sun9-64.userapi.com/impg/53X6qceozMNr_N1jQLTSbXg6hWjVRGJjPCwC1g/4Ax86z5ATbE.jpg?size=371x107&quality=96&proxy=1&sign=41fc04715b6d10275a79348437249b47&type=album)
 
 И каждый цикл в **/game/systems/Physics.js** в конце я обязательно запускаю **player.animate()**;
 
 ![player.animate()](https://sun9-23.userapi.com/impg/V5VTXY_BEgLGdsYyxNtf5Eeto5eamPjVnqOu3A/5d66_CSydqc.jpg?size=335x140&quality=96&proxy=1&sign=40fde7c797643ace4b4e03b0f9730642&type=album);
 
 Функция **player.animate** довольна сложная, сами посмотрите, но суть в том, что мы не ориентируемся на время.
 
 ![counters](https://sun9-62.userapi.com/impg/W0IBdqnAKjZDRlCIH_oGWpq8mZLUI6MJbHy8Ig/bLRtc9Xe8Tg.jpg?size=158x158&quality=96&proxy=1&sign=423f642bde36017a19b9fda524cd0a10&type=album);
 
  Всякие setIvterval'ы как я понял для этого не сильно подходят.
  Мы ориентируемся именно на игровоый цикл!  У нас есть специальны счетчики анимации. Также как и с бэкгрундами, я создал файл **test.html** для создания анимаций.
  Туда нужно просто поставить свою картинку-спрайт. Он находится в **src/assets/**.
  
  
 ### ИТОГО
 
 У нас с вами стоит задача по сути такая. 
 Сделать сущности. Это классы. Прописать все методы которые нужны. 
 Например **enemy.walk**, или **enemy.die**.
 Подобрать анимации.
 Написать уровни по примеру первого.
 Сделать менюшку.
 Сделать **healthbar**
 
 Механизм простой. Создаем сущность => добавляем ее в движок => Каждый цикл манипулируем ей.
 
 Тут целая куча тонкостей и всяких глюков. Но поэтому мы учися. Это очень крутой и полезный проект для опыта.
 
 
 
 
 


  
  
  