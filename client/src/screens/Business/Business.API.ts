import { 
        createBusiness,
        updateBusiness,
        deleteBusiness,
         } from "../../graphql/mutations";
import { listBusinesses } from "../../graphql/queries";
import { CreateBusinessInput,
         UpdateBusinessInput,
         UpdateBusinessMutation } from "../../API";
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

export const UpdateBusinessDetails = async (businessId: string, businessDetails: UpdateBusinessInput) => {
    try {
        const updatedBusiness = await client.graphql({
            query: updateBusiness,
            variables: {
                input: businessDetails
                }
            });

        return updatedBusiness;
    } catch (error:any) {
        console.error('Error updating business:', error);
        throw error;
    }
}

/*
// Code to use if the id from updateBusinessInput is not the same as the id of the instance
// that we are trying to update

export const updateBusinessDetails = async (businessId: string, businessDetails: UpdateBusinessInput) => {
    try {
        const { id, ...rest } = businessDetails; // Destructure to exclude 'id' from 'businessDetails'
        
        const updatedBusiness = await API.graphql({
            query: updateBusiness,
            variables: {
                input: {
                    id: businessId,
                    ...rest
                }
            }
        });

        return updatedBusiness; // Should be 'updatedBusiness' not 'updateBusiness'
    } catch (error:any) {
        console.error('Error updating business:', error);
        throw error;
    }
}
*/
