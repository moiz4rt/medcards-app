    function deleteFlashcard(id) {
        console.log(`Deletando flashcard com ID: ${id}`);
        fetch('/api/flashcards/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao deletar!');
            }
            return response.json();
        })
        .then(data => {
            alert('Deletado com sucesso!');
            location.reload(); // Recarrega a página após deletar
        })
        .catch(error => {
            console.error('Erro', error);
            alert('Erro ao deletar!');
        });
    }

