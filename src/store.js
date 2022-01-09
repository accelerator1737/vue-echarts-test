import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        currentID: 2,
        count: 0,
        mapData: null,
        list:[

        ],
        showingList: [

        ],
    },
    mutations: {//同步
        add(state, n){
            state.count += n;
        },
        SET_MAP_DATA(state,mapData){
            state.mapData = mapData;
        },
        CREATE(state, newName){
            state.list.push({
                id: state.currentID,
                name: newName,

            });
            state.showingList = state.list.concat();
        },
        // DELETE(state, id){

        // }
    },
    actions:{//异步
        async updateMapData(context){
            const res = await axios.get('/map/china.json');
            context.commit('SET_MAP_DATA', res.data);
        }
    },
})