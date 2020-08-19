domainName = (url) => {
    empArr = []
    for (var i = 0; i < url.length; i++) {

        if (url[0].toLowerCase() === 'w') {
            empArr.push(url[4 + i])
        }
        if (url[0].toLowerCase() === 'h') {
            if (url[4].toLowerCase() === 's' && url[7].toLowerCase() === 'w' || url[4].toLowerCase() === ':' && url[7].toLowerCase() === 'w') {
                empArr.push(url[11 + i])
            } else if (url[5].toLowerCase() === ':') {
                if (url[5].toLowerCase() === ':' && url[8].toLowerCase() === 'w') {
                    empArr.push(url[12 + i]);
                } else empArr.push(url[8 + i]);

            }
            else {
                empArr.push(url[7 + i])
            }
        } if (url[0].toLowerCase() != 'w' && url[0].toLowerCase() != 'h') {
            empArr.push(url[i])
        }
    } var newUrl = empArr.toString().replace(/,/g, '');
    let dotRe = newUrl.indexOf(".")
    return newUrl.slice(0, dotRe)

}