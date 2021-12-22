<!--suppress HtmlDeprecatedAttribute -->
<div align="center">
    <h1>Main Front</h1>
</div>

<div align="center">
    <a href="https://github.com/NinjaEnterprise/MainFront/blob/master/docs/translations/README_RU.md">
        <img alt="russian-version" src="https://raw.githubusercontent.com/NinjaEnterprise/MainFront/master/docs/assets/languages/russian.png"/>
    </a>
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
   <ol>
      <li>Create a folder: <code>mkdir GitProjects</code> (the folder name can be anything, but you will need to 
      continue to use only it);</li>
      <li>Go to the folder: <code>cd GitProjects</code>;</li>
      <li>Cloning a repository: <code>git clone https://github.com/NinjaEnterprise/MainFront.git</code>;</li>
      <li>Go to the folder: <code>cd MainFront</code>.</li>
      <li>Complete.</li>
   </ol>
</details>

<details style="margin-left: 40px">	
   <summary><b>Run code</b></summary>
   <ol>
      <li>Install all dependencies: `npm install`;</li>
      <li>Started application: `npm run serve`;</li>
      <li>Vue application will start here — `http://localhost:3000` (_3000 — default port_).</li>
   </ol>
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

**[MIT](https://github.com/NinjaEnterprise/MainFront/blob/master/LICENSE)**

_Copyright ©2021, Vladislav [[Bangerok]](https://github.com/Bangerok) Kuznetsov_