function cInterest(P, r, n, t) {
    
    return (P * ((1 + r / n)**(n * t)));

}

export {
    cInterest
}