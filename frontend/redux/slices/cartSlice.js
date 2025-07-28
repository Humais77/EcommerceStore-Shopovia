import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const loadCarFromStorge =()=>{
    const storedCart =localStorage.getItem("cart");
    return storedCart?JSON.parse(storedCart):{products:[]};
};
const saveCartToStorage = (cart)=>{
    localStorage.setItem("cart",JSON.stringify(cart));

};
export const fetchCart = createAsyncThunk('cart/fetchCart',async({userId,guestId},{rejectedWithValue})=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/cart`,{
            params:{userId,guestId},
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return rejectedWithValue(error.response.data);
        
    }
})
export const addToCart = createAsyncThunk("cart/addToCart",async({productId,quantity,size,color,guestId,userId},{rejectedWithValue})=>{
    try {
         const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/cart`,{
            productId,quantity,size,color,guestId,userId,
         });
         return response.data
        
    } catch (error) {
        console.error(error);
        return rejectedWithValue(error.response.data);
    }
});
export const updateToCartItemQuantity = createAsyncThunk("cart/updateCartItemQuantity",async({productId,quantity,size,color,guestId,userId},{rejectedWithValue})=>{
    try {
        const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/cart`,{
        productId,quantity,size,color,guestId,userId
    });
        return response.data     
    } catch (error) {
        console.error(error);
        return rejectedWithValue(error.response.data);
        
    }
});
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async ({ productId, size, color, guestId, userId }, { rejectedWithValue }) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
        data: {
          productId,
          size,
          color,
          guestId,
          userId,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectedWithValue(error.response?.data || { message: "Server Error" });
    }
  }
);

export const mergeCart = createAsyncThunk("cart/mergeCart",async({guestId,userId},{rejectedWithValue})=>{
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/cart`,{
            guestId,userId},{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("userToken")}`
                }
            });
        return response.data;

        
    } catch (error) {
        return rejectedWithValue(error.response.data);
    }
});
const CartSlice = createSlice({
    name:"auth",
    initialState:{
        cart:loadCarFromStorge(),
        loading:false,
        error:null,
    },
    reducers:{
        clearCart:(state)=>{
            state.cart={products:[]};
            localStorage.removeItem('cart');
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCart.pending,(state)=>{
            state.loading = true;
            state.error=null;
            
        })
        .addCase(fetchCart.fulfilled,(state,action)=>{
            state.loading = false;
            state.cart = action.payload;
            saveCartToStorage(action.payload);

        })
        .addCase(fetchCart.rejected,(state,action)=>{
            state.loading = false;
            state.error=action.error.message || "Failed to fetch cart";

        })
        .addCase(addToCart.pending,(state)=>{
            state.loading = true;
            state.error=null;
            
        })
        .addCase(addToCart.fulfilled,(state,action)=>{
            state.loading = false;
            state.cart = action.payload;
            saveCartToStorage(action.payload);

        })
        .addCase(addToCart.rejected,(state,action)=>{
            state.loading = false;
            state.error=action.payload?.message || "Failed to add to  cart";

        })
        .addCase(updateToCartItemQuantity.pending,(state)=>{
            state.loading = true;
            state.error=null;
            
        })
        .addCase(updateToCartItemQuantity.fulfilled,(state,action)=>{
            state.loading = false;
            state.cart = action.payload;
            saveCartToStorage(action.payload);

        })
        .addCase(updateToCartItemQuantity.rejected,(state,action)=>{
            state.loading = false;
            state.error=action.payload?.message || "Failed to update item quantity";

        })
        .addCase(removeFromCart.pending,(state)=>{
            state.loading = true;
            state.error=null;
            
        })
        .addCase(removeFromCart.fulfilled,(state,action)=>{
            state.loading = false;
            state.cart = action.payload;
            saveCartToStorage(action.payload);

        })
        .addCase(removeFromCart.rejected,(state,action)=>{
            state.loading = false;
            state.error=action.payload?.message || "Failed to remove item ";

        })
        .addCase(mergeCart.pending,(state)=>{
            state.loading = true;
            state.error=null;
            
        })
        .addCase(mergeCart.fulfilled,(state,action)=>{
            state.loading = false;
            state.cart = action.payload;
            saveCartToStorage(action.payload);

        })
        .addCase(mergeCart.rejected,(state,action)=>{
            state.loading = false;
            state.error=action.payload?.message || "Failed to merge cart";

        })
    }
});
export const {clearCart}=CartSlice.actions;
export default CartSlice.reducer;