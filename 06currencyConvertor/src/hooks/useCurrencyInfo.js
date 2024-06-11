import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.6.11/v1/currencies/${currency}.json`)
            // the previous api was not working sir please update this code  our so that community can use it easily.... thank you sir for providing such good content and explaining it for free.

        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
