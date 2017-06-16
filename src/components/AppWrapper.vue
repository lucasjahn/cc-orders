<template>
  <div class="c-app-wrapper">
    <cc-new-order></cc-new-order>
    <cc-footer-bar></cc-footer-bar>
  </div>
</template>

<script>
  import NewOrder from '@/components/NewOrder';
  import FooterBar from '@/components/FooterBar';

  export default {
      components: {
        ccNewOrder: NewOrder,
        ccFooterBar: FooterBar,
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }

  .c-app-wrapper {
    margin-top: 60px;
  }

  .c-container {
    max-width: 70%;
    margin: 0 auto;
  }
</style>
