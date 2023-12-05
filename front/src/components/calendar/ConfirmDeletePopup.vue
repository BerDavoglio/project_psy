<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div
      className="w-[600px] h-[140px] bg-white
      rounded-lg flex flex-col justify-between
      p-6">
      <div className="flex flex-row justify-between">
        <div className="font-semibold text-[16px]">
          Deletar Consulta?
        </div>
        <div
          className="cursor-pointer"
          @click="this.$emit('confirmDelete', [false, null])">
          <v-icon
            name="io-close"
            scale="1.25" />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div
          className="w-[241px] p-[12.5px] border-[#BFDBFF]
              border-2 text-[#BFDBFF] rounded-[8px] cursor-pointer
              mr-auto font-semibold text-center bg-white"
          @click="this.$emit('confirmDelete', [false, null])">
          Cancel
        </div>
        <div
          className="w-[241px] p-[12.5px] bg-[#BFDBFF]
              text-black rounded-[8px] cursor-pointer
              ml-auto font-semibold text-center"
          @click="deleteObj()">
          Deletar
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCalendarStore } from '../../store/store';
</script>

<script>
export default {
  name: 'ConfirmDeletePopup',
  props: ['pre_data'],
  data() {
    return {};
  },
  methods: {
    async deleteObj() {
      await useCalendarStore().deleteCalendar(this.pre_data);
      this.$emit('confirmDelete', [false, null]);
    },
  },
};
</script>
