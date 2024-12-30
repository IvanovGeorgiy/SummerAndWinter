import {$host} from './index'

export const registration =  async(name, email, address, phone) => {
    const response = await $host.post('api/user/reg', {name, email, address, phone});
    return  response
}