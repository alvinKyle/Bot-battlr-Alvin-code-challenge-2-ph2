function Button({ id, onDelete }) {
    function handleClick() {
        fetch(`http://localhost:3000/bots/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            onDelete(id);
        })
        .catch(error => {
            console.error('Error deleting bot:', error);
        });
    }

    return (
        <button onClick={handleClick} className="btn btn-danger">X</button>)
    }

    export default Button;