class AlarmClock {
    constructor() { // 1. конструктор объектов будильника
        this.alarmCollection = []; // свойство для хранения коллекции звонков
        this.intervalId = null; // свойство для хранения id таймера
    }

    addClock(time, callback) { // 2. метод добавления нового звонка в коллекцию звонков
        // проверка, переданы ли функции аргументы времени и коллбека; дополнение: добавлена проверка на null
        if (time === undefined || time === null || callback === undefined || callback === null) {
            throw new Error('Отсутствуют обязательные аргументы'); // если хотя бы один из аргументов не передан, выбрасывает ошибку
        }

        if (this.alarmCollection.some(alarm => alarm.time === time)) { // если свойство time любого элемента alarm коллекции звонков равно аргументу time
            console.warn('Уже присутствует звонок на это же время'); // печатает в консоль предупреждение
        }

        this.alarmCollection.push({ //добавление в коллекцию звонков объекта с указанными свойствами
            time,
            callback,
            canCall: true
        });
    }

    removeClock(time) { // 3. метод удаления звонков по определённому времени
        // фильтрует коллекцию звонков, создавая массив из звонков, время которых не равно переданному аргументу
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() { // 4. метод возвращает текущее время в строковом формате HH:MM
        const now = new Date(); // создаём константу, в которой сохраняем полную текущую дату
        // из полной даты берём часы, приводим в строковое значение, в начало строки ставим "0", если получилось меньше 2-х символов
        const hours = now.getHours().toString().padStart(2, '0');
        // из полной текущей даты берём минуты, приводим в строковое значение, в начало строки ставим "0", если получилось меньше 2-х символов
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`; // возвращает текущее время в строковом формате HH:MM
    }

    start() { // 5. метод запуска будильника
        if (this.intervalId !== null) { // если свойство intervalId будильника имеет значение
            return; // завершает метод
        }

        this.intervalId = setInterval(() => { // иначе устанавливает интервал, сохраняющийся в свойстве intervalId
            this.alarmCollection.forEach(alarm => { // перебирает каждый звонок в коллекции
                // и проверяет, совпадает ли свойство time каждого звонка с текущим временем и возможностью звонка
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                    alarm.canCall = false; // при истинном условии присваивает false свойству canCall
                    alarm.callback(); // и вызывает свойство коллбек звонка
                }
            });
        }, 1000); // выполняется каждую секунду
    }

    stop() { // 6. метод останавливает выполнение интервала будильника
        clearInterval(this.intervalId); // вызов функции остановки интервала
        this.intervalId = null; // сбрасывает значение свойства
    }

    resetAllCalls() { // 7. метод сбрасывает все звонки
        this.alarmCollection.forEach(alarm => { // перебираются все звонки в коллекции
            alarm.canCall = true; // каждому звонку присваивает true в свойство canCall
        });
    }

    clearAlarms() { // 8. метод удаляет все звонки
        this.stop(); // вызывает метод остановки интервала
        this.alarmCollection = []; // опустошает коллекцию звонков
    }
}