import {configureStore} from '@reduxjs/toolkit'
import desktopSlice from './desktopSlice'

const desktops={
    deskopHome : desktopSlice
}

const desktopActions = configureStore({
    reducer:desktops
})

export default desktopActions