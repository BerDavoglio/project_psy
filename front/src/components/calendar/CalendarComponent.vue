<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <div class="calendar-component">
    <div className="w-[42rem] m-auto">
      <div className="grid grid-cols-7">
        <div className="w-[6rem] h-[1rem] text-[0.7rem] border-[0.5px]">Domingo</div>
        <div className="w-[6rem] h-[1rem] text-[0.7rem] border-[0.5px]">Segunda</div>
        <div className="w-[6rem] h-[1rem] text-[0.7rem] border-[0.5px]">Terça</div>
        <div className="w-[6rem] h-[1rem] text-[0.7rem] border-[0.5px]">Quarta</div>
        <div className="w-[6rem] h-[1rem] text-[0.7rem] border-[0.5px]">Quinta</div>
        <div className="w-[6rem] h-[1rem] text-[0.7rem] border-[0.5px]">Sexta</div>
        <div className="w-[6rem] h-[1rem] text-[0.7rem] border-[0.5px]">Sábado</div>
      </div>
      <div className="grid grid-cols-7">
        <div className="w-[6rem] h-[6rem] border-[0.5px] border-red-500 hover:bg-red-600"
             v-for="marker in (new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay())"
             v-bind:key="marker">
        </div>
        <div :className="['w-[6rem] h-[6rem] border-[0.5px] hover:bg-blue-300 cursor-pointer '
          + (day === selectedDay ? 'bg-blue-200' : '')]"
             v-for="day in (new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate())"
             v-bind:key="day"
             @click="changeDay(day)">
          {{ day }}
          <div className="flex place-items-center justify-center ">
            <div v-for="obj in list"
                 v-bind:key="obj">
              <div v-if="new Date(obj.date).getDate() === day">
                <div className="h-2 w-2 rounded-full bg-blue-400 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-[42rem] border-2 rounded-lg shadow-xl">
        <div className="text-xl m-2">
          Dia Selecionado: {{ selectedDay }}
        </div>
        <div v-if="listInfo.length != 0">
          <div v-for="obj in listInfo"
               v-bind:key="obj">
            <div className="grid grid-cols-4 text-justify bg-blue-200 rounded-xl m-2">
              <div className="m-2">
                {{ obj.patient.name }}
              </div>
              <div className="m-2">
                {{ new Date(obj.date).getHours() }}hr {{ new Date(obj.date).getMinutes() }}min
              </div>
              <div className="m-2">
                {{ obj.description }}
              </div>
              <div className="my-2 mx-auto">
                <div className="py-1 px-8 m-2 rounded-lg cursor-pointer bg-yellow-400">Editar</div>
                <div className="py-1 px-8 m-2 rounded-lg cursor-pointer bg-red-400">Apagar</div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="selectedDay === 0"
             className="my-20">
          Selecione um dia!
        </div>
        <div v-else
             className="my-20">
          Não há nenhum horário marcado para esse dia!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarComponent',
  data() {
    return {
      date: new Date(),
      selectedDay: 0,
      list: [
        {
          date: '2023-08-25T12:00:00',
          patient: {
            id: 112,
            name: 'Joãozinho',
          },
          description: 'Consulta com a Doutora X',
        },
        {
          date: '2023-08-28T12:00:00',
          patient: {
            id: 154,
            name: 'Laura',
          },
          description: 'Consulta com a Doutora Y; Fazer exames X, Y e Z',
        },
        {
          date: '2023-08-12T12:00:00',
          patient: {
            id: 2,
            name: 'Vitoria',
          },
          description: 'Consulta com a Doutora X',
        },
      ],
      listInfo: [],
    };
  },
  methods: {
    changeDay(day) {
      this.selectedDay = day;
      this.changeListInfo();
    },
    changeListInfo() {
      const l = [];

      this.list.forEach((obj) => {
        if (new Date(obj.date).getDate() === this.selectedDay) {
          l.push(obj);
        }
      });

      this.listInfo = l;
    },
  },
};
</script>
