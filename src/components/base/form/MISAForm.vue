<template>
    <div id="form-overlay" class="form-overlay">
      <div id="form" class="form" :style="{'max-width': maxWidth+'px'}">
        <!-- header go here -->
        <div class="form__header">
          <slot name="header"></slot>
        </div>
  
        <!-- content go here -->
        <div class="form__content">
          <slot name="content"></slot>
        </div>
  
        <!-- footer go here -->
        <div class="form__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MISAForm',
    props: {
      maxWidth: Number
    }
  }
  </script>
  
  <style scoped>
  @import url('./MISAForm.css');
  </style>
  