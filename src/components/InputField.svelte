<script lang="ts">
    export let type: string = 'text';
    export let label: string = '';
    export let value: string = '';
    export let error: string = '';
    export let required: boolean = false;

    const handleInput = (e: Event) => {
        const target = e.target as HTMLInputElement;
        value = target.value;
    };
</script>

<div class="flex flex-col justify-start items-start mb-4 text-gray-600 hover:text-white  focus:text-white ">
    <label class="font-light">{label} {#if required}<span class="text-gray-600">*</span>{/if}</label>
    <input
            type={type}
            value={value}
            on:input={handleInput}
            class="border-b bg-transparent w-full py-2 text-white hover:text-white focus:outline-none  {error && 'border-red-500'}"
            aria-invalid={error !== ''}
    />
    {#if error}
        <p class="text-red-500 text-xs italic mt-2">{error}</p>
    {/if}
</div>
