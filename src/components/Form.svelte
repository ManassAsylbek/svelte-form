<script lang="ts">
    import InputField from './InputField.svelte';
    import Checkbox from './Checkbox.svelte';
    import SubmitButton from './SubmitButton.svelte';

    interface Errors {
        name?: string;
        company?: string;
        email?: string;
        message?: string;
        agree?: string;
    }

    let name: string = '';
    let company: string = '';
    let email: string = '';
    let phone: string = '';
    let subject: string = '';
    let message: string = '';
    let agree: boolean = false;

    let errors: Errors = {};

    const validate = (): boolean => {
        errors = {};
        if (!name) errors.name = 'Name is required';
        if (!company) errors.company = 'Company is required';
        if (!email || !/\S+@\S+\.\S+/.test(email)) errors.email = 'Valid email is required';
        if (!message) errors.message = 'Message is required';
        if (!agree) errors.agree = 'You must agree to the terms';
        return Object.keys(errors).length === 0;
    };

    const submitForm = () => {
        if (validate()) {
            alert('Form submitted successfully!');
            // Здесь будет логика отправки данных
        }
    };
</script>

<form on:submit|preventDefault={submitForm} class="max-w-sm mx-auto p-11  rounded-3xl   bg-[#171929]">
    <label  class="block text-lg text-white">For business enquiries please use the form below</label>/
    <div  class="block  text-gray-700">*Required</div>
    <InputField
            label="Name"
            bind:value={name}
            required={true}
            error={errors.name}
    />
    <InputField
            label="Company"
            bind:value={company}
            required={true}
            error={errors.company}
    />
    <InputField
            type="email"
            label="E-mail"
            bind:value={email}
            required={true}
            error={errors.email}
    />
    <InputField
            type="tel"
            label="Phone"
            bind:value={phone}
    />
    <InputField
            label="Subject"
            bind:value={subject}
    />
    <InputField
            label="Message"
            bind:value={message}
            required={true}
            error={errors.message}
    />

    <Checkbox bind:checked={agree}    error={errors.agree}/>


    <SubmitButton color="primary" />
</form>

<style>
    :global(body) {
        @apply bg-gray-100 font-sans;
    }
</style>
