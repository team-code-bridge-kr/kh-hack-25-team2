function goBack() {
  window.location.href = 'index.html';
}

const files = [
  {
    type: 'pdf',
    subject: 'math',
    name: '2025 수능특강 수학I.pdf',
    size: '5.2MB',
  },
  {
    type: 'hwp',
    subject: 'kor',
    name: '문학 기말고사 예상문제.hwp',
    size: '120KB',
  },
  { type: 'zip', subject: 'it', name: '정보 수행평가 예제.zip', size: '1.1MB' },
  { type: 'pdf', subject: 'math', name: '확통 공식정리.pdf', size: '3.0MB' },
];

const grid = document.getElementById('fileGrid');

function renderFiles(filter) {
  grid.innerHTML = '';
  const filtered =
    filter === 'all' ? files : files.filter((f) => f.subject === filter);

  filtered.forEach((f) => {
    const div = document.createElement('div');
    div.className = 'file-card';
    div.innerHTML = `
            <div class="icon-box ${f.type}">${f.type.toUpperCase()}</div>
            <div class="file-info">
                <strong class="f-name">${f.name}</strong>
                <span class="f-size">${f.size}</span>
            </div>
            <button class="down-btn">⬇</button>
        `;
    grid.appendChild(div);
  });
}

function filterFiles(sub) {
  document
    .querySelectorAll('.chip')
    .forEach((c) => c.classList.remove('active'));
  event.target.classList.add('active');
  renderFiles(sub);
}
function goBack() {
  window.location.href = 'Lite_hackathon.html';
}

renderFiles('all');
