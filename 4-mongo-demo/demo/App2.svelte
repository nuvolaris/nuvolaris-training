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


