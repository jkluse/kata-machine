export default function bs_list(haystack: number[], needle: number): boolean {
    let high = haystack.length;
    let low = 0;

    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2);

        let val = haystack[mid];
        if (val === needle) {
            return true;
        } else if (val > needle) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return false;
}
