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


//CleanUp Kullanım Alanları
//1. Event Listener
//2. Fetch Request
//3. SetInterval
//4. socket connection
