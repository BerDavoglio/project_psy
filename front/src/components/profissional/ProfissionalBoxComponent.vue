<!-- eslint-disable max-len -->
<template>
  <div class="profissional-box-component mx-2">
    <div
      v-if="!isCell"
      className="max-w-[56rem] bg-blue-200
    rounded-3xl my-4 mx-auto shadow-xl shadow-black/30
    grid grid-cols-5
    hover:scale-[110%] transform transition duration-50 hover:z-10">
      <img
        :className="['m-auto rounded-full h-40 w-40 my-4 object-cover  '
          + (i % 2 == 0 ? '' : 'order-last')]"
        :src="['http://localhost:3096' + this.obj.image]"
        alt="" />
      <div className="col-span-4 m-2">
        <div className="font-bold text-xl">
          {{ this.obj.name }}
        </div>
        <div className="italic uppercase">
          {{ this.obj.specialization }}
        </div>
        <text-clamp
          :text='this.obj.description'
          :max-lines='6' />
      </div>
    </div>
    <div
      v-else
      className="bg-blue-200
    rounded-3xl my-4 mx-auto shadow-xl shadow-black/30
    grid grid-cols-1">
      <img
        className="m-auto rounded-full h-40 w-40"
        :src="this.obj.img"
        alt="" />
      <div className="col-span-4 m-2">
        <div className="font-bold text-xl">
          {{ this.obj.name }}
        </div>
        <div>{{ this.obj.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfissionalBoxComponent',
  props: ['obj', 'i', 'isCell'],
};
</script>
