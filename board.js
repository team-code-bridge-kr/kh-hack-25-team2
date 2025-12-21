function goBack() {
  window.location.href = 'index.html';
}

const posts = [
  {
    type: 'notice',
    title: '2학기 기말고사 시간표 안내',
    date: '2025.11.01',
    author: '교무부',
  },
  {
    type: 'free',
    title: '같이 게임하실분 구합니다.',
    date: '2025.11.05',
    author: 'greylove1111',
  },
  {
    type: 'free',
    title: '오늘 급식 맛있는거 뭐임?',
    date: '2025.11.05',
    author: '익명',
  },
  {
    type: 'notice',
    title: '도서관 이용 시간 변경',
    date: '2025.10.29',
    author: '도서관',
  },
];

const list = document.getElementById('postList');

function render(filter) {
  list.innerHTML = '';
  const filtered =
    filter === 'all' ? posts : posts.filter((p) => p.type === filter);

  filtered.forEach((p) => {
    const li = document.createElement('li');
    li.className = 'post-item';
    li.innerHTML = `
            <div class="post-head">
                <span class="badge b-${p.type}">${
      p.type === 'notice' ? '공지' : '자유'
    }</span>
                <span class="post-title">${p.title}</span>
            </div>
            <div class="post-meta">${p.author} · ${p.date}</div>
        `;
    list.appendChild(li);
  });
}

// 탭 기능
function filterBoard(type) {
  // 탭 스타일 변경
  document
    .querySelectorAll('.tab')
    .forEach((t) => t.classList.remove('active'));
  event.target.classList.add('active');
  render(type);
}

function writePost() {
  alert('글쓰기 기능은 준비 중입니다.');
}
function goBack() {
  window.location.href = 'Lite_hackathon.html';
}

// 초기 실행
render('all');
