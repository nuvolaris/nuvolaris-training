</script>
<main><section>
  <table>
    <tr>
      <th></th><th>Name</th><th>Company</th><th>Phone</th>
    </tr>
    {#each data as row}
      <tr>
        <td><input type="radio" bind:group={select} 
                   value={row.name}></td>
        <td><b>{row.name}</b></td>
        <td><i>{row.company}</i></td>
        <td><tt>{row.phone}</tt></td>
      </tr>
    {/each}
  </table>
</section></main>

