// =============== 데이터 정의 ===============
const SUHANG = [
  // 2025년 12월 ~ 2026년 1월 (기존 배정 데이터)
  {
    title: '2025년 2학년 국어 - 2학기 수행평가 참고 소설 파일1(다섯 편 모음)',
    teacher: '유정화',
    grade: '2학년',
    subject: '국어',
    due: '2025-12-02',
  },
  {
    title: '2025년 2학년 과학 - 물리학 추가탐구 보고서 제출',
    teacher: '유혜원',
    grade: '2학년',
    subject: '과학',
    due: '2025-12-05',
  },
  {
    title: '2025년 2학년 과학 - [화학Ⅰ] 화학탐구보고서 제출',
    teacher: '황윤서, 장다정',
    grade: '2학년',
    subject: '과학',
    due: '2025-12-08',
  },
  {
    title: '2025년 2학년 수학 - 기하 2학기 발표 수행평가 안내',
    teacher: '배준',
    grade: '2학년',
    subject: '수학',
    due: '2025-12-12',
  },
  {
    title: '2025년 2학년 과학 - 지구과학Ⅰ 과학탐구보고서(수행평가)',
    teacher: '김기권',
    grade: '2학년',
    subject: '과학',
    due: '2025-12-15',
  },
  {
    title: '2025년 2학년 영어 - Speaking 수행평가 공지',
    teacher: '오가영',
    grade: '2학년',
    subject: '영어',
    due: '2025-12-19',
  },
  {
    title: '2025년 2학년 수학 - 확률과통계 심화탐구 보고서(기한 내 미제출자)',
    teacher: '강수미',
    grade: '2학년',
    subject: '수학',
    due: '2025-12-22',
  },
  {
    title: '2025년 2학기 물리학 수행평가(탐구 보고서)',
    teacher: '유혜원',
    grade: '2학년',
    subject: '과학',
    due: '2025-12-26',
  },
  {
    title: '2025년 2학기 수학Ⅰ 서논술형 수행평가 문제 예시 문항 안내',
    teacher: '배준',
    grade: '2학년',
    subject: '수학',
    due: '2025-12-29',
  },
  {
    title: '2025년 2학년 영어 - 2학년 영어 과세특 기초자료 제출',
    teacher: '오가영',
    grade: '2학년',
    subject: '영어',
    due: '2026-01-03',
  },
  {
    title: '2025년 2학년 과학 - 2학년 생명과학Ⅰ 탐구보고서 완성 제출',
    teacher: '박현묘',
    grade: '2학년',
    subject: '과학',
    due: '2026-01-05',
  },
  {
    title: '2025년 2학년 국어 - [2-7] 2학기 문학 수행평가(활동지)',
    teacher: '유정화, 강민철',
    grade: '2학년',
    subject: '국어',
    due: '2026-01-09',
  },
  {
    title: '2025년 2학년 기타 - 문제 변화의 모빌(2-7)',
    teacher: '김혜수',
    grade: '2학년',
    subject: '기타',
    due: '2026-01-12',
  },
  {
    title: '2025년 2학년 기타 - 문제분석(2-7)',
    teacher: '김혜수',
    grade: '2학년',
    subject: '기타',
    due: '2026-01-15',
  },
  {
    title: '2025년 2학년 수학 - 수학Ⅱ 심화탐구 보고서(7반)',
    teacher: '정주희',
    grade: '2학년',
    subject: '수학',
    due: '2026-01-20',
  },
  {
    title: '2025년 2학년 수학 - 수업유연화 - 나는 왜 수학을 못하는가',
    teacher: '정주희',
    grade: '2학년',
    subject: '수학',
    due: '2026-01-24',
  },
  {
    title: '2025년 2학년 과학 - 2학년 지구과학Ⅰ 과학독서보고서(세특추가탐구)',
    teacher: '김기권',
    grade: '2학년',
    subject: '과학',
    due: '2026-01-30',
  },

  // 전학년 or 기타 항목
  {
    title: '2025년 전학년 기타 - 2학기 건강중진교육봉사 포스터, 활동일지 제출',
    teacher: '지민희',
    grade: '전학년',
    subject: '기타',
    due: '2026-01-15',
  },
  {
    title: '2025년 전학년 기타 - 2025-2 보건 수업 심화 탐구',
    teacher: '지민희',
    grade: '전학년',
    subject: '기타',
    due: '2026-01-18',
  },
  {
    title: '2025년 전학년 기타 - 건강증진 교육봉사 활동일지 제출',
    teacher: '지민희',
    grade: '전학년',
    subject: '기타',
    due: '2026-01-20',
  },
  {
    title: '2025년 전학년 기타 - 통번역 동아리 산출물 제출',
    teacher: '황창수',
    grade: '전학년',
    subject: '기타',
    due: '2026-01-22',
  },
  {
    title:
      '2025년 전학년 기타 - [수업활용 유연화](Web Hacking) 실습 보고서 제출',
    teacher: '윤시내',
    grade: '전학년',
    subject: '기타',
    due: '2026-01-25',
  },
  {
    title: '2025년 전학년 과학 - 생체신호와 디지털헬스 3,4일차 보고서 제출',
    teacher: '지민희',
    grade: '전학년',
    subject: '과학',
    due: '2026-01-28',
  },
  {
    title: '2025년 전학년 과학 - [수업활용 유연화] 나만의 주기율표 만들기',
    teacher: '황윤서',
    grade: '전학년',
    subject: '과학',
    due: '2026-01-31',
  },
  {
    title: '2025년 전학년 기타 - 해킹반 1학기 동아리 활동 보고서',
    teacher: '윤시내',
    grade: '전학년',
    subject: '기타',
    due: '2026-02-02',
  },
  {
    title:
      '2025년 전학년 기타 - [수업활용 유연화](Web Hacking) 자율적 교육과정 탐구 보고서 제출',
    teacher: '윤시내',
    grade: '전학년',
    subject: '기타',
    due: '2026-02-05',
  },
  {
    title: '2025년 전학년 기타 - 창의로봇반 활동일지',
    teacher: '황민기',
    grade: '전학년',
    subject: '기타',
    due: '2026-02-08',
  },
  {
    title: '2025년 전학년 기타 - 공간 심화 탐구 주제 보고서 제출',
    teacher: '황승근',
    grade: '전학년',
    subject: '기타',
    due: '2026-02-10',
  },
  {
    title:
      '2025년 전학년 과학 - [수업활용유연화] 포인팅 벡터, 공간을 지나는 에너지 흐름',
    teacher: '황민기',
    grade: '전학년',
    subject: '과학',
    due: '2026-02-12',
  },
  {
    title:
      '2025년 전학년 과학 - 기후 변화에 대한 과학적 해결 방법 연구(수업유연화·자율적 교육과정)',
    teacher: '김기권',
    grade: '전학년',
    subject: '과학',
    due: '2026-02-14',
  },
];

