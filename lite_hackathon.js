// Helper
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

// Footer year
const year = $('#year');
if (year) year.textContent = new Date().getFullYear();

/* ========== Sidebar ========== */
const openSidebar = () => {
  document.body.classList.add('is-open');
  $('#sidebar').setAttribute('aria-hidden', 'false');
  $('#overlay').setAttribute('aria-hidden', 'false');
};
const closeSidebar = () => {
  document.body.classList.remove('is-open');
  $('#sidebar').setAttribute('aria-hidden', 'true');
  $('#overlay').setAttribute('aria-hidden', 'true');
};

$('#openSidebar').addEventListener('click', openSidebar);
$('#closeSidebar').addEventListener('click', closeSidebar);
$('#overlay').addEventListener('click', closeSidebar);
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSidebar();
});

/* ========== Login ========== */
$('#loginBtn').addEventListener('click', () => {
  window.location.href = 'login.html';
});

/* ========== 🔍 검색 기능 (핵심 업데이트) ========== */
$('#searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = $('#q');
  const query = (input.value || '').trim(); // 공백 제거

  if (!query) return alert('검색어를 입력하세요.');

  // 1. 페이지 매핑 리스트
  const pageMap = [
    {
      keywords: ['수행', '평가', '과제'],
      url: 'suhang.html',
      name: '수행평가',
    },
    {
      keywords: ['성적', '점수', '등급', '내신'],
      url: 'score.html',
      name: '성적조회',
    },
    {
      keywords: ['답안', '정답', '모범'],
      url: 'mobum.html',
      name: '정기고사 모범답안',
    },
    { keywords: ['채점', '가채점'], url: 'gache.html', name: '가채점' },
    {
      keywords: ['모의', '학력', '수능'],
      url: 'mogo.html',
      name: '모의고사 학습',
    },
    { keywords: ['알림', '신청'], url: 'allim.html', name: '알림신청' },
    {
      keywords: ['게시판', '공지', '소통', '자유'],
      url: 'board.html',
      name: '경희 게시판',
    },
    { keywords: ['자료', '파일', '다운'], url: 'files.html', name: '학습자료' },
    { keywords: ['마이', '내정보', '프로필'], url: 'my.html', name: 'My 기능' },
    {
      keywords: ['상담', '진로', '컨설팅'],
      url: 'sangdam.html',
      name: '진로상담',
    },
    {
      keywords: ['학사', '일정', '달력', '캘린더'],
      url: 'haksa.html',
      name: '학사일정',
    },
    { keywords: ['로그인', '접속'], url: 'login.html', name: '로그인' },
  ];

  // 2. 키워드 매칭 확인
  const target = pageMap.find((item) =>
    item.keywords.some((k) => query.includes(k))
  );

  if (target) {
    // 매칭된 페이지가 있으면 이동
    // confirm(`'${target.name}' 페이지로 이동하시겠습니까?`) // 확인창이 필요하면 주석 해제
    window.location.href = target.url;
  } else {
    // 3. 페이지가 없으면 위젯 관련 검색인지 확인
    if (
      query.includes('급식') ||
      query.includes('밥') ||
      query.includes('메뉴')
    ) {
      alert(
        "급식 정보는 '오늘의 급식' 위젯에서 확인할 수 있습니다.\n위젯 추가 화면을 열어드릴게요!"
      );
      openModal();
    } else if (query.includes('시간표')) {
      alert('시간표는 위젯으로 제공됩니다.\n위젯 추가 화면을 열어드릴게요!');
      openModal();
    } else {
      // 4. 아무것도 없으면 안내 메시지
      alert(
        `'${query}'에 대한 페이지를 찾지 못했습니다.\n사이드바 메뉴를 확인해보세요.`
      );
      openSidebar(); // 사이드바를 열어주는 센스
    }
  }

  // 입력창 초기화 및 포커스 해제 (모바일 키보드 닫기)
  input.value = '';
  input.blur();
});

/* ========== Widget modal ========== */
const modal = $('#widgetModal');
const openModal = () => document.body.classList.add('is-modal');
const closeModal = () => document.body.classList.remove('is-modal');

$('#fabAdd').addEventListener('click', openModal);
$('#closeModal').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

