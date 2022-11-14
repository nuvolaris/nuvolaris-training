let select = ""
let data = []
let form = {}
async function all()  {
      let res = await fetch(base+"select.json")
      let body = await res.json()
      data = body.data
}
function submit() {
        fetch(base+"insert", { method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(form) }).then(all)
        form = {}
}
function remove() {
    fetch(base+"delete?id="+select).then(all).catch(console.log)
}
// init
onMount(all)
