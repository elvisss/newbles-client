export const endpoints = {
    atrapaniebla: {
        todo: () => `/atrapaniebla`,
        one: (idAtrapaniebla: string) => `/atrapaniebla/${idAtrapaniebla}`,
        googlemap: () => `/atrapaniebla_google_maps`,
    },
    dispositivo: {
        todo: () => `/dispositivo`,
        one: (idDispositivo: string) => `/dispositivo/${idDispositivo}`,
        catacion: () => `/dispositivo_catacion_agua`,
    },
    bateria: {
        todo: () => `/tipo_bateria`,
        one: (idBateria: number) => `/tipo_bateria/${idBateria}`,
    },
    auth: {
        login: () => `/login`
    }
};