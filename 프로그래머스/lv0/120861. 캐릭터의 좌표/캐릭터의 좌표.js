function solution(keyinput, board) {
    var answer = [0,0];
    const move = (direction)=>{
        switch (direction){
            case "left": 
             answer[0] = Math.abs(answer[0] - 1)<=Math.floor(board[0]/2) 
                    ? answer[0]-1 : answer[0]
                break;
            case "right": 
             answer[0] = Math.abs(answer[0] + 1)<=Math.floor(board[0]/2) 
                    ? answer[0]+1 : answer[0]
                break;
            case "up": 
             answer[1] = Math.abs(answer[1] + 1)<=Math.floor(board[1]/2) 
                    ? answer[1]+1: answer[1]
                break;
            case "down": 
             answer[1] = Math.abs(answer[1] - 1)<=Math.floor(board[1]/2) 
                    ? answer[1]-1 : answer[1]
                break;
        }
        }
    for(const input of keyinput){
        move(input)
    }
    return answer;
}