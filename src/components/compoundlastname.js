function hasCompoundLastName(fullName) {
    // Split the full name into parts using spaces
    const nameParts = fullName.trim().split(' ');

    // Check if there are at least two parts
    if (nameParts.length < 2) {
        return false; // Cannot have a compound last name if there is only one part
    }

    // Get the last word and the word preceding it
    const lastWord = nameParts[nameParts.length - 1];
    const precedingWord = nameParts[nameParts.length - 2];

    // Check if both the last word and the word preceding it are capitalized
    if (isCapitalized(lastWord) && isCapitalized(precedingWord)) {
        return true;
    }

    return false;
}

// Helper function to check if a word is capitalized
function isCapitalized(word) {
    return /^[A-Z][a-z]*$/.test(word);
}