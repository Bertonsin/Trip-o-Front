import { definePreset } from "@primeuix/themes";
import Aura from '@primeuix/themes/aura';
export const preset = definePreset(Aura,{
    semantic:{
        colorScheme: {
            light: {
                semantic: {
                    highlight: {
                        color: '#oklch(0.58 0.13 35) !important',
                    },
                    primary: {
                        color: 'oklch(0.58 0.13 35) !important',
                        hoverColor: 'oklch(0.48 0.13 35) !important',
                        activeColor: 'oklch(0.38 0.13 35) !important',
                    },
                    secondary: {
                        color: 'oklch(0.28 0.04 40) !important',
                        hoverColor: 'oklch(0.18 0.04 40) !important',
                        activeColor: 'oklch(0.08 0.04 40) !important',
                    },
                }
            },
        }
    },
    components: {
        dialog: {
            colorScheme: {
                light: {
                    root:{
                        background: 'oklch(0.965 0.022 80) !important',
                        borderRadius: '16px !important',
                        color: 'oklch(0.28 0.04 40) !important',
                    },
                },
            },
        },
        button:{
            colorScheme:{
                light:{
                    root:{
                        borderRadius: '16px !important',
                        paddingX: '20px !important',
                        paddingY: '10px !important',
                    }
                }
            }
        },
        inputtext:{
            colorScheme:{
                light:{
                    root:{
                        borderRadius: '12px !important',
                        paddingX: '20px !important',
                        paddingY: '16px !important',
                        background: 'oklch(0.965 0.022 80) !important',
                        borderColor: 'oklch(0.86 0.025 75) !important',
                        color: 'oklch(0.28 0.04 40) !important',
                    }
                }
            }
        }
    },
});