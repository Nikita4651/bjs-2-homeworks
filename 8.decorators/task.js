
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = md5(JSON.stringify(args));

        let objectInCache = cache.find(item => item.hash === hash);
        if (objectInCache) {  // если элемент найде
            console.log("Из кеша: " + objectInCache.value);
            return "Из кеша: " + objectInCache.value;
        }

        let result = func(...args);

        cache.push({ hash: hash, value: result });

        if (cache.length > 5) {
            cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }

    return wrapper;
}

function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;

    function wrapper(...args) {
        if (!timeoutId) {
            func.call(this, ...args);
            wrapper.count++;
        }
        if (timeoutId) {
            console.log("Текущий таймаут удалён");
            clearTimeout(timeoutId);
        }

        console.log("Устанавливаем новый таймаут");
        timeoutId = setTimeout(() => {
            func.call(this, ...args);
            wrapper.count++;
        }, delay);

        wrapper.allCount++;
    }

    return wrapper;
}