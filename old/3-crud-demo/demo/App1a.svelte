    let form = {}

    function submit() {
        console.log(form)
        fetch(base+"set", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        })
        .then(all)
        .catch(console.log)
        form = {}
    }

