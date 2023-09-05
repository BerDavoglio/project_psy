<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<template>
  <div>
    <div className="p-2 text-lg
        max-w-96 bg-blue-200 mx-4
        rounded-md m-auto
        hover:scale-[110%] transform transition duration-50 hover:z-10">
      <div className="text-bold text-left">
        {{ this.obj.title }}
      </div>
      <text-clamp :text='this.obj.text'
                  :max-lines='5'
                  className="italic text-justify text-sm my-2" />
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
