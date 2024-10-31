import React from 'react'
import DOMPurify from 'dompurify'

function XSSSample({ username }: any) {
    return <h1>{username}</h1>
}

export function Unsafecomponent({content}: any){
    const cleanContent = DOMPurify.sanitize(content)
    console.log("cleanContent", cleanContent)
    return <div dangerouslySetInnerHTML={{__html: cleanContent}} />
}

export function UserProfileImage({profileImage}: any){

    //url check
    if(!profileImage.startsWith("http")){
        return <div>Invalid Image</div>
    }

    return <img src={profileImage} alt="profile image" />
}

export default XSSSample


//XSS Cross Site Scripting(XSS) koruması kötü niyetli kullanıcıların uygulamaya zararlı JS kodu eklemesini engellemek için kullanılır. Reactjs otomatik olarak birçok  XSS koruması sağlar.
