/* tslint:disable:max-line-length */
export const regex = {
	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	password: /@"^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)).+$/,
	number: /^\d+$/,
};

export const regexErrors = {
	email: 'El email es incorrecto',
	password: 'la contraseña debe tener al menos 6 caracteres, no más de 18 caracteres y debe incluir al menos una letra mayúscula, una letra minúscula y un dígito numérico.',
	number: 'Solo puede ingresar numeros'
}
