# AgendaFácil

Aplicação mobile de agendamento de serviços desenvolvida com **React Native**, **Expo** e **TypeScript**.

O objetivo do projeto é permitir que o usuário escolha um serviço, selecione um profissional, confirme o atendimento e consulte os agendamentos realizados. Nesta etapa, os dados são armazenados localmente no dispositivo com **AsyncStorage**.

---

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Fluxo da aplicação](#fluxo-da-aplicação)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Versões utilizadas](#versões-utilizadas)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Como clonar e executar](#como-clonar-e-executar)
- [Configuração do Java](#configuração-do-java)
- [Configuração do Android SDK](#configuração-do-android-sdk)
- [Configuração do emulador](#configuração-do-emulador)
- [Primeira execução](#primeira-execução)
- [Persistência local](#persistência-local)
- [Rotas da aplicação](#rotas-da-aplicação)
- [Comandos úteis](#comandos-úteis)
- [Problemas comuns](#problemas-comuns)
- [Git e GitHub](#git-e-github)
- [Próximas etapas](#próximas-etapas)

---

# Sobre o projeto

O **AgendaFácil** é um projeto acadêmico criado para o estudo de desenvolvimento mobile com React Native.

A aplicação simula um sistema de agendamento de serviços. O usuário pode:

1. visualizar os serviços disponíveis;
2. selecionar um serviço;
3. escolher um profissional;
4. visualizar os dados do atendimento;
5. confirmar o agendamento;
6. armazenar o agendamento localmente;
7. consultar os agendamentos realizados.

O projeto foi estruturado para evoluir posteriormente para uma aplicação completa, com backend em **Spring Boot**, documentação com **Swagger** e banco de dados **MySQL**.

---

# Funcionalidades

Atualmente o projeto possui:

- Tela inicial com listagem de serviços;
- Cards com nome, descrição, duração e preço;
- Seleção de serviço;
- Navegação entre telas com Expo Router;
- Tela de profissionais;
- Seleção de profissional;
- Tela de confirmação do agendamento;
- Armazenamento local com AsyncStorage;
- Tela "Meus agendamentos";
- Consulta dos agendamentos salvos;
- Status do agendamento;
- Botão para iniciar um novo agendamento;
- Interface desenvolvida com componentes do React Native;
- Navegação sem cabeçalho padrão do Expo Router.

> **Observação:** nesta versão do protótipo, a data e o horário do agendamento ainda podem estar definidos de forma fixa no código. A seleção dinâmica de data e horário faz parte das próximas etapas.

---

# Fluxo da aplicação

```text
Tela inicial
     ↓
Selecionar serviço
     ↓
Escolher profissional
     ↓
Confirmar agendamento
     ↓
Salvar no AsyncStorage
     ↓
Meus agendamentos
```

---

# Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| React Native | Desenvolvimento da interface mobile |
| Expo | Ambiente e ferramentas para desenvolvimento React Native |
| Expo Router | Navegação entre telas |
| TypeScript | Tipagem e organização do código |
| React | Construção dos componentes |
| AsyncStorage | Persistência local dos agendamentos |
| Node.js | Execução das ferramentas JavaScript |
| npm | Gerenciamento das dependências |
| Android Studio | SDK, emulador e ferramentas Android |
| Gradle | Compilação do projeto Android |
| Git | Controle de versão |
| GitHub | Repositório remoto |

---

# Versões utilizadas

Estrutura utilizada no projeto:

```text
Expo SDK: 57
React Native: 0.86.3
React: 19.2.3
TypeScript: 6.x
Java/JDK: 21
Android compileSdk: 36
Android targetSdk: 36
```

Dependências importantes:

```text
expo
expo-router
react
react-native
react-native-gesture-handler
react-native-reanimated
react-native-safe-area-context
react-native-screens
@react-native-async-storage/async-storage
```

As versões exatas ficam registradas em `package.json` e `package-lock.json`.

---

# Estrutura do projeto

```text
agendamentos/
│
├── assets/
│   └── images/
│
├── scripts/
│
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── profissionais.tsx
│   │   ├── agendamento.tsx
│   │   └── meus-agendamentos.tsx
│   ├── components/
│   ├── constants/
│   ├── data/
│   │   └── professionals.ts
│   ├── hooks/
│   └── types/
│       └── index.ts
│
├── .gitignore
├── app.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Principais arquivos

### `src/app/index.tsx`
Tela inicial. Lista os serviços, exibe preço e duração e inicia o fluxo de agendamento.

### `src/app/profissionais.tsx`
Tela de seleção de profissional.

### `src/app/agendamento.tsx`
Tela de confirmação. Exibe serviço, profissional, preço, data e horário e salva o agendamento.

### `src/app/meus-agendamentos.tsx`
Recupera os agendamentos salvos e apresenta a lista ao usuário.

### `src/app/_layout.tsx`
Configuração principal das rotas com Expo Router.

### `src/data/professionals.ts`
Dados utilizados para representar os profissionais do protótipo.

---

# Pré-requisitos

Antes de executar o projeto, instale:

1. Git;
2. Node.js;
3. npm;
4. JDK 21;
5. Android Studio;
6. Android SDK;
7. Android Emulator;
8. um dispositivo virtual Android.

---

# Como clonar e executar

## 1. Utilize uma pasta curta no Windows

Projetos React Native podem gerar caminhos longos durante a compilação C/C++.

Para evitar:

```text
Filename longer than 260 characters
```

prefira:

```text
C:\dev\agendamentos
```

Evite caminhos muito profundos.

## 2. Clone o repositório

```powershell
cd C:\dev
git clone https://github.com/valdineydev/agendamentos.git
cd agendamentos
```

## 3. Instale as dependências

Para um clone novo:

```powershell
npm ci
```

Também pode ser usado:

```powershell
npm install
```

`npm ci` usa exatamente as versões registradas no `package-lock.json` e é a opção recomendada para um clone limpo.

---

# Configuração do Java

Utilize **JDK 21**.

Distribuição recomendada:

```text
Eclipse Temurin JDK 21
```

Verifique:

```powershell
java -version
```

Exemplo:

```text
openjdk version "21..."
OpenJDK Runtime Environment Temurin...
```

### Importante sobre GraalVM

Durante os testes deste projeto, o GraalVM JDK 21 causou erro no `jlink` durante a compilação Android.

Por isso, recomenda-se usar **Eclipse Temurin JDK 21** com o Gradle.

Exemplo de configuração temporária no PowerShell:

```powershell
$env:JAVA_HOME="C:\Program Files\Eclipse Adoptium\jdk-21.0.12.101-hotspot"
$env:Path="$env:JAVA_HOME\bin;$env:Path"
```

O caminho varia conforme a versão instalada.

Confirme:

```powershell
where.exe java
java -version
```

---

# Configuração do Android SDK

Normalmente o Android SDK fica em:

```text
C:\Users\SEU_USUARIO\AppData\Local\Android\Sdk
```

Configure:

```powershell
$env:ANDROID_HOME="$env:LOCALAPPDATA\Android\Sdk"
$env:Path="$env:ANDROID_HOME\platform-tools;$env:ANDROID_HOME\emulator;$env:Path"
```

Teste:

```powershell
Test-Path $env:ANDROID_HOME
adb --version
```

---

# Configuração do emulador

No Android Studio:

```text
Android Studio
    ↓
Device Manager
    ↓
Create Device
```

Crie um dispositivo virtual e inicie-o.

Depois confira:

```powershell
adb devices
```

Exemplo:

```text
List of devices attached
emulator-5554    device
```

O status deve ser `device`.

---

# Primeira execução

Depois de configurar o ambiente e abrir o emulador:

```powershell
npx expo run:android
```

Na primeira execução, o Expo pode:

1. gerar a pasta Android nativa;
2. executar o Gradle;
3. instalar componentes Android ausentes;
4. compilar o aplicativo;
5. instalar o APK no emulador;
6. iniciar o Metro;
7. abrir a aplicação.

A primeira compilação pode demorar mais.

---

# Por que `android/` não está no Git?

A pasta `android/` é gerada pelo Expo e não precisa ser versionada neste projeto.

Isso evita enviar para o GitHub:

- builds;
- caches;
- arquivos `.cxx`;
- arquivos de máquina local;
- caminhos absolutos;
- arquivos temporários do Gradle.

Se a pasta não existir:

```powershell
npx expo run:android
```

ou:

```powershell
npx expo prebuild
```

---

# `local.properties`

O arquivo:

```text
android/local.properties
```

é específico de cada computador e não deve ser versionado.

Se aparecer:

```text
SDK location not found
```

configure `ANDROID_HOME`.

Se ainda for necessário:

```powershell
$sdkPath = $env:ANDROID_HOME.Replace("\","/")
Set-Content ".\android\local.properties" "sdk.dir=$sdkPath"
```

---

# Persistência local

O projeto utiliza:

```text
@react-native-async-storage/async-storage
```

A chave utilizada para os agendamentos é:

```text
agendamentos
```

Fluxo de gravação:

```text
Objeto de agendamento
       ↓
JSON.stringify()
       ↓
AsyncStorage.setItem()
       ↓
Armazenamento local
```

Fluxo de leitura:

```text
AsyncStorage.getItem()
       ↓
JSON.parse()
       ↓
Lista de agendamentos
```

Os dados permanecem no dispositivo/emulador enquanto os dados da aplicação não forem apagados.

---

# Rotas da aplicação

| Arquivo | Rota |
|---|---|
| `src/app/index.tsx` | `/` |
| `src/app/profissionais.tsx` | `/profissionais` |
| `src/app/agendamento.tsx` | `/agendamento` |
| `src/app/meus-agendamentos.tsx` | `/meus-agendamentos` |

Fluxo:

```text
/
↓
/profissionais
↓
/agendamento
↓
/meus-agendamentos
```

---

# Comandos úteis

Instalar dependências:

```powershell
npm ci
```

ou:

```powershell
npm install
```

Executar Android:

```powershell
npx expo run:android
```

Iniciar Metro:

```powershell
npx expo start
```

Limpar cache:

```powershell
npx expo start --clear
```

Gerar projeto nativo:

```powershell
npx expo prebuild
```

Recriar projeto nativo:

```powershell
npx expo prebuild --clean
```

Verificar o projeto:

```powershell
npx expo-doctor
```

Verificar emulador:

```powershell
adb devices
```

---

# Problemas comuns

## `package.json does not exist`

Confirme:

```powershell
dir package.json
dir package-lock.json
dir app.json
dir tsconfig.json
```

Esses arquivos devem existir na raiz.

## `JAVA_HOME is set to an invalid directory`

```powershell
where.exe java
java -version
Test-Path "$env:JAVA_HOME\bin\java.exe"
```

Configure o caminho correto do JDK 21.

## Erro de `jlink` / GraalVM

Se aparecer algo parecido com:

```text
Execution failed for JdkImageTransform
Error while executing ... jlink.exe
```

use Eclipse Temurin JDK 21.

## `SDK location not found`

```powershell
$env:ANDROID_HOME="$env:LOCALAPPDATA\Android\Sdk"
$env:Path="$env:ANDROID_HOME\platform-tools;$env:ANDROID_HOME\emulator;$env:Path"
```

## Emulador não aparece

```powershell
adb devices
```

Abra o Device Manager e inicie o emulador.

## Caminho maior que 260 caracteres

Clone em:

```text
C:\dev\agendamentos
```

## Aplicação mostra uma versão antiga

Pare o Metro com `Ctrl + C` e execute:

```powershell
npx expo start --clear
```

Também confira a pasta atual:

```powershell
pwd
```

## Android malformado

```powershell
npx expo prebuild --clean
npx expo run:android
```

---

# Git e GitHub

Repositório:

```text
https://github.com/valdineydev/agendamentos
```

Baixar atualizações:

```powershell
git pull
npm install
```

Salvar alterações:

```powershell
git status
git add .
git commit -m "Descrição da alteração"
git push origin main
```

Arquivos que não devem ser versionados:

```text
node_modules/
.expo/
android/
ios/
.gradle/
.cxx/
build/
.env
```

---

# Passo a passo rápido para outro desenvolvedor

Se Git, Node.js, JDK 21, Android Studio e Android SDK já estiverem configurados:

```powershell
cd C:\dev
git clone https://github.com/valdineydev/agendamentos.git
cd agendamentos
npm ci
adb devices
npx expo run:android
```

Se Java e Android SDK já estiverem configurados permanentemente, esse é todo o processo necessário.

---

# Próximas etapas

- Seleção real de data;
- Seleção real de horário;
- Cancelamento de agendamento;
- Cadastro de usuário;
- Login;
- Cadastro de serviços;
- Cadastro de profissionais;
- Backend com Spring Boot;
- API REST;
- Swagger;
- MySQL;
- Integração do aplicativo com a API;
- Histórico por usuário;
- Status de agendamento;
- Validações;
- Tratamento de erros;
- Tela de perfil.

Endpoints planejados:

```text
GET    /servicos
GET    /servicos/{id}
GET    /profissionais
GET    /profissionais/{id}
POST   /agendamentos
GET    /agendamentos/usuario/{id}
PUT    /agendamentos/{id}/cancelar
POST   /usuarios
POST   /auth/login
```

---

# Objetivo educacional

O projeto permite trabalhar:

- desenvolvimento mobile;
- React Native;
- TypeScript;
- componentes;
- navegação;
- passagem de parâmetros;
- persistência local;
- AsyncStorage;
- arquitetura de projeto;
- Git e GitHub;
- Android SDK;
- Gradle;
- integração futura com APIs REST.

---

# Autor

**Valdiney Márcio**

GitHub:

```text
https://github.com/valdineydev
```

---

# Licença

Projeto destinado principalmente a fins educacionais.
