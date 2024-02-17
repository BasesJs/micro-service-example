export function hasSuffix(lastWord) {
    const commonSuffixes = ["Jr", "Sr", "III", "IV", "V"];
    for (const suffix of commonSuffixes) {
        if (lastWord === suffix) {
            return true;
        }
    }

    return false;
}
