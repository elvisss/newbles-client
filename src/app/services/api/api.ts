export const endpoints = {
    atrapaniebla: {
        todo: () => `/atrapaniebla`,
        one: (idAtrapaniebla: string) => `/atrapaniebla/${idAtrapaniebla}`,
        googlemap: () => `/atrapaniebla_google_maps`,
    },
    dispositivo: {
        todo: () => `/dispositivo`,
        one: (idDispositivo: string) => `/dispositivo/${idDispositivo}`,
        catacion: (idDispositivo: string) => `/dispositivo_catacion_agua/${idDispositivo}`,
    },
    bateria: {
        todo: () => `/tipo_bateria`,
        one: (idBateria: number) => `/tipo_bateria/${idBateria}`,
    },
    disenio: {
        todo: () => `/tipo_disenio`,
        one: (idDisenio: number) => `/tipo_disenio/${idDisenio}`,
    },
    malla: {
        todo: () => `/tipo_malla`,
        one: (idDisenio: number) => `/tipo_malla/${idDisenio}`,
    },
    servomotor: {
        todo: () => `/tipo_servomotor`,
        one: (idServoMotor: number) => `/tipo_servomotor/${idServoMotor}`,
    },
    tanque: {
        todo: () => `/tipo_tanque`,
        one: (idTanque: number) => `/tipo_tanque/${idTanque}`,
    },
    auth: {
        login: () => `/login`
    }
};