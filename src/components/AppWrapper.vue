<template>
  <div class="c-app-wrapper">
    <div class="c-main-content">
      <h1>Neue Bestellung</h1>
      <cc-new-order></cc-new-order>
    </div>
    <div class="c-sidebar">
    </div>
  </div>
</template>

<script>
  import NewOrder from '@/components/NewOrder';

  export default {
      components: {
        ccNewOrder: NewOrder,
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .c-app-wrapper {
    display: flex;
  }

  .c-main-content {
    background: #f2f2f2;
    width: 65vw;
  }

  .c-sidebar {
    background: #ccc;
    width: 35vw;
  }
</style>
