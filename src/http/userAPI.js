import {$host} from './index'

export const registration =  async(email, address, phone) => {
    const response = await $host.post('api/user/reg', {email, address, phone});
    return  response
}