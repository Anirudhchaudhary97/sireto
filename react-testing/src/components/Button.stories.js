
import Button from "./Button";


export default {
  component: Button
};

export const Primary = {
  args:{
    label:'Primary Button',
    primary:false,
    backgroundColor:"red"


  },
};
export const Secondary = {
    args: {
      label: 'Secondary Button',
      primary: true,
      backgroundColor:"yellow"
    
    },
  };