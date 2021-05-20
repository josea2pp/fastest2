
/**************USER CONSTANT******************* */

export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

/*******************API SERVICE*************** */
import singup from '../API/singup';

function actionUserRequest() {
	return {
		type: USER_REQUEST,
	}
}


function actionUserSuccess(user) {
	return {
		type: USER_SUCCESS,
		payload: user,
	}
}

function actionUserFailure() {
	return {
		type: USER_FAILURE,
	}
}


export  function fetchLogin(body) {

	// Thunk middleware sabe como manejar funciones.
	// Pasa el método de despacho como un argumento a la función,
	// haciéndolo así capaz de despachar las acciones por sí mismo.

	return  function (dispatch) {

		// Primer envío: se actualiza el estado de la aplicación para informar
		// que la llamada al API está iniciando.

		dispatch(actionUserRequest())

        // example request to API
		 return singup.post(body)
			.then(res => {
				if (res.data.status === 200) {
					dispatch(actionUserSuccess(res.data));
				}

			})
			.catch((error) => {
				// ¡Podemos despachar muchas veces!
				// Aquí, actualizamos el estado de la aplicación con los resultados de la llamada a la API.
				dispatch(actionUserFailure());

				if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                  } else if (error.request) {
                    // The request was made but no response was received
                    // error.request is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                  }
                  console.log(error.config);
              


				// ADD THIS THROW error
				throw error;
			});


	}
}

