<template>
    <div class="flex flex-col sm:flex-row sm:justify-between">
        <div class="flex flex-col sm:w-3/6">
            <div class="selected-image mb-2">
                <img :src="oferta.imagens[0]" alt="">
            </div>
            <div class="thumbnails flex flex-row justify-between">
                <img v-for="imagem in oferta.imagens.slice(1, 3)" :key="imagem" :src="imagem" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                oferta: {}
            }
        },
        computed: {
            ofertaId() {
                return this.$route.params['id'];
            }
        },
        methods: {
            getOfertaById() {
                this.oferta = this.$store.getters['ofertas/getOfertaById'](this.ofertaId);
                console.log(this.oferta);
            }
        },
        created() {
            this.getOfertaById();
        }
    }
</script>

<style scoped>
    
</style>