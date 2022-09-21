<template>
    <div class="flex flex-col sm:flex-row p-4">
        <div class="payment-container w-full sm:w-3/6 mb-12">
            <h2 class="text-lg font-bold">Pagamento</h2>
            <form class="sm:w-4/6 mt-4 flex flex-wrap justify-between">
                <input class="w-full p-2 mb-4 rounded-lg" type="text" name="card-number" id="card-number" placeholder="Número do cartão">
                <input class="w-full p-2 mb-4 rounded-lg" type="text" name="card-name" id="card-name" placeholder="Nome impresso no cartão">
                <input class="w-custom p-2 mb-4 rounded-lg" type="text" name="card-expire-date" id="card-expire-date" placeholder="Validade">
                <input class="w-custom p-2 mb-4 rounded-lg" type="text" name="card-expire-date" id="card-expire-date" placeholder="CCV">
                <base-button class="w-full mt-4" @click.prevent="pay" type="payment" title="Pagar agora!"></base-button>
            </form>
        </div>
        <div class="w-full md:w-3/6">
            <h2 class="text-lg font-bold text-center">Resumo da compra</h2>
        </div>
    </div>
</template>

<script>
    import BaseButton from '../../components/UI/BaseButton.vue';

    export default {
        components: {
            BaseButton
        }
    }
</script>

<style scoped>
    input {
        border: 1px solid var(--dark-gray-500);
    }

    .w-custom {
        width: calc(50% - 1rem);
    }

    @media (min-width: 640px) {
        .payment-container {
            border-right: 1px solid var(--dark-gray-500);
        }
    }
</style>