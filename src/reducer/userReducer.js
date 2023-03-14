import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //Adicionar Usuario
    setUser: (state, action) => {
      state.user = action.payload;
    },
    delUser: (state) => {
      state.user = null;
      localStorage.removeItem("azul_user");
    },
    actUser:(state,action)=>{
      let property=Object.keys(action.payload)[0];
      let value=action.payload[`${property}`];
      switch (property) {
        case "profession":
          state.user={...state.user,profession:value}
          break;
          case "idioms":
          state.user={...state.user,idioms:value}
          break;
          case "about":
            state.user={...state.user,about:value}
            break;
            case "located":
              state.user={...state.user,located:value}
              break;
              case "image_banner":
              state.user={...state.user,image_banner:value}
              break;
              case "image_profile":
              state.user={...state.user,image_banner:value}
              break;
              case "tel1":
                state.user={...state.user,tel1:value}
                break;
            case "tel2":
                  state.user={...state.user,tel2:value}
                  break;
            
        default:
          break;
      }
      localStorage.setItem("azul_user",JSON.stringify(state.user));
    }
  },
});

// Action creators are generated for each case reducer function
export const { setUser, delUser,actUser } = userSlice.actions;

export default userSlice.reducer;
