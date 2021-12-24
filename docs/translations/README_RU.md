<!--suppress HtmlDeprecatedAttribute -->
<div align="center">
    <h1>Main Front</h1>
</div>

<div align="center">
    <a href="https://github.com/NinjaEnterprise/SearchLibrary/blob/master/docs/translations/README_RU.md">
        <img alt="russian-version" src="https://raw.githubusercontent.com/NinjaEnterprise/SearchLibrary/master/assets/languages/russian.png"/>
    </a>
</div>

<div align="center">
    <img src="https://img.shields.io/github/last-commit/NinjaEnterprise/MainFront" height="25" alt="last-commit" />
    <img src="https://tokei.rs/b1/github/NinjaEnterprise/MainFront?category=code" height="25" alt="code-lines" />
    <img src="https://sonarcloud.io/api/project_badges/measure?project=NinjaEnterprise_MainFront&metric=coverage" height="25" alt="sonar-cloud-bugs" />
    <img src="https://github.com/NinjaEnterprise/MainFront/actions/workflows/check-style.yml/badge.svg" height="25" alt="checking-style" />
    <img src="https://github.com/NinjaEnterprise/MainFront/actions/workflows/sonar.yml/badge.svg" height="25" alt="checking-sonar" />
    <img src="https://github.com/NinjaEnterprise/MainFront/actions/workflows/build.yml/badge.svg" height="25" alt="build" />
</div>

### 📖 Описание
___

Клиентский интерфейс. Пока что используется для изучения технологий.

### ❗ Требования
___

- **NodeJS (стабильная)**: v14.17.6;

### 📋 Инструкция по запуску
___

*Все команды выполняются в консоли. Для всех действий можно использовать IDE (например: Intellij Idea), но кто это знает
— тот так и будет делать и инструкция ему не нужна.*
<details style="margin-left: 40px">	
<summary><b>Клонирование репозитория</b></summary>

1. Создаем папку: `mkdir GitProjects` (имя папки может быть любым, но вам нужно будет продолжать использовать только
   его);
2. Переходим в папку: `cd GitProjects`;
3. Клонируем репозиторий: `git clone https://github.com/NinjaEnterprise/MainFront.git`;
4. Переходим в созданную папку: `cd MainFront`;
5. Выполнено.
</details>

<details style="margin-left: 40px">	
<summary><b>Запуск проекта</b></summary>

1. Установить все зависимости: `npm install`;
2. Запустить: `npm run serve`;
3. Приложение Vue запустится и будет доступно по адресу - `http://localhost:3000` (_3000 — стандартный порт_).
</details>

### ⚙️Включает функциональность
___

- **Авторизация**: классическая (_email/password_) и google;
- **Регистрация**: классическая и google;
- **Верификация**:
    - подтверждение электронной почты через токен верификации;
    - повторный запрос токена верификации.
- **Кастомизация приложения**:
    - язык;
    - темная/светлая тема;
    - показать/скрыть боковую панель.
- Переход по нескольким страницам.

### 🔨 Стек технологий
___

- **Vue 2** (_планируется переход на Vue 3_);
- **Vuex**: хранилище;
- **Vue Router**: маршрутизация страниц;
- **Vuetify 2** (_планируется переход на Vuetify 3_): клиентский интерфейс, использующий компоненты и макеты;
- **Vue i18n**: локализация;
- **Axios**: клиент-серверная связь;
- **Vue CLI**: запуск приложения.

### 🎫 Лицензия
___

**[MIT](https://github.com/NinjaEnterprise/MainFront/blob/master/LICENSE)**

_Copyright ©2021, Vladislav [[Bangerok]](https://github.com/Bangerok) Kuznetsov_