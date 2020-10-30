<template>
    <ul>
        <ItemComponent :fromCart="true"></ItemComponent>
    </ul>
</template>

<script>
import ItemComponent from '../components/ItemComponent';
export default {
    components: {
        ItemComponent
    }
}
</script>