export const endpoints = {
    atrapaniebla: {
        todo: () => `/atrapaniebla`,
        one: (idAtrapaniebla: number) => `/atrapaniebla/${idAtrapaniebla}`,
        listPending: () => `/atrapaniebla/listrar_pendientes`,
        googlemap: () => `/atrapaniebla_google_maps`,
        photo: () => `/atrapaniebla/foto_atrapanieblas`,
        pending: () => `/atrapaniebla/listar_pendiente`,
        status: (idAtrapaniebla: number) => `/atrapaniebla/estado_atrapanieblas/${idAtrapaniebla}`,
    },
    dispositivo: {
        todo: () => `/dispositivo`,
        one: (idDispositivo: number) => `/dispositivo/${idDispositivo}`,
        captacion: (idDispositivo: string, month: string, year: string) => `/dispositivo_catacion_agua/${idDispositivo}/${month}/${year}`,
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
    authentication: {
        login: (model) => `/login/${model.user}`
    },
    tanque: {
        todo: () => `/tipo_tanque`,
        one: (idTanque: number) => `/tipo_tanque/${idTanque}`,
    },
    auth: {
        login: () => `/login`
    }
};