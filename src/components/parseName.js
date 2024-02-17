import { hasSuffix } from '../components/hassuffix.js';
import { hasPrefix } from '../components/hasprefix.js';

export function parseName(fullName) {
    // Initialize variables to store parsed components
    let person = {
        prefix: '',
        firstname: '',
        middlename: '',
        lastname: '',
        suffix: '',
        confidence: 100
    }
    const nameParts = fullName.replace("  ", " ").split(' ');
    let weight = person.confidence / nameParts.length;

    console.log(`The name has ${nameParts.length} pieces.`)

    if(nameParts.length == 1){
        person.confidence = 50;
        person.firstname = nameParts[0];
    }

    if(nameParts.length == 2){        
        if(hasPrefix(nameParts[0])){
            person.confidence = person.confidence - (weight * .75);
            person.prefix = nameParts[0];
            person.firstname = nameParts[1];
        }
        else if(hasSuffix(nameParts[1])){
            person.confidence = person.confidence - (weight * .75);
            person.suffix = nameParts[1];            
            person.firstname = nameParts[0];
        }     
        else {
            person.firstname = nameParts[0];
            person.lastname = nameParts[1];
        }
    }
    if(nameParts.length == 3){
        if(hasPrefix(nameParts[0])){
            person.confidence = person.confidence - (weight * .75);
            person.prefix = nameParts[0];
            person.firstname = nameParts[1];
            person.lastname = nameParts[2];
        }
        else if(hasSuffix(nameParts[2])){
            person.confidence = person.confidence - (weight * .75);
            person.suffix = nameParts[2];            
            person.firstname = nameParts[0];
            person.lastname = nameParts[1];
        }   
        else{
            person.firstname = nameParts[0];
            person.middlename = nameParts[1];
            person.lastname = nameParts[2];
        }
    }
    // Return an object containing parsed components
    return person;
}

    /* Assign parts based on their positions
    switch (nameParts.length) {
        case 1:
            // Only first name provided
            firstName = nameParts[0];
            break;
        case 2:
            // First name and last name provided
            firstName = nameParts[0];
            lastName = nameParts[1];
            break;
        case 3:
            // First name, middle name/initial, and last name provided
            firstName = nameParts[0];
            middleName = nameParts[1];
            lastName = nameParts[2];
            break;
        case 4:
            // Prefix, first name, last name, and suffix provided
            prefix = nameParts[0];
            firstName = nameParts[1];
            lastName = nameParts[2];
            suffix = nameParts[3];
            break;
        case 5:
            // Prefix, first name, middle name/initial, last name, and suffix provided
            prefix = nameParts[0];
            firstName = nameParts[1];
            middleName = nameParts[2];
            lastName = nameParts[3];
            suffix = nameParts[4];
            break;
        default:
            // If more than 5 parts are provided, only consider first name and last name
            firstName = nameParts[0];
            lastName = nameParts[nameParts.length - 1];
            break;
    }*/