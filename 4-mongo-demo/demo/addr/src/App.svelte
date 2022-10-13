<script>
    // configurations
    import { onMount } from 'svelte'
    let base =  "http://dev.nuvolaris.io/api/v1/web/nuvolaris/addr/"

    // data
    let data = []
    let select = ""

    // retrieve all data
    async function all()  {
      let res = await fetch(base+"all.json")
      let body = await res.json()
      data = body.data
      console.log(data)
    }

    // init
    onMount(all)


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

function remove() {
    console.log(select)
    fetch(base+"del?name="+select)
    .then(all)
    .catch(console.log)
}
</script>
<link rel="stylesheet" href="https://unpkg.com/mvp.css@1.12/mvp.css">
<table>
  <tr>
    <th></th><th>Name</th><th>Company</th><th>Phone</th>
  </tr>
  {#each data as row}
      <tr>
        <td><input type="radio" bind:group={select} 
                   value={row.name}></td>
        <td>{row.name}</td>
        <td><tt>{row.company}</tt></td>
        <td><i>{row.phone}</i></td>
      </tr>
  {/each}
</table>


<form>
  <input placeholder="Name" 
         bind:value={form.name}><br>
  <input placeholder="Company" 
         bind:value={form.company}><br>
  <input placeholder="Phone" 
         bind:value={form.phone}><br>
</form>
<button on:click={submit}>Add</button>

<button on:click={remove}>Remove</button>