// ============ 상태 ============
let favorites = JSON.parse(localStorage.getItem('suhangFavorites') || '[]');
let showFavOnly = false;
let sortByDue = false;

const $tbody = document.getElementById('tbody');
const $search = document.getElementById('searchInput');
const $grade = document.getElementById('gradeFilter');
const $subject = document.getElementById('subjectFilter');
const $sortBtn = document.getElementById('sortBtn');
const $favBtn = document.getElementById('favBtn');

// ============ 유틸 ============
function calcDDay(due) {
  if (!due) return { label: '-', cls: 'dday none' };
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = new Date(due);
  d.setHours(0, 0, 0, 0);
  const diff = Math.floor((d - today) / (1000 * 60 * 60 * 24));
  if (diff < 0) return { label: '마감', cls: 'dday expired' };
  if (diff === 0) return { label: 'D-Day', cls: 'dday today' };
  return { label: `D-${diff}`, cls: 'dday' };
}

function shouldAlert(entry) {
  if (!entry.due) return false;
  if (entry.grade === '전학년' && entry.subject === '기타') return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = new Date(entry.due);
  d.setHours(0, 0, 0, 0);
  const diff = Math.floor((d - today) / (1000 * 60 * 60 * 24));
  return diff === 1;
}

// ============ 렌더 ============
function render() {
  let list = [...SUHANG];

  const kw = $search.value.trim().toLowerCase();
  if (kw) {
    list = list.filter(
      (x) =>
        x.title.toLowerCase().includes(kw) ||
        x.teacher.toLowerCase().includes(kw)
    );
  }

  if ($grade.value) {
    list = list.filter((x) => x.grade === $grade.value);
  }

  if ($subject.value) {
    list = list.filter((x) => x.subject === $subject.value);
  }

  if (showFavOnly) {
    list = list.filter((x) => favorites.includes(x.title));
  }

  // [수정됨] 정렬 로직 변경
  if (sortByDue) {
    list.sort((a, b) => {
      // 1. 마감일 없는 항목은 맨 뒤로
      if (!a.due && !b.due) return 0;
      if (!a.due) return 1;
      if (!b.due) return -1;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const dateA = new Date(a.due);
      const dateB = new Date(b.due);

      // 오늘 날짜보다 작으면(과거) true
      const isPastA = dateA < today;
      const isPastB = dateB < today;

      // 2. '이미 지난 것'과 '아직 안 지난 것'이 섞여 있다면
      //    안 지난 것(미래/오늘)을 앞으로(-1), 지난 것(과거)을 뒤로(1)
      if (isPastA !== isPastB) {
        return isPastA ? 1 : -1;
      }

      // 3. 둘 다 미래거나, 둘 다 과거면 -> 날짜 빠른 순(오름차순) 정렬
      return dateA - dateB;
    });
  }

  if (!list.length) {
    $tbody.innerHTML = `<tr><td colspan="6" class="empty">조건에 맞는 수행평가가 없습니다.</td></tr>`;
    return;
  }

  $tbody.innerHTML = list
    .map((x) => {
      const dday = calcDDay(x.due);
      const favActive = favorites.includes(x.title);
      return `
      <tr>
        <td>${x.title}<span class="badge">${x.subject}</span></td>
        <td>${x.teacher}</td>
        <td><span class="grade">${x.grade}</span></td>
        <td>${x.due || '-'}</td>
        <td><span class="${dday.cls}">${dday.label}</span></td>
        <td>
          <button class="favorite-btn ${
            favActive ? 'active' : ''
          }" onclick="toggleFavorite('${x.title.replace(/'/g, "\\'")}')">
            ★
          </button>
        </td>
      </tr>
    `;
    })
    .join('');
}

