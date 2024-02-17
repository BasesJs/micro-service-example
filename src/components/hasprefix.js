import config from '../configuration/appsettings.json' assert { type: "json" };

export function hasPrefix(namepart) {    
    console.log(namepart);
    if (namepart.endsWith('.')) {
        return true;
    } else if(config['common-prefixes']['common-titles'].includes(namepart.toLowerCase())) {
        return true;
    }
    else if(config['common-prefixes']['formal-titles'].includes(namepart.toLowerCase())) {
        return true;
    }
    else if(config['common-prefixes']['religious-titles'].includes(namepart.toLowerCase())){
        return true;
    }
    else {
        return false;
    }
}
