import { toast } from "react-toastify";

export const notificationService = (success, error, messages, mode) => {
    switch(mode) {
        case 'successOnly':
            return toast.success(messages.onSuccess);
        case 'errorOnly':
            return toast.error(messages.onError);
        default:
            if(success) {
                return toast.success(messages.onSuccess);
            }
            if(error) {
                return toast.error(messages.onError);
            }
        return;
    }
}