// ============ 즐겨찾기 ============
function toggleFavorite(title) {
  const idx = favorites.indexOf(title);
  if (idx >= 0) favorites.splice(idx, 1);
  else favorites.push(title);
  localStorage.setItem('suhangFavorites', JSON.stringify(favorites));
  render();
}
window.toggleFavorite = toggleFavorite;

// ============ 이벤트 ============
$search.addEventListener('input', render);
$grade.addEventListener('change', render);
$subject.addEventListener('change', render);

$sortBtn.addEventListener('click', () => {
  sortByDue = !sortByDue;
  // 버튼 텍스트도 상태에 맞춰 변경
  $sortBtn.textContent = sortByDue ? '📅 마감일순(ON)' : '📅 마감일순';
  render();
});

$favBtn.addEventListener('click', () => {
  showFavOnly = !showFavOnly;
  $favBtn.textContent = showFavOnly ? '⭐ 즐겨찾기만(ON)' : '⭐ 즐겨찾기만';
  render();
});

// ============ D-1 알림 ============
function checkAlertsOnce() {
  const alerted = sessionStorage.getItem('suhangAlerted');
  if (alerted) return;
  const near = SUHANG.filter(shouldAlert);
  if (near.length) {
    alert(
      '📢 마감 하루 전 수행평가:\n\n' +
        near.map((x) => '• ' + x.title).join('\n')
    );
  }
  sessionStorage.setItem('suhangAlerted', '1');
}

function goBack() {
  window.location.href = 'Lite_hackathon.html';
}

// 초기 실행
render();
checkAlertsOnce();
