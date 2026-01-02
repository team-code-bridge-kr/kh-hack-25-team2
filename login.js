/* login.js 
  - 로그인 버튼 클릭 시 메인 페이지로 이동하는 기능
*/

document.querySelector('.login-form').addEventListener('submit', (e) => {
  // 1. 폼이 실제로 서버로 전송되어 페이지가 새로고침 되는 것을 막습니다.
  e.preventDefault();

  // 2. 입력된 아이디와 비밀번호 값을 가져옵니다.
  const userId = document.getElementById('userid').value;
  const userPw = document.getElementById('password').value;

  // 3. 아이디와 비밀번호가 입력되었는지 확인합니다.
  // (HTML 태그에 'required' 속성이 있어서 빈 값일 경우 브라우저가 먼저 알려주지만,
  //  자바스크립트에서도 한번 더 확인하고 이동하는 것이 안전합니다.)
  if (userId && userPw) {
    // 4. 메인 페이지로 이동합니다.
    window.location.href = 'lite_hackathon.html';
  }
});
