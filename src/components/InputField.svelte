<script lang="ts">
    export let type: string = 'text';
    export let label: string = '';
    export let value: string = '';
    export let error: string = '';
    export let required: boolean = false;

    const handleInput = (e: Event) => {
        const target = e.target as HTMLInputElement;
        value = target.value;

        // Валидация на основе типа поля
        if (type === 'email') {
            validateEmail(target.value);
        } else if (type === 'tel') {
            validatePhone(target.value);
        }
    };

    // Простейшая валидация email
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            error = 'Please enter a valid email address';
        } else {
            error = '';
        }
    };

    // Валидация для номера телефона
    const validatePhone = (phone: string) => {
        const phoneRegex = /^[0-9]*$/;
        if (!phoneRegex.test(phone)) {
            error = 'Please enter a valid phone number';
        } else {
            error = '';
        }
    };
</script>

<div class="flex flex-col justify-start items-start mb-4 text-gray-600 hover:text-white focus:text-white">
    <label class="font-light text-sm">{label} {#if required}<span class="text-gray-600">*</span>{/if}</label>
    <input
            type={type}
            value={value}
            on:input={handleInput}
            class="border-b bg-transparent w-full py-1 text-white hover:text-white focus:outline-none {error && 'border-red-500'}"
            aria-invalid={error !== ''}
            pattern={type === 'tel' ? '[0-9]*' : undefined}
    />
    {#if error}
        <p class="text-red-500 text-xs italic mt-1">{error}</p>
    {/if}
</div>

