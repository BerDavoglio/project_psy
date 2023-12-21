<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<template>
  <div>
    <div
      className="p-2 text-lg
        max-w-96 min-h-[200px] bg-blue-200 mx-4
        rounded-md m-auto
        hover:scale-[110%] transform transition duration-50 hover:z-10
        flex flex-col justify-between">
      <div>
        <div className="text-bold text-left">
          {{ obj.name }}
        </div>
        <div className="italic text-justify text-sm my-2">
          {{ obj.text }}
        </div>
      </div>
      <div className="text-right">
        Google Ads{{ obj.rate != '' ? (' - ⭐' + obj.rate) : '' }}
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
