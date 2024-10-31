import CryptoJs from 'crypto-js';

const secretKey = 'mySecret'
//with crypto
export const setTokenStorage = (token: string) => {
    const encryptedToken = CryptoJs.AES.encrypt(token, secretKey).toString();
    localStorage.setItem('token', encryptedToken);
}


export const getTokenStorage = () => {
    const encryptedToken = localStorage.getItem('token');
    if (encryptedToken) {
        const bytes = CryptoJs.AES.decrypt(encryptedToken, secretKey);
        return bytes.toString(CryptoJs.enc.Utf8);
    }
    return null;
}