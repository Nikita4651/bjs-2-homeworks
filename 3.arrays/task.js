function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) { // проверка соответствия длины сравниваемых массивов
        return false;
    }
    // возвращает результат сравнения, равен ли каждый элемент массива 1 элементу массива 2 соответствующего индекса
    return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    const filteredByGender = users.filter(user => user.gender === gender);

    if (filteredByGender.length === 0) { // проверяем, не пустой ли массив отфильтрованных пользователей
        return 0; // если пустой, возвращаем 0
    }

    const ages = filteredByGender.map(user => user.age); // из массива отфильрованных по полу создаём массив возрастов

    // складываем все возраста (значения массива ages) и делим на количество пользователей (длинну массива отфильтрованных по полу)
    const averageAge = ages.reduce((sum, age) => sum + age, 0) / filteredByGender.length;

    return averageAge; // возвращаем средний возвраст отфильтрованных по полу пользователей
}