function solution(n, slicer, num_list) {
    const customSlice = (num_list, n, [a, b, c]) => {
        let result = [];
        switch(n) {
            case 1 :
                result = num_list.slice(0, b+1);
                break;
            case 2 :
                result = num_list.slice(a);
                break;
            case 3 :
                result = num_list.slice(a, b+1);
                break;
            case 4 :
                result = num_list.slice(a, b+1).filter((_, i) => i % c === 0);
                break;
            default :
                break;
        }
        return result;
    }
    return customSlice(num_list, n, slicer)
}