# 💻 Portfolio Website

> **AI Security · Graph Machine Learning · Computer Vision 연구 및 프로젝트 포트폴리오**
>
> **2026.07 ~ 현재**

<br>

## 프로젝트 소개

AI Security와 Graph Machine Learning을 중심으로 진행한 연구 경험과 프로젝트, 논문 및 학회 활동을 소개하기 위해 개발한 개인 포트폴리오 웹사이트입니다.

단순한 이력서 형태를 넘어 프로젝트의 **문제 정의 → 구현 → 주요 기여 → 트러블슈팅 → 결과 → 배운 점**을 하나의 흐름으로 확인할 수 있도록 구성하였습니다.

또한 프로젝트 정보를 데이터 기반으로 관리하고 공통 컴포넌트를 재사용하여 새로운 프로젝트를 쉽게 추가할 수 있도록 설계하였습니다.

<br>

## 👩🏻‍💻 개발 정보

| 구분 | 내용 |
|:---:|:---|
| 개발 기간 | 2026.07 ~ 현재 |
| 개발 인원 | 1명 |
| 역할 | Frontend Developer · UI/UX Design |
| 주요 기술 | Next.js · React · TypeScript · Tailwind CSS |
| Animation | Framer Motion |
| Version Control | Git · GitHub |

<br>

## ⭐ 주요 기능

### ◾ 연구 중심 포트폴리오

About, Publications, Projects 등의 콘텐츠를 구성하고 연구 프로젝트의 문제 정의부터 구현 과정, 성과까지 체계적으로 보여줄 수 있도록 설계하였습니다.

### ◾ 프로젝트 데이터 기반 구조

프로젝트 정보를 객체 형태로 관리하고 `ProjectCard` 컴포넌트를 통해 렌더링하도록 구성하였습니다.

프로젝트 카드 전체를 클릭하여 상세 페이지로 이동할 수 있으며, 새로운 프로젝트 추가 시 데이터만 작성하여 쉽게 확장할 수 있습니다.

### ◾ 재사용 가능한 프로젝트 상세 페이지

프로젝트 상세 페이지에서 반복적으로 사용되는 UI를 공통 컴포넌트로 분리하였습니다.

- `ProjectHero`
- `ProjectInfo`
- `ProjectOverview`
- `ProjectContributions`
- `ProjectTroubleshooting`
- `ProjectLessons`
- `ProjectResources`

프로젝트별 콘텐츠는 Props로 전달하여 동일한 디자인과 정보 구조를 유지할 수 있도록 구현하였습니다.

### ◾ 프로젝트 탐색 기능

긴 프로젝트 페이지에서도 원하는 내용을 빠르게 찾을 수 있도록 다음 기능을 구현하였습니다.

- Floating Table of Contents
- Scroll To Top
- Smooth Scrolling

### ◾ Animation & Responsive Design

Framer Motion을 활용하여 Scroll-based Fade In, Hover Interaction 등의 인터랙션을 구현하였습니다.

Tailwind CSS의 반응형 유틸리티를 활용하여 Desktop, Tablet, Mobile 환경에 대응하도록 구성하였으며 모바일 환경에서 발생할 수 있는 가로 스크롤 문제를 개선하였습니다.

<br>

# 🖥️ Stack

### Language

<p align="left">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
</p>

### Framework / Library

<p align="left">
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
<img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white"/>
</p>

### Development Environment

<p align="left">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
</p>

<br>

# 🔧 Troubleshooting

### ◾ 재사용 가능한 프로젝트 상세 페이지 설계

프로젝트마다 상세 페이지를 개별적으로 구현할 경우 코드 중복이 증가하는 문제가 있었습니다.

이를 해결하기 위해 ProjectHero, ProjectInfo, ProjectOverview 등의 공통 컴포넌트를 분리하고 프로젝트별 콘텐츠를 Props로 전달하는 구조로 변경하였습니다.

이를 통해 새로운 프로젝트를 추가할 때 UI를 다시 구현하지 않고 콘텐츠만 추가할 수 있도록 개선하였습니다.

### ◾ Server Component와 Client Component 충돌

Framer Motion을 적용하는 과정에서 Next.js App Router의 Server Component와 Client Component 관련 오류가 발생했습니다.

애니메이션 및 브라우저 인터랙션이 필요한 컴포넌트를 Client Component로 분리하고 MotionWrapper를 활용하여 Server Component와의 경계를 명확하게 구성하였습니다.

### ◾ Responsive Layout 문제

모바일 환경에서 일부 콘텐츠가 화면 너비를 벗어나 가로 스크롤이 발생하는 문제가 있었습니다.

Tailwind CSS의 반응형 유틸리티와 w-full, min-w-0, overflow-x-hidden 등의 레이아웃 설정을 적용하여 Desktop과 Mobile 환경에서 안정적으로 표시되도록 개선하였습니다.


# 📚 Lessons Learned

### ◾ 컴포넌트 설계의 중요성

처음에는 하나의 페이지를 완성하는 것에 집중했지만 프로젝트가 증가하면서 재사용 가능한 컴포넌트 구조를 설계하는 것이 유지보수성과 확장성에 큰 영향을 준다는 점을 경험하였습니다.

### ◾ 연구 경험을 제품처럼 표현하는 방법

논문과 연구 결과를 단순히 나열하는 것이 아니라 문제 정의, 구현, 실험, 성과 및 배운 점으로 구조화하여 연구 경험을 보다 이해하기 쉬운 형태로 전달하는 방법을 고민하였습니다.

### ◾ Next.js App Router 구조 이해

Server Component와 Client Component의 역할을 구분하고 애니메이션 및 사용자 인터랙션 기능을 적절히 분리하면서 Next.js 기반 애플리케이션 구조에 대한 이해를 높일 수 있었습니다.


<br>


# 📸 Screenshots

### Main Page

<img width="1000" alt="Portfolio Main" src="https://github.com/user-attachments/assets/MAIN_PAGE_IMAGE_URL">

<br>

### Projects Page

<img width="1000" alt="Projects Page" src="https://github.com/user-attachments/assets/PROJECTS_PAGE_IMAGE_URL">

<br>

### Project Detail

<img width="1000" alt="Project Detail" src="https://github.com/user-attachments/assets/PROJECT_DETAIL_IMAGE_URL">

<br>

### Mobile

<img width="400" alt="Mobile Portfolio" src="https://github.com/user-attachments/assets/MOBILE_IMAGE_URL">

<br>


# 👩🏻‍💻 Author

**Jungeun Kim**

M.S. Student in Computer Software Engineering

<br>



<p align="center">
  Thank you for visiting my portfolio! 🙌
</p>
