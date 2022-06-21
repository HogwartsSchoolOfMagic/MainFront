<!--suppress HtmlDeprecatedAttribute -->
<div align="center">
    <h1>The main interface of the MagicMultiRepo project</h1>
</div>

<div align="center">
    <a href="https://github.com/HogwartsSchoolOfMagic/MainFront/blob/master/docs/README.md">
        <img alt="russian-version" src="https://raw.githubusercontent.com/HogwartsSchoolOfMagic/MainFront/master/docs/assets/languages/russian.png"/>
    </a>
</div>

<div align="center">
    <img src="https://img.shields.io/github/last-commit/HogwartsSchoolOfMagic/MainFront" height="25" alt="last-commit" />
    <a href="https://wakatime.com/@SmithyVL"><img src="https://wakatime.com/badge/github/HogwartsSchoolOfMagic/MainFront.svg" height="25" alt="time-with-code" /></a>
    <a href="https://sonarcloud.io/code?id=HogwartsSchoolOfMagic_MainFront"><img src="https://sonarcloud.io/api/project_badges/measure?project=HogwartsSchoolOfMagic_MainFront&metric=ncloc" height="25" alt="sonar-code-lines" /></a>
    <a href="https://sonarcloud.io/summary/new_code?id=HogwartsSchoolOfMagic_MainFront"><img src="https://sonarcloud.io/api/project_badges/measure?project=HogwartsSchoolOfMagic_MainFront&metric=alert_status" height="25" alt="sonar-quality-gate-status" /></a>
    <a href="https://github.com/HogwartsSchoolOfMagic/MainFront/actions/workflows/ci.yml"><img src="https://github.com/HogwartsSchoolOfMagic/MainFront/actions/workflows/ci.yml/badge.svg" height="25" alt="ci" /></a>
</div>

### 📖 Description
___

Client interface. For now, for the study of technology.

### ❗ Requirements
___

- **NodeJS (stable)**: v14.17.6.

### 📋 Start-up instructions
___

*All commands are executed in the console. For all actions, you can use the IDE (for example: Intellij Idea), but who
knows about it — and will do it, the instruction is not needed.*
<details style="margin-left: 40px">	
<summary><b>Clone Repository</b></summary>

1. Create a folder: `mkdir GitProjects` (the folder name can be anything, but you will need to
   continue to use only it);
2. Go to the folder: `cd GitProjects`;
3. Cloning a repository: `git clone https://github.com/HogwartsSchoolOfMagic/MainFront.git`;
4. Go to the folder: `cd MainFront`;
5. Complete.
</details>

<details style="margin-left: 40px">	
<summary><b>Run code</b></summary>

1. Install all dependencies: `npm install`;
2. Started application: `npm run serve`;
3. Vue application will start here - `http://localhost:3000` (_3000 — default port_).
</details>

### ⚙️ Includes functionality
___

- **Authorization**: classic (_email/password_) and google;
- **Registration**: classic and google;
- **Verification**:
  - email confirmation via verification token;
  - re-request verification token.
- **Customizing the application**:
  - language;
  - dark/light theme;
  - show/hide sidebar.
- Jump across multiple pages.

### 🔨 Technology stack
___

- **Vue 2** (_followed by switching to Vue 3_);
- **Vuex**: storage;
- **Vue Router**: routing pages;
- **Vuetify 2** (_followed by switching to Vuetify 3_): client interface using components and layout;
- **Vue i18n**: localization;
- **Axios**: client-server communication;
- **Vue CLI**: launching the application.

### 🎫 License
___

**[Apache License Version 2.0](https://github.com/HogwartsSchoolOfMagic/MainFront/blob/master/LICENSE)**

_Copyright ©2022, Vladislav [[SmithyVL]](https://github.com/SmithyVL) Kuznetsov_