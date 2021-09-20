import {sp, op, cu } from '../components/SettingSelect' 


export const getData = () => {
    return (dispatch) => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Uxko0rZrgWQg2VPgakQFEF4GRJXcBnxRVZx9Luch")
            .then(resp => resp.json())
            .then(photos => {
                dispatch({
                    type: "GET_NASA",
                    payload: photos
                })
            })
        }
}

