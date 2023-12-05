<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div
      className="w-[600px] h-[200px] bg-white
      rounded-lg flex flex-col justify-between
      p-6">
      <div className="flex flex-row justify-between">
        <div className="font-semibold text-[16px]">
          Finalizar Consulta?
        </div>
        <div
          className="cursor-pointer"
          @click="this.$emit('confirmFinish', [false, null])">
          <v-icon
            name="io-close"
            scale="1.25" />
        </div>
      </div>
      <div className="text-sm mt-2">
        Pontos a serem Adicionados
      </div>
      <div
        className="w-[100%] m-auto mb-2
          border-[0.1rem] border-gray-400 bg-white rounded-[0.3rem]">
        <input
          v-model="points"
          placeholder="Pontos a serem Adicionados"
          className="h-10 w-full px-3">
      </div>
      <div className="w-full flex flex-row justify-between">
        <div
          className="w-[241px] p-[12.5px] border-[#BFDBFF]
              border-2 text-[#BFDBFF] rounded-[8px] cursor-pointer
              mr-auto font-semibold text-center bg-white"
          @click="this.$emit('confirmFinish', [false, null])">
          Cancel
        </div>
        <div
          className="w-[241px] p-[12.5px] bg-[#BFDBFF]
              text-black rounded-[8px] cursor-pointer
              ml-auto font-semibold text-center"
          @click="finishObj()">
          Finalizar
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLoginStore } from '../../store/store';
</script>

<script>
export default {
  name: 'ConfirmFinishPopup',
  props: ['pre_data'],
  data() {
    return {
      points: 0,
    };
  },
  methods: {
    async finishObj() {
      const store = useLoginStore();
      await store.changePoints(this.pre_data, this.points);
      this.$emit('confirmFinish', [false, null]);
    },
  },
  beforeMount() {
    console.log(this.pre_data);
  },
};
</script>
