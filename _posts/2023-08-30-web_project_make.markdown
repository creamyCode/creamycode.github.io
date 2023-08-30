---
layout: post
title: nx를 이용한 react, nestjs 기반 monorepo project 구성 
date: 2023-08-30 20:24:00 +0900
category: blog
image:  /assets/images/blog/2023/web_project-1.png
author: 서준일
tags:   
    - Monorepo
    - nx
    - pnpm
    - react
    - nestjs
desc: tst
---

&nbsp;현재 팀구성 및 개발환경을 고려한 web proejct 구성에 대한 검토 및 선정. 

# web project 구성

## 1. 프로젝트 구성 방식 - Monorepo

### Monorepo ?

- [이전글 참고](/blog/2023/08/30/monorepo/)

#### 선정사유 - backend, frontend 영역의 언어가 일치

- 두 영역간의 코드 공유가 손쉬움(DTO, 유효성처리, api요청 등등)
- 두 영역에서 일관된 개발자 경험 제공 (개발환경, lint, 코드 컨벤션)
- 의존성 관리 단일화 가능 (node-modules)

## 2. 관련 기술 스택 

- package manager : npm, yarn, yarn2, pnpm
- repo 구성관련 opensource : nx, turbo

### 2.1 package manager - pnpm

Performent Node Package Manager : 빠르고 효율적인 javscript 패키지 매니저

#### 선정사유

- 1세대 저수준 Package Manager 제외 - npm, yarn
- [준수한 성능](https://pnpm.io/ko/benchmarks)
- yarn2와 pnpm의 기능제공 범위도 거의 유사하나 pnpm이 [트렌드에서 높음]:https://npmtrends.com/pnpm-vs-yarn
- 현 vdi 개발환경내에서 yarn의 경우 내부 repository 접근에 별도 설정이 필요한듯, pnpm은 기존 .npmrc로 이용가능

### 2.2 Build System - NX

- [NX](https://nx.dev/)
- 최고 수준의 단일 저장소 지원 및 강력한 통합을 갖춘 차세대 빌드 시스템
- 구글 개발자들이 만든 오픈소스 프로젝트
- Angular, React와 같은 프런트엔드 프레임워크 기반의 개발 환경 구성뿐 아니라 Express, Nest.js와 같은 백엔드 기술 기반의 개발까지 폭넓게 지원

#### 주요 특징

- 로컬 및 CI에서 기존 프로젝트의 빌드 및 테스트 속도를 높입니다
- **하위 수준 빌드 도구를 구성할 필요 없이 Nx 플러그인을 사용하여 새 프로젝트를 빠르게 생성가능(스캐폴드)**
- **새로운 도구(예: Storybook, Tailwind 등)를 프로젝트에 쉽게 통합**
- 맞춤형 생성기와 Lint 규칙을 사용하여 일관성과 코드 품질을 보장
- 자동화된 코드 마이그레이션 기능을 사용하여 프레임워크와 도구를 업데이트하고 작업 공간을 상시 유지

#### 선정사유

- **cli를 통한 손쉬운 프로젝트 구성 및 확장가능**
  - 별도의 설정 파일 수정 최소화
  - 낮은 러닝커브
- **nx 전용 vscode extention 지원**
  - cli 명령어 일일이 기억하지 않아도 됨
- [turborepo와 비교](https://nx.dev/concepts/more-concepts/turbo-and-nx)
  - turborepo의 경우 전용 cli의 수준이 너무 낮음
    - 프로젝트 확장시 turbo.json을 통해 구성 필요, 또한 신규 도구 추가에도 모두 수동 설정 필요
  - turborepo의 경우 대규모 monorepo 환경에 기반하여 기본적으로 빌드 분산캐싱을 제공하며 이는 외부연결이 필요
    - nx역시 nx-cloud를 통해 지원가능

## 3. nx workspace 구성

### 3.1 nx workspace 구성 명령 수행

- package manager로 pnpm 지정

```bash
> npx create-nx-workspace@latest --pm pnpm
```

### 3.2 workspace 기술스택 선택 및 자동 프로젝트 구성

- 우선 react기반으로 구성, stack 선택단계에서 None으로 시작해도 무방

```bash
✔ Where would you like to create your workspace? · test
✔ Which stack do you want to use? · react
✔ What framework would you like to use? · none
✔ Integrated monorepo, or standalone project? · integrated
✔ Application name · frontend
✔ Which bundler would you like to use? · vite
✔ Test runner to use for end to end (E2E) tests · none
✔ Default stylesheet format · styled-components
✔ Enable distributed caching to make your CI faster · No  <-- nx cloud로 no로 선택
```

### 3.3 nestjs 프로젝트 추가

@nx/nestjs 플러그인 설치
```bash
> pnpm add -D @nx/nest
```

nestjs project 추가

```bash
# frontendProject 옵션은 해당 frontend app에 대한 proxy서버설정 처리지원
> npx nx g @nx/nest:app <프로젝트명> --frontendProject frontend
```

nx project 제거
```bash
> npx nx g rm <프로젝트명>
```

### 3.4 공통 lib 프로젝트 추가

@nx/js 플러그인 설치
```bash
pnpm add -D @nx/js
```

공통 lib 추가
```bash
npx nx g @nx/js:lib <lib명>
```

공통 ui lib 추가
```bash
npx nx g @nx/react:lib <lib명> --bundler=vite
```

### 3.5 프로젝트 실행

단일 프로젝트에 대한 명령 수행
```bash
# target은 serve, build 와 같은 명령어
> npx nx <target> <project>
```

다수의 프로젝트에 대한 명령 수행
```bash
# -p 옵션 없을시 기본 전체
npx nx run-many -t <target> -p <project1>, <project2>
```

## 4. nx 핵심 기능

### 4.1 Run Tasks

Monorepos에는 수백 또는 수천 개의 프로젝트가 있을 수 있으므로 프로젝트 전체(또는 일부)에 대해 작업을 실행할 수 있는 것

### 4.2 Cache Task Results

동일한 코드를 계속해서 다시 빌드하고 다시 테스트하려면 비용이 많이 듭니다. Nx는 계산 캐시를 사용하여 동일한 코드를 두 번 다시 작성하지 않습니다.

### 4.3 Distribute Task Execution

분산 CI 태스크 실행, nx cloud 사용필수

### 4.4 Explore the Graph

Nx는 작업을 빠르고 정확하게 실행할 수 있도록 저장소의 모든 프로젝트 간의 종속성에 대한 그래프를 생성합니다 . 이 그래프를 시각적으로 탐색하면 Nx가 특정 방식으로 작동하는 이유를 이해하고 코드 아키텍처에 대한 높은 수준의 보기를 얻는 데 유용할 수 있습니다.