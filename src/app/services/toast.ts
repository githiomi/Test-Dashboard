import {toast} from 'react-hot-toast';

export const displayErrorToast = (message: string = "No details to show at the moment") : void => {
   toast.error(message, {
      duration: 2000,
      style: { backgroundColor: 'black', color: 'red', border: '1px solid red' },
      icon: '⚠️'
   })
}