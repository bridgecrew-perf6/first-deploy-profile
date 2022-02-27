import { useLayoutEffect, useState } from "react";


export  let useTheme = ()=> {
    let [theme , setTheme] = useState('light');

    useLayoutEffect(()=> {
        document.documentElement.setAttribute('data-theme' , theme)
    }, [theme])


    return {theme , setTheme};
}