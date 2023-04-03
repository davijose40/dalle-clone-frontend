const development = import.meta.env.VITE_HOST_DEV

const production = import.meta.env.VITE_HOST_PROD

const RESOURCEHOMEPOST = import.meta.env.VITE_RESOURCE_HOME_POST

const HOST = process.env.NODE_ENV === 'production' ? production : development

export default {
    RESOURCEHOMEPOST,
    HOST
}