import { parse } from "@vue/compiler-dom";
import axios from "axios";
export const eventsStore = {
    state: () => ({
        events: [],
        selectedSort: ''
    }),

    getters: {
        getEvents(state) {
            return state.events;
        },
        sortEvents(state) {
            if (state.selectedSort === 'address') {
                return [...state.events].sort((ev1, ev2) =>
                    ev1[state.selectedSort]?.localeCompare(ev2[state.selectedSort]
                    ));
            }
            else {

                return [...state.events].sort((ev1, ev2) => {
                    const months = {
                        'января': "January",
                        'февраля': "February",
                        'марта': "March",
                        'апреля': "April",
                        'мая': "May",
                        'июня': "June",
                        'июля': "July",
                        'августа': "August",
                        'сентября': "September",
                        'октября': "October",
                        'ноября': "November",
                        'декабря': "December"
                    }
                    

                    function data_sort(ev) {
                        const d = ev.split(" ");
                        d[1] = months[d[1]];
                        return d.join(' ')
                    };
                    const def_ev1 = data_sort(ev1["date"]);
                    const def_ev2 = data_sort(ev2["date"]);
                  
                    return Date.parse(def_ev1) - Date.parse(def_ev2);
                    
                })

            }
        },

    },
    mutations: {
        setEvents(state, events) {
            state.events = events;
        },
        addEvent(state, newEvent) {
            state.events.push(newEvent);
        },
        delEvent(state, id) {
            state.events = state.events.filter(ev => ev.id !== id);
        },
        setSelectedSort(state, name) {
            state.selectedSort = name;
        },
        updateEvent(state, id) {
            state.events.map((ev) => {
                if (ev.id === id) {
                    ev.status = "Выполнен"
                }
            })
        },

    },
    actions: {
        async allEvents({ commit }) {
            try {
                await axios.get("http://localhost:5000/api/events/")
                    .then((response) => {
                        if (response.data) {
                            commit("setEvents", response.data);
                        }
                    })
            }
            catch (e) {
                console.log(e);
            }
        },
        async addEvent({ commit }, newEvent) {
            try {
                await axios.post("http://localhost:5000/api/events/", newEvent)
                    .then((response) => {
                        if (response.data) {
                            commit("addEvent", response.data);
                        }
                    })
            } catch (e) {
                console.log(e);
            }
        },
        async updateEventAction({ commit }, id) {
            try {
                await axios.put(`http://localhost:5000/api/events/update?id=${id}`)
                    .then((response) => {
                        if (response.status === 200) {
                            // console.log(response);
                            commit("updateEvent", id);
                        }
                    })
            } catch (e) {
                console.log(e);
            }
        },
        async deleteEventAction({ commit }, id) {
            try {
                await axios.delete(`http://localhost:5000/api/events/delete?id=${id}`)
                    .then((response) => {
                        if (response.status === 200) {
                            // console.log(response);
                            commit("delEvent", id);
                        }
                    })
            } catch (e) {
                console.log(e);
            }
        }

    },
    namespaced: true,

};
