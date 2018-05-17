import decode from 'jwt-decode'


export function getTokenExpiration (token) {
    const decodedToken = decode(token)
    if(!decodedToken.exp) {
        return null
    }
    const date = new Date(0);
    date.setUTCSeconds(decodedToken.exp);
    
    return date;
}

export function isTokenExpired (token) {
    const expirationToken = getTokenExpiration(token)
    return expirationToken < new Date()
}