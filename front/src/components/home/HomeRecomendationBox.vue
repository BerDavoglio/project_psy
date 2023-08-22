<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<template>
  <div>
    <div className="p-2 text-lg
        w-96 bg-purple-800
        rounded-md m-auto text-white">
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
