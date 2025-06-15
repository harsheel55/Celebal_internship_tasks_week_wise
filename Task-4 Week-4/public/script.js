async function testAPI() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Testing API endpoints...\n\n';
    
    const endpoints = [
        { method: 'GET', url: '/' },
        { method: 'GET', url: '/about' },
        { method: 'GET', url: '/users' },
        { method: 'GET', url: '/api/status' }
    ];
    
    for (const endpoint of endpoints) {
        try {
            const response = await fetch(endpoint.url);
            const data = await response.json();
            resultsDiv.innerHTML += `${endpoint.method} ${endpoint.url}:\n`;
            resultsDiv.innerHTML += JSON.stringify(data, null, 2) + '\n\n';
        } catch (error) {
            resultsDiv.innerHTML += `Error testing ${endpoint.url}: ${error.message}\n\n`;
        }
    }
}