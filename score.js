function goBack() {
  window.location.href = 'index.html'; // 메인으로 이동
}

// 데이터 (추후 엑셀 연동 가능)
const scores = [
  { subject: '문학', score: 92, rank: '12', grade: 1 },
  { subject: '수학I', score: 78, rank: '45', grade: 3 },
  { subject: '영어I', score: 95, rank: '5', grade: 1 },
  { subject: '물리', score: 88, rank: '22', grade: 2 },
];

// 1. 그래프 그리기
const chart = document.getElementById('barChart');
scores.forEach((s) => {
  const bar = document.createElement('div');
  bar.className = 'bar-item';
  // 색상 다르게 (1등급 파랑, 그 외 보라/회색)
  bar.style.backgroundColor =
    s.grade === 1 ? 'var(--accent)' : s.grade === 2 ? 'var(--accent2)' : '#555';

  // 텍스트 추가
  bar.innerHTML = `<span class="bar-text">${s.subject}</span>`;

  chart.appendChild(bar);

  // 애니메이션 효과 (약간의 딜레이 후 높이 지정)
  setTimeout(() => {
    bar.style.height = `${s.score}%`;
  }, 100);
});

// 2. 테이블 채우기
const list = document.getElementById('scoreList');
scores.forEach((s) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
        <td>${s.subject}</td>
        <td>${s.score}</td>
        <td>${s.rank}/200</td>
        <td><span class="badge g-${s.grade}">${s.grade}</span></td>
    `;
  list.appendChild(tr);
});

function goBack() {
  window.location.href = 'Lite_hackathon.html';
}
