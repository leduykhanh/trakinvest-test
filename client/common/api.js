let host = '';
if (process.env.NODE_ENV === 'production') {
  host = '';
} else {
  host = 'http://localhost:8000/api/';
}
export const API_ROOT = host;