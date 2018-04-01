class HTTPService {

    get(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            
            xhr.open('GET', url);

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) { // request and response are ready

                    let response = xhr.responseText;

                    if (xhr.status == 200) {
                        resolve(JSON.parse(response));
                    } else {
                        console.log(response);
                        reject(response);
                    }

                }
            };

            xhr.send();
        });
    }
}