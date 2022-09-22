<template>
    <h2>Ofertas</h2>
    {{ ofertaId }}
</template>

<script>
    export default {
        computed: {
            ofertaId() {
                return this.$route.params['id'];
            }
        }
    }
</script>