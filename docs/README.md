<!--suppress HtmlDeprecatedAttribute -->
<div align="center">
    <h1>Основной интерфейс проекта MagicMultiRepo</h1>
</div>

<div align="center">
    <a href="https://github.com/HogwartsSchoolOfMagic/MainFront/blob/master/docs/translations/README_EN.md">
        <img alt="russian-version" src="https://raw.githubusercontent.com/HogwartsSchoolOfMagic/MainFront/master/docs/assets/languages/english.png"/>
    </a>
</div>

<div align="center">
    <img src="https://img.shields.io/github/last-commit/HogwartsSchoolOfMagic/MainFront" height="25" alt="last-commit" />
    <a href="https://wakatime.com/@SmithyVL"><img src="https://wakatime.com/badge/github/HogwartsSchoolOfMagic/MainFront.svg" height="25" alt="time-with-code" /></a>
    <a href="https://sonarcloud.io/code?id=HogwartsSchoolOfMagic_MainFront"><img src="https://sonarcloud.io/api/project_badges/measure?project=HogwartsSchoolOfMagic_MainFront&metric=ncloc" height="25" alt="sonar-code-lines" /></a>
    <a href="https://sonarcloud.io/summary/new_code?id=HogwartsSchoolOfMagic_MainFront"><img src="https://sonarcloud.io/api/project_badges/measure?project=HogwartsSchoolOfMagic_MainFront&metric=alert_status" height="25" alt="sonar-quality-gate-status" /></a>
    <a href="https://github.com/HogwartsSchoolOfMagic/MainFront/actions/workflows/ci.yml"><img src="https://github.com/HogwartsSchoolOfMagic/MainFront/actions/workflows/ci.yml/badge.svg" height="25" alt="ci" /></a>
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
   <ol>
      <li>Создаем папку: <code>mkdir GitProjects</code> (имя папки может быть любым, но вам нужно будет продолжать использовать только
   его);</li>
      <li>Переходим в папку: <code>cd GitProjects</code>;</li>
      <li>Клонируем репозиторий: <code>git clone https://github.com/HogwartsSchoolOfMagic/MainFront.git</code>;</li>
      <li>Переходим в созданную папку: <code>cd MainFront</code>.</li>
      <li>Выполнено.</li>
   </ol>
</details>

<details style="margin-left: 40px">	
   <summary><b>Запуск проекта</b></summary>
   <ol>
      <li>Установить все зависимости: `npm install`;</li>
      <li>Запустить: `npm run serve`;</li>
      <li>Приложение Vue запустится и будет доступно по адресу — `http://localhost:3000` (_3000 — стандартный порт_).</li>
   </ol>
</details>

### ⚙️ Включает функциональность
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

**[Apache License Version 2.0](https://github.com/HogwartsSchoolOfMagic/MainFront/blob/master/LICENSE)**

_Copyright ©2022, Владислав [[SmithyVL]](https://github.com/SmithyVL) Кузнецов_