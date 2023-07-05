<template>
  <div class="emloyee-form">
    <MISAForm maxWidth="900">
      <!-- header -->
      <template v-slot:header>
        <div class="header__left">
          <div class="form__title">
            {{ formTitle }}
          </div>
        </div>
        <div class="header__right">
          <MISAIcon
            class="icon--close"
          ></MISAIcon>
        </div>
      </template>
      <!-- content -->
      <template v-slot:content> </template>

      <!-- footer -->
      <template v-slot:footer> </template>
    </MISAForm>
  </div>
</template>

<script>
import MISAForm from "../../components/base/form/MISAForm.vue";
import MISAIcon from "../../components/base/form/MISAIcon.vue";
export default {
    name: 'DiscussForm',
    props:{
      MISAForm,
      MISAIcon
    }
}
</script>

<style scoped>
@import url("../../css/views/form/DisscussForm.css");
</style>
