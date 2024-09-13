import {useState} from 'react'
const useCardData = () => {
    const [quotes, setQuotes] = useState("Honesty is the best Policy");
    const fetchQuotes = async () => {
        try {
            const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
            const data = await response.json();  // Parse the JSON from the response
            setQuotes(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching the quotes', error);
        }
        
    };
    return {quotes,fetchQuotes};
}

export default useCardData;