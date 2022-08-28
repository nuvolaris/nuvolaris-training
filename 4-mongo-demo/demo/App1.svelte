<script>
    // configurations
    import { onMount } from 'svelte'
    let base =  "http://localhost:3233/api/v1/web/nuvolaris/addr/"

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


