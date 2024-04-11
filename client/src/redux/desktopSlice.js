import { createSlice } from '@reduxjs/toolkit'

const desktopSlice = createSlice({
    name: 'desktop',
    initialState: {
        sectionOne: false,
        sectionTwo: false,
        cart: [],
        reciept:false,
        userCredentials:{},
        signInOrSignUp:true,
        mobileSideBar:false
    },
    reducers: {
        setSecionOne: function (state, action) {
            state.sectionOne = action.payload
        },
        setSecionTwo: function (state, action) {
            state.sectionTwo = action.payload
        },
        updateCart: function (state, action) {
            state.cart = action.payload
        },
        updatePurchaseIncrement: function (state, action) {
            const receiveUpdate = action.payload
            const findOne = state.cart.find(function (details) {
                return details.id === receiveUpdate.id
            })
            if (findOne) {
                findOne.noOfPurchase++
                findOne.totalPrice += receiveUpdate.price
            }
        },
        updatePurchaseDecrement: function (state, action) {
            const receiveUpdate = action.payload

            const findOne = state.cart.find(function (details) {
                return details.id === receiveUpdate.id
            })
            if (findOne) {
                findOne.noOfPurchase--
                findOne.totalPrice -= receiveUpdate.price
            }
            if(findOne.noOfPurchase < 1){
                findOne.noOfPurchase = 1  
                findOne.totalPrice = receiveUpdate.totalPrice
            }
        },
        filterCart:function(state, action){
            state.cart = action.payload
        },
        updateReciept:function(state, action){
            state.reciept = action.payload
        },
        updateUserCredentials:function(state, action){
            state.userCredentials = action.payload
        },
        updateSignInOrSignOut:function(state, action){
            state.signInOrSignUp = action.payload
        },
        updateMobileSideBar:function(state, action){
            state.mobileSideBar = action.payload
        }

    }
})

export const {
    setSecionOne, setSecionTwo, updateCart,updateReciept,
    updatePurchaseIncrement, updatePurchaseDecrement,
    filterCart,updateUserCredentials,updateSignInOrSignOut,
    updateMobileSideBar
} = desktopSlice.actions
export default desktopSlice.reducer