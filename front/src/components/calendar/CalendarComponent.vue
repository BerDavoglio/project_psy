<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <div class="calendar-component">
    <div className="w-[42rem] m-auto">
      <div className="grid grid-cols-7 mb-2">
        <div className="col-start-3 cursor-pointer text-xl"
             @click="changeMonth(selectedMonth - 1)">&lt;</div>
        <div className="text-xl">{{ getMonthName() }}</div>
        <div className="cursor-pointer text-xl"
             @click="changeMonth(selectedMonth + 1)">></div>
      </div>
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
             v-for="marker in (new Date(this.date.getFullYear(), selectedMonth, 1).getDay())"
             v-bind:key="marker">
        </div>
        <div :className="['w-[6rem] h-[6rem] border-[0.5px] hover:bg-blue-300 cursor-pointer '
          + (day === selectedDay ? 'bg-blue-200' : '')]"
             v-for="day in (new Date(this.date.getFullYear(), selectedMonth + 1, 0).getDate())"
             v-bind:key="day"
             @click="changeDay(day)">
          {{ day }}
          <div className="flex place-items-center justify-center ">
            <div v-for="obj in list"
                 v-bind:key="obj">
              <div v-if="new Date(obj.date).getDate() === day">
                <div v-if="new Date(obj.date).getMonth() === selectedMonth">
                  <div className="h-2 w-2 rounded-full bg-blue-400 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-[42rem] border-2 rounded-lg shadow-xl">
        <div className="text-xl m-2">
          Dia Selecionado: {{ selectedDay }}/{{ selectedMonth + 1 }}
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
      selectedMonth: new Date().getMonth(),
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
    changeMonth(month) {
      this.selectedMonth = month;
      if (month === 12) {
        this.selectedMonth = 0;
      }
    },
    changeListInfo() {
      const l = [];

      this.list.forEach((obj) => {
        if (new Date(obj.date).getMonth() === this.selectedMonth) {
          if (new Date(obj.date).getDate() === this.selectedDay) {
            l.push(obj);
          }
        }
      });

      this.listInfo = l;
    },
    getMonthName() {
      let monthName = '';
      switch (this.selectedMonth) {
        case 0:
          monthName = 'Janeiro';
          break;
        case 1:
          monthName = 'Fevereiro';
          break;
        case 2:
          monthName = 'Março';
          break;
        case 3:
          monthName = 'Abril';
          break;
        case 4:
          monthName = 'Maio';
          break;
        case 5:
          monthName = 'Junho';
          break;
        case 6:
          monthName = 'Julho';
          break;
        case 7:
          monthName = 'Agosto';
          break;
        case 8:
          monthName = 'Setembro';
          break;
        case 9:
          monthName = 'Outubro';
          break;
        case 10:
          monthName = 'Novembro';
          break;
        case 11:
          monthName = 'Dezembro';
          break;
        default:
          console.log('Error.');
      }

      return monthName;
    },
  },
};
</script>
