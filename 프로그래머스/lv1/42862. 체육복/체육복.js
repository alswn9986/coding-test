function solution(n, lost, reserve) {
  // 학생들의 체육복 상태를 나타내는 배열 생성 및 초기화
  const status = Array(n).fill(1);

  // 도난당한 학생들의 체육복 상태를 0으로 설정
  for (const lostIdx of lost) {
    status[lostIdx - 1] -= 1;
  }

  // 여벌의 체육복을 가진 학생들의 체육복 상태를 1로 설정
  for (const reserveIdx of reserve) {
    status[reserveIdx - 1] += 1;
  }

  // 체육복을 빌려주는 과정
  for (let i = 0; i < n; i++) {
    if (status[i] === 0) {
      if (status[i - 1] === 2) {
        status[i] = 1;
        status[i - 1] = 1;
      } else if (status[i + 1] === 2) {
        status[i] = 1;
        status[i + 1] = 1;
      }
    }
  }

  // 체육수업을 들을 수 있는 학생 수 계산
  const answer = status.filter((s) => s > 0).length;
  return answer;
}