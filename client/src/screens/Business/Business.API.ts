import { 
        createBusiness,
        updateBusiness,
        deleteBusiness,
         } from "../../graphql/mutations";
import { listBusinesses } from "../../graphql/queries";
import { CreateBusinessInput } from "../../API";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

export const createNewBusiness = async (businessDetails: CreateBusinessInput) => {
    try {
        const newBusiness = await client.graphql({
            query:createBusiness,
            variables: {
                input: {
                    name: businessDetails.name,
                    cusineType: businessDetails.cusineType,
                    address: businessDetails.address,
                    email: businessDetails.email,
                    phone: businessDetails.phone,
                    picture: businessDetails.picture,
                    type: businessDetails.type,
                    firstName: businessDetails.firstName,
                    lastName: businessDetails.lastName,
                }
            }
        })
        return newBusiness;

    } catch (error:any) {
        console.error('Error creating business:', error);
        throw error;
    }
}

