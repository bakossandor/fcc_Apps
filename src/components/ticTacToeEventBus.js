import Vue from 'vue'

export const eventBus = new Vue({
	data: {
		onePlayerMode: true,
        onePlayerModePlayerIsX: true,
        fields: [
            {field: 0, disabled: false},
            {field: 1, disabled: false},
            {field: 2, disabled: false},
            {field: 3, disabled: false},
            {field: 4, disabled: false},
            {field: 5, disabled: false},
            {field: 6, disabled: false},
            {field: 7, disabled: false},
            {field: 8, disabled: false},
        ],
        isXTurnIsTheNext: true,
        isPlayerIsTheNext: true,
    },
})