const fetchTricks = () => {
    const fetchAll = fetch("http://localhost:3001/api/v1/tricks")
        .then(response => response.json())
    return fetchAll
}

export { fetchTricks }