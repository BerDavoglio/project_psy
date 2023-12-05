<!-- eslint-disable vue/max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <div class="calendar-component">
    <div className="max-w-[42rem] m-auto">
      <div :className="['grid mb-2 '] + (this.isCell ? 'grid-cols-3' : 'grid-cols-7')">
        <div
          :className="['cursor-pointer text-xl ' + (this.isCell ? '' : 'col-start-3')]"
          @click="changeMonth(selectedMonth - 1)">&lt;</div>
        <div className="text-xl">{{ getMonthName() }}</div>
        <div
          className="cursor-pointer text-xl"
          @click="changeMonth(selectedMonth + 1)">></div>
      </div>
      <div className="grid grid-cols-7">
        <div className="max-w-[6rem] h-[1rem] text-[0.7rem] border-[0.5px]">Domingo</div>
        <div className="max-w-[6rem] h-[1rem] text-[0.7rem] border-[0.5px]">Segunda</div>
        <div className="max-w-[6rem] h-[1rem] text-[0.7rem] border-[0.5px]">Terça</div>
        <div className="max-w-[6rem] h-[1rem] text-[0.7rem] border-[0.5px]">Quarta</div>
        <div className="max-w-[6rem] h-[1rem] text-[0.7rem] border-[0.5px]">Quinta</div>
        <div className="max-w-[6rem] h-[1rem] text-[0.7rem] border-[0.5px]">Sexta</div>
        <div className="max-w-[6rem] h-[1rem] text-[0.7rem] border-[0.5px]">Sábado</div>
      </div>
      <div className="grid grid-cols-7">
        <div
          className="max-w-[6rem] h-[6rem] border-[0.5px] border-red-500 hover:bg-red-600"
          v-for="marker in (new Date(this.date.getFullYear(), selectedMonth, 1).getDay())"
          v-bind:key="marker" />
        <div
          :className="['max-w-[6rem] h-[6rem] border-[0.5px] hover:bg-blue-300 cursor-pointer '
            + (day === selectedDay ? 'bg-blue-200' : '')]"
          v-for="day in (new Date(this.date.getFullYear(), selectedMonth + 1, 0).getDate())"
          v-bind:key="day"
          @click="changeDay(day)">
          {{ day }}
          <div className="flex place-items-center justify-center ">
            <div
              v-for="obj in useCalendarStore().getList"
              v-bind:key="obj">
              <div v-if="new Date(obj.date).getDate() === day">
                <div v-if="new Date(obj.date).getMonth() === selectedMonth">
                  <div
                    className="h-2 w-2 rounded-full bg-blue-400 mx-auto"
                    @click="changeDay(day)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <div className="cursor-pointer text-xl">
          <div
            className="w-full p-2 text-sm bg-green-200 my-2 mx-auto
      rounded-xl cursor-pointer shadow-xl"
            @click="useCalendarStore().requestCalendar()">
            Recarregar Calendário
          </div>
        </div>
      </div>
      <div className="mt-4 max-w-[42rem] border-2 rounded-lg shadow-xl">
        <div className="text-xl m-2">
          Dia Selecionado: {{ selectedDay }}/{{ selectedMonth + 1 }}
        </div>
        <div v-if="listInfo.length != 0">
          <div
            v-for="obj in listInfo"
            v-bind:key="obj">
            <div
              :className="['grid text-justify bg-blue-200 rounded-md m-2 '
                + (this.isCell ? 'grid-cols-1' : 'grid-cols-4')]">
              <div className="m-2">
                <strong>Paciente: </strong>
                {{ useLoginStore().getListPerfilsID.find(pat => pat.id === obj.patient_id).name }}
                <br />
                <strong>Doutor(a): </strong>
                {{ useProfissionalStore().getListProfissionalsIDNAME.find(doc => doc.id === obj.doctor_id).name }}
              </div>
              <div className="m-2">
                <strong>Horário marcado: </strong>
                {{ new Date(obj.date).getHours() }}hr {{ new Date(obj.date).getMinutes() }}min
              </div>
              <div className="m-2">
                <strong>Descrição: </strong>
                {{ obj.description }}
              </div>
              <div
                v-if="!obj.is_finished"
                className="my-2 mx-auto">
                <div
                  className="py-1 px-8 m-2 rounded-lg cursor-pointer bg-green-400"
                  @click="confirmFinish([true, obj])">
                  Finalizar
                </div>
                <div
                  className="py-1 px-8 m-2 rounded-lg cursor-pointer bg-yellow-400"
                  @click="this.$router.push({ name: 'admin-new-book', params: { id: obj.id } });">
                  Editar
                </div>
                <div
                  className="text-white py-1 px-8 m-2 rounded-lg cursor-pointer bg-red-400"
                  @click="confirmDelete([true, obj])">
                  Apagar
                </div>
              </div>
              <div
                v-if="obj.is_finished"
                className="my-2 mx-auto">
                <div className="py-6 px-8 m-2 rounded-lg cursor-not-allowed bg-gray-400">
                  Finalizado
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else-if="selectedDay === 0"
          className="my-20">
          Selecione um dia!
        </div>
        <div
          v-else
          className="my-20">
          Não há nenhum horário marcado para esse dia!
        </div>
      </div>
    </div>
    <v-dialog
      v-model="confirmDel[0]"
      width="auto">
      <confirm-delete-popup
        @confirmDelete="confirmDelete"
        :pre_data="confirmDel[1]" />
    </v-dialog>
    <v-dialog
      v-model="confirmFin[0]"
      width="auto">
      <confirm-finish-popup
        @confirmFinish="confirmFinish"
        :pre_data="confirmFin[1]" />
    </v-dialog>
  </div>
</template>

<script setup>
import { useCalendarStore, useLoginStore, useProfissionalStore } from '../../store/store';
</script>

<script>
import ConfirmDeletePopup from './ConfirmDeletePopup.vue';
import ConfirmFinishPopup from './ConfirmFinishPopup.vue';

export default {
  name: 'CalendarComponent',
  components: { ConfirmDeletePopup, ConfirmFinishPopup },
  props: ['isCell'],
  data() {
    return {
      date: new Date(),
      selectedDay: 0,
      selectedMonth: new Date().getMonth(),
      listInfo: [],
      confirmDel: [false, null],
      confirmFin: [false, null],
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
      if (month === -1) {
        this.selectedMonth = 11;
      }
    },
    changeListInfo() {
      const l = [];

      useCalendarStore().getList.forEach((obj) => {
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
    confirmFinish(val) {
      this.confirmFin = val;
    },
    confirmDelete(val) {
      this.confirmDel = val;
    },
  },
  async beforeCreate() {
    await useCalendarStore().requestCalendar();
    await useLoginStore().requestPerfilIDNAME();
    await useProfissionalStore().requestProfissionalsIDNAME();
  },
};
</script>
