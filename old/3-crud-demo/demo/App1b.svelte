function remove() {
    console.log(select)
    fetch(base+"del?name="+select)
    .then(all)
    .catch(console.log)
}
