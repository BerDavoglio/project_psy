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
        :src="['https://195.35.40.70:3096' + obj.image + '.jpg']"
        alt="" />
      <div className="col-span-4 m-2">
        <div className="font-bold text-xl">
          {{ obj.name }}
        </div>
        <div className="italic uppercase">
          {{ obj.specialization }}
        </div>
        <div className="">
          {{ obj.description }}
        </div>
      </div>
    </div>
    <div
      v-else
      className="bg-blue-200
    rounded-3xl my-4 mx-auto shadow-xl shadow-black/30
    grid grid-cols-1">
      <img
        className="m-auto rounded-full h-40 w-40"
        :src="obj.img"
        alt="" />
      <div className="col-span-4 m-2">
        <div className="font-bold text-xl">
          {{ obj.name }}
        </div>
        <div>{{ obj.text }}</div>
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
