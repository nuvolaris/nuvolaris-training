<script>
    // configurations
    import { onMount } from 'svelte'
    let base =  "http://a2e67cd39e61a49b28de5f182e58418a-553827685.us-east-1.elb.amazonaws.com/api/v1/web/nuvolaris/address/"

    // data
    let data = []
    let select = ""

    // retrieve all data
    async function all()  {
      let res = await fetch(base+"select.json")
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
    fetch(base+"delete?id="+select)
    .then(all)
    .catch(console.log)
}
</script>
<link rel="stylesheet" href="https://unpkg.com/mvp.css@1.12/mvp.css">
<main><section>
  <table>
    <tr>
      <th></th><th>Name</th><th>Company</th><th>Phone</th>
    </tr>
    {#each data as row}
      <tr>
        <td><input type="radio" bind:group={select} 
                   value={row.id}></td>
        <td><b>{row.name}</b></td>
        <td><i>{row.email}</i></td>
        <td><tt>{row.phone}</tt></td>
      </tr>
    {/each}
  </table>
</section></main>

<main><section>
  <form>
       <input placeholder="Name" 
              bind:value={form.name} />
       <br />
       <input placeholder="Email"
              bind:value={form.email} />
       <br />
       <input placeholder="Phone" 
              bind:value={form.phone} />
   </form>
</section></main>
<main><section>
    <button on:click={submit}>Add</button>
    &nbsp;
    <button on:click={remove}>Remove</button>
</section></main>
