export function formatDate(timestamp) {
    const date = new Date(parseInt(timestamp, 10)); // Convert milliseconds to Date object
    const day = String(date.getUTCDate()).padStart(2, '0'); // Get the day with leading zero
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Get the month (0-indexed) with leading zero
    const year = date.getUTCFullYear(); // Get the year

    // Use string concatenation instead of template literals
    return month + '/' + day + '/' + year; // Return formatted date as MM/DD/YYYY
}