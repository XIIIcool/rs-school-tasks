# rs-school-tasks by @XIIIcool

##Параметры для работы программы caesar-cipher-cli
```
-a, --actions обязательный параметр, варианты: encode закодировать и decode разкодировать
-s, --shift обязательный параметр, целое число
-i, --input путь к файлу, либо если не задать параметр то будет возможность набрать текст 
-o, --output путь к файлу, либо если не задать параметр то выходные данные будут выведены в консоли
```

### Запуск приложения
Перед запуском приложение установите пакеты - `npm install`

Варианты запуска:
`node caesar-cipher-cli caesar-cipher-cli-app.js` - если запускаете из корня проекта
`node caesar-cipher-cli-app.js` - если запускаете из папки с программой

далее примеры показаны с запуском из папки с программой

1. Запускаем кодирование/декодирование из файла с записью в файла \
`node caesar-cipher-cli-app.js --a encode -s 1 -i "input.txt" -o "output.txt"` \
`node caesar-cipher-cli-app.js --a decode -s 1 -i "input.txt" -o "output.txt"`
2. Запускаем кодирование/декодирование из командной строки с записью в файла \
`node caesar-cipher-cli-app.js --a encode -s 1 -o "output.txt"` \
`node caesar-cipher-cli-app.js --a decode -s 1 -o "output.txt"`
3. Запускаем кодирование/декодирование из командной строки с записью в командную строку \
`node caesar-cipher-cli-app.js --a encode -s 1 ` \
`node caesar-cipher-cli-app.js --a decode -s 1 `
4. Запускаем кодирование/декодирование из файла в командную строку \
`node caesar-cipher-cli-app.js --a encode -s 1 -i "input.txt"` \
`node caesar-cipher-cli-app.js --a decode -s 1 -i "input.txt"`
