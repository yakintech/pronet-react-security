import React, { useEffect, useState } from 'react'

function List2() {
    const [products, setproducts] = useState([])


    useEffect(() => {
        function handleScroll(e: any) {
            console.log(window.scrollX, window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
         return () => window.removeEventListener('scroll', handleScroll);
    }, [])


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('http://localhost:3002/api/hello', { signal })
            .then(response => response.json())
            .then(data => {
                console.log("data", data)
                setproducts(data)
            })
            .catch(error => console.error(error))

        return () => {
            // controller.abort()
        }
    }, [])


    return <>
    </>
}

export default List2


//Güvenlik açısından cleanup function önemi
// 1. Ağ trafiğinin azaltılması
// 2. Websocket (Socket.io, SignalR) bağlantılarının kapatılması. Böylelikle sunucu kaynakları boşa çıkar.
//3. Bellek sızıntılarının önlenmesi. Event listener'lar, setInterval, setTimeout vb. fonksiyonlar bellekte yer kaplar ve sayfa değiştiğinde bellekten silinmezler. Bu yüzden sayfa değiştiğinde bu fonksiyonları temizlemek önemlidir.