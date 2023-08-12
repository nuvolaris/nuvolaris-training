    let form = {}

    function submit() {
        console.log(form)
        fetch(base+"insert", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        })
        .then(all)
        .catch(console.log)
        form = {}
    }

