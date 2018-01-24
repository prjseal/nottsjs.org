export const getAccessToken = () => {
    var username = 'setup@codeshare.co.uk', password = 'setup@codeshare.co.uk';
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