/* ========== Widget factory ========== */
function createWidget(type) {
  const card = document.createElement('article');
  card.className = 'widget';
  card.dataset.widget = type;

  const header = document.createElement('header');
  header.className = 'widget-header';

  const h3 = document.createElement('h3');
  const closeBtn = document.createElement('button');
  closeBtn.className = 'icon-btn sm remove-widget';
  closeBtn.title = '위젯 삭제';
  closeBtn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`;

  closeBtn.addEventListener('click', () => {
    setTimeout(() => {
      card.remove();
      updateWidgetHint();
    }, 0);
  });

  header.append(h3, closeBtn);

  const body = document.createElement('div');
  body.className = 'widget-body';

  switch (type) {
    case 'timetable': {
      h3.textContent = '시간표';
      const wrap = document.createElement('div');
      wrap.className = 'timetable';
      const cells = document.createElement('div');
      cells.className = 'cells';
      for (let i = 0; i < 30; i++)
        cells.appendChild(document.createElement('div'));
      wrap.appendChild(cells);
      body.appendChild(wrap);
      break;
    }
    case 'lunch': {
      h3.textContent = '오늘의 급식';
      const ul = document.createElement('ul');
      ul.className = 'lunch-list';
      ul.id = 'todayLunchWidget'; // ID 부여 (데이터 로딩용)
      ['로딩 중...'].forEach((t) => {
        const li = document.createElement('li');
        li.textContent = t;
        ul.appendChild(li);
      });
      body.appendChild(ul);
      // 위젯 생성 시 데이터 로드 트리거
      setTimeout(loadTodayLunch, 100);
      break;
    }
    case 'exam-schedule': {
      h3.textContent = '수행평가 일정';
      body.innerHTML =
        '<p>다가오는 수행평가 일정이 표시됩니다. (연동 예정)</p>';
      break;
    }
    case 'calendar': {
      h3.textContent = '캘린더';
      body.innerHTML = '<p>월간 학사일정 위젯입니다. (연동 예정)</p>';
      break;
    }
    case 'notice': {
      h3.textContent = '알림';
      body.innerHTML = '<p>공지/알림 모아보기. (연동 예정)</p>';
      break;
    }
    default: {
      h3.textContent = '커스텀 위젯';
      body.textContent = '내용을 구성하세요.';
    }
  }

  card.append(header, body);
  return card;
}

/* ========== 위젯 안내 문구 ========== */
function updateWidgetHint() {
  const widgetCount = document.querySelectorAll('.widget-grid .widget').length;
  const hint = document.getElementById('widgetHint');
  if (!hint) return;
  hint.style.display = widgetCount === 0 ? 'inline-block' : 'none';
}

/* ========== 모달에서 위젯 추가 ========== */
$$('.picker-item', modal).forEach((btn) => {
  btn.addEventListener('click', () => {
    const w = createWidget(btn.dataset.widget);
    $('#widgetGrid').appendChild(w);
    updateWidgetHint();
    closeModal();
  });
});

/* ========== 초기 로드 ========== */
updateWidgetHint();

// === 다크모드 / 라이트모드 토글 ===
document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('themeToggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeBtn.textContent = '☀️';
  } else {
    themeBtn.textContent = '🌙';
  }

  themeBtn.addEventListener('click', () => {
    body.classList.add('theme-transition');
    setTimeout(() => body.classList.remove('theme-transition'), 500);

    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    themeBtn.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
});

document.body.classList.add('theme-transition');
setTimeout(() => {
  document.body.classList.remove('theme-transition');
}, 600);

/* ============================= */
/* 🍱 오늘의 급식 데이터 로드 */
/* ============================= */
async function loadTodayLunch() {
  // 생성된 위젯이 있는지 확인
  const listElement = document.querySelector('.lunch-list');
  if (!listElement) return;

  try {
    // 실제로는 API나 파일을 불러옵니다. 여기서는 예시 데이터
    const dummyMeals = [
      {
        날짜: '11월 8일',
        메뉴: '현미밥, 쇠고기미역국, 돈육불고기, 계란말이, 배추김치',
      },
    ];

    const today = new Date();
    const todayStr = `${today.getMonth() + 1}월 ${today.getDate()}일`;

    // 예시 데이터 사용 (실제 구현 시 fetch 사용)
    // const meal = dummyMeals.find(...)

    // UI 업데이트 (테스트용)
    listElement.innerHTML = `
        <li><strong>${todayStr} 급식</strong></li>
        <li>쌀밥</li>
        <li>순두부찌개</li>
        <li>제육볶음</li>
        <li>깍두기</li>
    `;
  } catch (err) {
    console.error('급식 로드 실패:', err);
    listElement.innerHTML = `<li>정보를 불러올 수 없습니다.</li>`;
  }
}
