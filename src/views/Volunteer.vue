<template>
  <main>
    <button class="apply" @click="volunteerApply = true">報名加入</button>
  </main>
  <VolunteerApply v-if="volunteerApply"></VolunteerApply>
</template>

<script>
import VolunteerApply from "@/components/VolunteerApply.vue";
export default {
  components: { VolunteerApply },
  data() {
    return {
      volunteerApply: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.apply {
  background: color.$brown_300;
  color: white;
  font-size: 25px;
  font-weight: 900;
  border-radius: 10px;
  padding: 20px 50px;
  cursor: pointer;
}
</style>
