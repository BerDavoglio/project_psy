<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div
      :className="['max-w-[56rem] bg-blue-200 rounded-3xl my-4 shadow-xl shadow-black/30 grid mx-auto '
        + (isCell ? 'grid-cols-1' : 'grid-cols-6')]">
      <img
        className="m-auto rounded-full h-28 w-28 my-4 object-cover"
        :src="['http://195.35.40.70:3096' + this.obj.image]"
        alt="" />
      <div :className="['m-2 ' + (isCell ? '' : 'col-span-4')]">
        <div>
          <div className="font-bold text-xl">
            {{ this.obj.name }}
          </div>
          <div className="font-bold">
            {{ this.obj.specialization }}
          </div>
        </div>
        <text-clamp
          :text='this.obj.description'
          :max-lines='5' />
      </div>
      <div className="flex flex-col place-content-center">
        <div
          className="py-1 px-8 m-2 rounded-lg cursor-pointer bg-yellow-400"
          @click="this.$router.push({ name: 'admin-new-employee', params: { id: this.obj.id } });">
          Editar
        </div>
        <div
          className="py-1 px-8 m-2 rounded-lg cursor-pointer bg-red-400"
          @click="useProfissionalStore().deleteProfissional(this.obj)">
          Apagar
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProfissionalStore } from '../../store/store';
</script>

<script>
export default {
  name: 'AdminEmployeeBox',
  props: ['obj', 'isCell'],
};
</script>
