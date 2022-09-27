<template>
    <div class="flex flex-col sm:flex-row sm:justify-between">
        <div class="flex flex-col items-center sm:w-3/6">
            <div class="selected-image mb-2">
                <img :src="oferta.imagens[selectedImageIndex]" alt="">
            </div>
            <div class="thumbnails flex flex-row flex-wrap justify-evenly">
                <img class="ml-1 mr-1 mb-4" @click="setSelectedImage" :class="{ 'selected-thumb': index == selectedImageIndex }" v-for="(imagem, index) in oferta.imagens" :key="imagem" :data-index="index" :src="imagem" alt="">
            </div>
        </div>
        <div class="flex flex-col items-center sm:w-3/6">
            <h2 class="mt-4 text-xl font-bold">{{ oferta.empresa }}</h2>
            <p class="mt-4">{{ oferta.descricao }}</p>
            <p class="mt-4"> por apenas </p>
            <p class="text-xl font-bold mt-4">{{preco}}</p>
            <base-button @click.prevent="addItemToShoppingCart" type="confirm" class="mt-8 w-full sm:w-max" title="Comprar"></base-button>

        </div>
    </div>
</template>

<script>
    import BaseButton from '../../components/UI/BaseButton.vue';

    export default {
        components: {
		    BaseButton
	    },
        data() {
            return {
                selectedImageIndex: 0,
                oferta: {}
            }
        },
        computed: {
            ofertaId() {
                return this.$route.params['id'];
            },
            preco() {
			    return 'R$ ' + this.oferta.preco.toFixed(2).replace('.', ',');
		    }
        },
        methods: {
            getOfertaById() {
                this.oferta = this.$store.getters['ofertas/getOfertaById'](this.ofertaId);
                console.log(this.oferta);
            },
            setSelectedImage(event) {
                const newIndex = event.target.getAttribute('data-index');
                this.selectedImageIndex = parseInt(newIndex);
            },
            addItemToShoppingCart() {
			    this.$store.dispatch('carrinho/addItem', this.oferta);
		    },
        },
        created() {
            this.getOfertaById();
        }
    }
</script>

<style scoped>
    .selected-image {
        max-width: 620px;
    }

    .selected-image img {
        max-width: auto;
    }
    
    .thumbnails img {
        cursor: pointer;
        max-width: 25%;
    }

    .selected-thumb {
        outline: 4px solid var(--green-600);
    }

    @media (min-width: 640px) {
        .selected-image {
            max-height: 540px;
        }
    }
</style>