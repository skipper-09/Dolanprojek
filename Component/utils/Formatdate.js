export function Formatdate(dateString) {
    return (new Date(dateString)).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

}
