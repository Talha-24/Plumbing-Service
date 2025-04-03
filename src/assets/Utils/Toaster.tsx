import toast from "react-hot-toast";



export const Toast = {

    success: () => {
        toast.success(message, time = 2000, background = "#333", color = "white", {
            style: {
                background: background,
                color: color,

            },
            iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
            },
            duration: time,
        })
    },

    error: (message, time = 3000, background = "red", color = "white") => {


        toast.error(message, {
            style: {
                color: color,
                background: background,
                border: "1px solid white",
                padding: "10px",
            },
            iconTheme: {
                primary: "#FC34000",
                secondary: "blue",
            },
            duration: time,
        })

    }


}