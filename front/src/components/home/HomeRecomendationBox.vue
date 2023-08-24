<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<template>
  <div>
    <div className="p-2 text-lg
        w-96 bg-blue-200
        rounded-md m-auto
        hover:scale-[110%] transform transition duration-50 hover:z-10">
        <div className="text-bold text-left">
          {{ this.obj.title }}
        </div>
        <div className="italic text-justify text-sm my-2">
          {{ this.obj.text }}
        </div>
        <div className="text-right">
          {{ this.obj.name }}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecomendationBox',
  props: ['obj'],
  data: () => ({
    hover: false,
  }),
};
</script>
