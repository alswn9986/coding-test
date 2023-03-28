function solution(chicken) {
    // 쿠폰은 치킨 수 만큼
    let coupon = chicken
    // 서비스 받은 치킨 수
    let service = 0
    while(coupon >= 10) {
        service += coupon / 10 << 0
        coupon = coupon % 10 + coupon / 10 << 0
    }
    return service
}