<form>
  <input placeholder="Name" 
         bind:value={form.name}><br>
  <input placeholder="Company" 
         bind:value={form.company}><br>
  <input placeholder="Phone" 
         bind:value={form.phone}><br>
</form>
<button on:click={submit}>Add</button>

