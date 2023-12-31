---
layout: portfolio-detail
title: SNIPER-RMS
range: 2019.01 ~ 현재
image: assets/images/portfolio/sniper-rms-1.jpg
summary: "
- 현재 팀의 메인 시스템으로, 보안장비들의 정책관리 시스템이며, 주요기능으로 센서관리, 정책가져오기, 정책배포, 정책편집기능을 제공한다.<br>
- Gitlab CI/CD 및 Ansible을 통해 test(lint, unit, e2e), packaging, deploy 과정이 자동화 되어있다.<br>
- 로드맵으로 사내 전체 보안장비들의 정책 연동 및 버전별 RMS의 기능통합을 가지고 있다.<br><br>
Front-End : Angular, Ngrx, Rxjs<br>
Back-End : Nestjs, Typeorm, mariadb, sqlite, git<br>
Test : Jest, Cypress<br>
ETC : SocketIO, Nx workspace, Class-validator
"
---

<h3>
    RMS v3.4
    <span class="font-secondary" style="font-size:14px; margin-left:5px; color: #4c4c4c">
        2023.06 ~ 2023.10
    </span>
    <span class="font-secondary" style="font-size:14px; margin:0px 5px; color: #4c4c4c">
        |
    </span>
    <span class="font-secondary" style="font-size:14px; color: #4c4c4c">
        PM, 개발
    </span>
</h3>

<div class="row">
<div class="col-lg-6 col-md-12">
<h5 class="font-primary mb-0">프로젝트 목표</h5>
<pre class="font-secondary description">
- 제품 컨테이너화
- 일본향 RMS v3.0.4 대개체
</pre>

<h5 class="font-primary mb-0">담당 주요 업무</h5>
<pre class="font-secondary description mb-0">
1. 컨테이너 기술 검토
    - docker 유료화로 인한 nerdctl 기반 container 화
    - 제품 os는 centos7의 EOSL로 Redhat UBI(Universal Base Image)8로 변경
2. 가상화 관련 기능 설계
    1) 제품 인증기능 설계
    2) SLMS(Serial License Management System) 설계
3. 일본향 RMS v3.0.4 대개체 관련 기능 설계 및 검토
    1) HA 이증화 기능 설계
    2) Reputation 동기화 기능 설계
    3) Intelligence 정책관리 기능 설계
</pre>
</div>
<div class="col-lg-6 col-md-12">
<h5 class="font-primary mb-0">특이사항</h5>
</div>
</div>
- - -

<h3>
    RMS v3.3
    <span class="font-secondary" style="font-size:14px; margin-left:5px; color: #4c4c4c">
        2022.01 ~ 2023.05
    </span>
    <span class="font-secondary" style="font-size:14px; margin:0px 5px; color: #4c4c4c">
        |
    </span>
    <span class="font-secondary" style="font-size:14px; color: #4c4c4c">
        PM, 개발
    </span>
</h3>

<h5 class="font-primary mb-0">프로젝트 목표</h5>
<pre class="font-secondary description">
- RDS v4.x 기능 통합 2차
- 통신사 요구사항 개발
- E2E 테스트 도입
- QC 대응
</pre>

<h5 class="font-primary mb-0">담당 주요 업무</h5>
<pre class="font-secondary description mb-0">
1. RDS v4.x 통합 관련 기능 설계 및 검토
    1) RDS Migration tool 설계
    2) 
2. 통신사 요구사항 기능 설계 및 개발
    1) 정책관리 Openapi 설계 및 개발
    2) 정책배포 성능 개선
        - 기존 정책배포 프로세스 리팩토링 진행
    3) 실시간 차단 정책관리 기능 설계
    4) Raw Packet 수집 기능 설계
    5) White IP 관리 기능 설계
3. E2E 개발 가이드라인 작성 및 관련 공통 모듈 설계
4. QC에 따른 기능개선 및 결함수정 대응
5. SearchBar 컴포넌트 개발
</pre>

<h5 class="font-primary mb-0">특이사항</h5>
<pre class="font-secondary description">
1. 실시간 정책관리에 따른 감사이력 인코딩 이슈
2. 
</pre>
- - -

<h3>
    RMS v3.2
    <span class="font-secondary" style="font-size:14px; margin-left:5px; color: #4c4c4c">
        2019.06 ~ 2020.06
    </span>
    <span class="font-secondary" style="font-size:14px; margin:0px 5px; color: #4c4c4c">
        |
    </span>
    <span class="font-secondary" style="font-size:14px; color: #4c4c4c">
        PM 및 개발
    </span>
</h3>

<h5 class="font-primary mb-0">프로젝트 목표</h5>
<pre class="font-secondary description">
- RDS v4.x 기능 통합 1차
- 주요 기능 리팩토링
</pre>

<h5 class="font-primary mb-0">담당 업무</h5>
<pre class="font-secondary description">
1. RDS v4.x 기능 통합
    1) RDS 주요기능 분석 및 대체기능 설계
    2) 기관모드 환경설정 기능 개발
2. 주요 기능 리팩토링
    1) RMS 메인 Database 변경 (Sqlite -> Mariadb)
    2) 센서관리 기능 리팩토링
        - Ngrx 기반 상태관리 도입
        - SocketIO 이벤트 정리
3. Grid 컴포넌트 Export csv 공통기능 개발
</pre>

- - -

<h3>
    RMS v3.1
    <span class="font-secondary" style="font-size:14px; margin-left:5px; color: #4c4c4c">
        2019.01 ~ 2019.06
    </span>
    <span class="font-secondary" style="font-size:14px; margin:0px 5px; color: #4c4c4c">
        |
    </span>
    <span class="font-secondary" style="font-size:14px; color: #4c4c4c">
        PL 및 개발
    </span>
</h3>

<h5 class="font-primary mb-0">프로젝트 목표</h5>
<pre class="font-secondary description">
- RMS v3.0 의 기술스택 노후에 따른 확장 어려움으로, NestJS, Angular 기반의 신규 RMS 개발
</pre>

<h5 class="font-primary mb-0">담당 업무</h5>
<pre class="font-secondary description">
1. 기본 프로젝트 구조 설계 및 개발
    - Nx workspace를 활용한 풀스택 프로젝트 구조
    - Front-End, Back-End, 공통 Library로 구조화
2. Back-End
    - Authentication Middleware 설계 및 개발
    - 센서관리 기능 API 개발
3. Front-End
    - Layout 컴포넌트 설계 및 개발
        - flex 기반 layout helper css 개발
        - 주요 화면 Layout 개발
    - 공통 컴포넌트 설계 및 개발
        - Grid, Tree, Modal, Toast, Spinner
    - 센서관리 기능 개발
</pre>

