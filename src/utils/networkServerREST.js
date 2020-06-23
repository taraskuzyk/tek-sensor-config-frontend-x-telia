export async function getCustomerApplications(nsUrl, token){
    try {
        let response = await fetch(nsUrl+'/api/customer/applications', {
            method: 'GET',
            headers: {
                'accept': '*/*',
                'X-Authorization': 'Bearer ' + token,
            },
        });
        return await response.json();
    } catch (error) {
        console.warn(error);
    }
}

export async function getTokens(nsUrl, username, password) {
    try {
        let response = await fetch(nsUrl+'/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        });
        return await response.json();
    } catch (error) {
        console.warn(error);
    }
}
