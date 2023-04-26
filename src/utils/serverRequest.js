const URL =  "http://localhost:3001/test"

export async function postTest(data){
    try {
        const _response = await fetch(URL, 
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    // const resData = await response.json()
    } catch(err){
        console.log(err.message);
    }
    
}


 