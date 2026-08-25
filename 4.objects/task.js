function Student(name, gender, age) { // 1. Создаём функцию-конструктор для объекта "Студент"
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []; // добавляем пустой массив для оценок помимо свойств из аргументов функции
}
// создаём экземпляры объекта (студентов)
let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);
let student3 = new Student("Яков", "мужской", 22);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName; // 2. Создаём доступный для всех экземпляров student метод, который будет устанавливать поле subject
}

Student.prototype.addMarks = function (...marksToAdd) {
    if (this.hasOwnProperty('marks')) { // 3. Проверка существования свойства marks перед добавлением нескольких оценок
        this.marks.push(...marksToAdd); // если свойство существует, добавляем массив оценок
    }
}

Student.prototype.getAverage = function () {
    if (this.hasOwnProperty('marks') && this.marks.length > 0) { // 4. Проверка существования свойства marks и длины массива оценок
        return parseFloat(((this.marks.reduce((acc, mark) => acc + mark, 0)) / this.marks.length).toFixed(2)); // возвращаем округлённую среднюю оценку
    } else {
        return 0; // иначе (свойства marks нет или массив оценок пустой) возвращаем 0
    }
}

Student.prototype.exclude = function (reason) {
    // 5. Метод исключения студента удаляет его свойства предметов и оценок
    delete this.subject;
    delete this.marks;

    this.excluded = reason; // свойству "исключён" присваивается значение аргумента причины исключения
}