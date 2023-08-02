---
layout: post
title: Jekyll과 github page를 이용한 블로그 2회차 구성기
date: 2023-08-02 20:03:00 +0900
category: blog
image:  /assets/images/blog/2023/jekyll-blog-1.png
author: 서준일
tags:   
    - Blog
    - github page
    - Jekyll
desc: Jekyll과 github page를 이용한 블로그 구성기
---

&nbsp;현재 재직중인 회사를 다닌지 5년차, 한창 포트폴리오를 갱신하며 겸사겸사 개인 블로그를 다시 만들었다. 이전에도 Jekyll을 이용한 개인 블로그가 있었지만, 빌드 구조와 디자인이 별로였고 많은 글을 쓰지 않았기에 repository를 삭제하는데 망설임은 없었다. 

&nbsp;새로운 블로그를 구성하는데 있어, 내가 원하는 블로그의 요구사항은 다음과 같다.
<pre class="font-secondary description mt-0">
1. 와우포인트가 있는 메인
2. 포트폴리오 표출
3. 포스트 검색 기능
</pre>
&nbsp;위의 요구사항을 모두 충족하는 플랫폼은 역시 Jekyll 밖에 없었다. 다음은 각 요구사항별 개발 사항에 대해 간단히 소개한다.


<h3 class="mt-5">1. 와우포인트가 있는 메인</h3>

&nbsp;블로그를 개발하면서 가장 우선시 했던 부분은 블로그의 메인 화면이였다. 개발자스러우며 개발자만이 보여줄 수 있는 메인을 구성하고 싶었다. 그리고 평소에 생각해둔 구성도 있었는데 바로 특정 키워드를 타이핑하며 소통하는듯한 느낌을 주는 애니메이션을 구성하고 싶었다.

&nbsp;결과적으로 아래와 같이 매우 만족스럽게 개발을 완료했다. '커서의 깜박임', '실제 타이핑하는 듯한 문장의 완성과정', '영역선택후 지우는 효과' 등등 많은 부분에 디테일을 챙기기 위해 노력했다.

<div class="text-center">
<img class="img-fluid" src="/assets/images/blog/2023/blog-main.gif" alt="blog main"/>
</div>

&nbsp;기능의 구현에는 큰 문제는 없었지만.. 정작 문제는 컨텐츠를 채우는데에 있었다. 블로그의 주요 내용에 포트폴리오도 있어 마냥 재미있게만 가기는 어렵고 약간의 위트를 섞고 싶었는데 그런 문장이 안떠오른다. 큰일이다.

<h3 class="mt-5">2. 포트폴리오 표출</h3>

&nbsp;블로그를 다시만들게 된 이유, 포트폴리오 표출 및 갱신을 위함이다. 이직시 리뷰어에게 효과적으로 어필하고 싶었으며, 이후 개인 학습사항 및 토이 프로젝트를 효과적으로 연결하여 보여주고 싶었다. 현재는 자기소개, 기술스택, 경력사항이 기재되어 있는 about 페이지와 현재까지의 업무사항에 대해서만 기재한 portfolio 페이지를 구성했다.

<h3 class="mt-5">3. 포스트 검색 기능</h3>

&nbsp;내가 선택한 jekyll 테마에는 블로그에 대한 검색기능이 존재하지 않아 별도로 구현할 필요가 있었다. 검색을 통해 'SimpleJekyllSearch' module을 활용하면 쉽게 구현할 수 있음을 알 수 있었고 바로 구현했다.

<div class="text-center">
<img class="img-fluid" src="/assets/images/blog/2023/jekyll-blog-2.png" alt="search-bar"/>
</div>

&nbsp;'SimpleJekyllSearch' module에서는 적용방법에 대해서만 알려주고 검색바에 대한 디자인 요소는 제공하지 않아 타 사이트의 css요소를 빌려와 커스터마이징 하여 적용했다. 사진상의 태그 요소는 'SimpleJekyllSearch' module 내에서 제공하는 templateMiddleware를 이용하여 추가로 커스터마이징 했다.