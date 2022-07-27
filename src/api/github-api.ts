import { apiGet } from './general'

const githubUrl = 'https://api.github.com'

export const searchUsers = (searchValue: string) => apiGet(`${githubUrl}/search/users?q=${searchValue} type:user`).then(res => console.log(res))
export const getUser = (userName: string) => apiGet(`${githubUrl}/users/${userName}`).then((res: any) => console.log(res))