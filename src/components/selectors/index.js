export const getNewColor = (state) => {
    return (state && state.new_color) || null
}

export const getCurrentCirclePosition = (state) => {
    return (state && state.position) || null
}