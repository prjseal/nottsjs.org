export const getAccessToken = (username, password) => {
    const postData = {
        grant_type: 'password',
        username,
        password,
    };

    const authUrl = 'http://nottsjs.localtest.me/umbraco/oauth/token';

    return new Promise((resolve, reject) => {
        return fetch(authUrl, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: encodePostData(postData),
        }).then((response) => {
            return response.json();
        })
            .then((data) => {
                return resolve(data.access_token);
            });
    });
}

export const encodePostData = (postData) => {
    if (!postData) throw new Error('No post data present.');
    return Object.keys(postData).map((key) => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(postData[key])}`;
    }).join('&');
}

export const getEvents = (token, nodeid) => {
    fetch('http://nottsjs.localtest.me/umbraco/rest/v1/content/1073/children', {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        this.setState({
            content: data._embedded.content,
        });
    });
}

export const getHomeContent = (token) => {
    return fetch('http://nottsjs.localtest.me/umbraco/rest/v1/content', {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
}