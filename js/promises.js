const wait = (number) => {
    return new Promise(function (resolve, reject) {
       setTimeout( function(){
          resolve(`You will see this after ${number /1000} seconds`);
       }, number);
    });
};

wait(3000).then(function (value) {
    console.log(value);
});

const myToken ='b336abf0db4b5ca1a2fb402d2e526d98409ae942';


const fetchOptions = {
    headers: {"Authorization": `token ${myToken}`}
};

const checkResponseForErrors = response => {
    console.group('checkResponseForErrors');
    console.log(response);
    console.groupEnd();
    if (response.status !== 200) {
        return Promise.reject(response);
    }
    return Promise.resolve(response);
};

const parseResponseAsJson = response => {
    console.group('parseResponseAsJson')
    console.log(response)
    console.groupEnd()
    const jsonResponse = response.json();
    return jsonResponse;
}

const getSecondElement = ([first, second]) => second;

function getId(githubApiObject) {
    console.group('getId')
    console.log(githubApiObject)
    console.groupEnd()
    return githubApiObject;
}

function logData(data) {
    console.group('logData')
    console.log(`username: ${data.login} last commit: ${data.created_at}`);
    console.groupEnd();
};

function fetchJson(username) {
    return fetch(`https://api.github.com/users/${username}`, fetchOptions)
        .then(checkResponseForErrors)
        .then(parseResponseAsJson)
};

fetchJson('aziztalyahya')
    // .then(getSecondElement)
    .then(getId)
    .then(logData);