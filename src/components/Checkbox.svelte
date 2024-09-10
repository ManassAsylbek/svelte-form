

<script lang="ts">
    export let label: string = 'Terms and Privacy Policy';
    export let checked: boolean = false;
    export let error: string = '';

    const toggle = () => {
        checked = !checked;
    };
</script>
<div class="mb-4">
<div class="flex justify-center items-center mb-4 hover:text-white" >
    <!-- Скрытый стандартный чекбокс -->
    <div class="relative">
        <input
                type="checkbox"
                bind:checked={checked}
                on:change={toggle}
                class="absolute opacity-0 h-0 w-0"
        />
        <!-- Кастомный чекбокс с иконкой -->
        <div on:click={toggle} class="w-6 h-6 border-2 border-primary-700 rounded-md flex items-center justify-center cursor-pointer transition-colors duration-200 hover:border-primary-500 {checked ? 'bg-primary-700 border-primary-700' : 'bg-transparent'}">
            {#if checked}
                <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 13l4 4L19 7" />
                </svg>
            {/if}
        </div>
    </div>

    <div>

    </div>
    <!-- Лейбл с отступом -->
    <label class="ml-2 text-gray-600 cursor-pointer text-sm" >I accept <a href="#" class="text-gray-400 hover:text-white underline">{label}</a></label>

</div>
    {#if error}
        <p class="text-red-500 text-xs italic mt-1">{error}</p>
    {/if}
</div>

