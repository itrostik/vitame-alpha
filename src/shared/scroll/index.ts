'use client'

export const preventScroll = (e: Event) => {
    e.preventDefault()
}

const preventScrollOnKey = (e: KeyboardEvent) => {
    // Проверка клавиш Page Down и Page Up
    if (e.key === 'PageDown' || e.key === 'PageUp') {
        e.preventDefault()
    }
}

export const addScrollPrevention = () => {
    document.body.style.overflow = 'hidden'

    // const listenerOptions: AddEventListenerOptions = {
    //     passive: false
    // }
    //
    // document.body.addEventListener('wheel', preventScroll, listenerOptions)
    // document.body.addEventListener('touchmove', preventScroll, listenerOptions)
    // document.body.addEventListener('keydown', preventScrollOnKey, listenerOptions)
}

export const removeScrollPrevention = () => {
    document.body.style.overflow = 'auto'

    // const listenerOptions: AddEventListenerOptions = {
    //     passive: false
    // }
    //
    // document.body.removeEventListener('wheel', preventScroll, listenerOptions)
    // document.body.removeEventListener('touchmove', preventScroll, listenerOptions)
    // document.body.removeEventListener('keydown', preventScrollOnKey, listenerOptions)
}
