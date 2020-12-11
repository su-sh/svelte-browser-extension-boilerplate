<script>
  export let id;
  export let name;
  export let autocomplete;
  export let placeholder;
  export let required = false;
  export let value;
  export let type = "text";

  const handleInput = (e) => {
    value = e.target.value;
  };
</script>

<div>
  <input
    {id}
    {name}
    {type}
    {autocomplete}
    {required}
    on:input={handleInput}
    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    {placeholder} />
</div>
